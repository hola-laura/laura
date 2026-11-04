/* Prototipo animado del panel: edita, guarda y la web se actualiza. Se detiene fuera de pantalla. */
(function () {
  const root = document.getElementById('mg-proto');
  if (!root) return;
  const $ = (s) => root.querySelector(s);
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cursor = $('.mgp-cursor'), boton = document.getElementById('mg-pause'), textoBoton = boton;
  let enPausa = false, visible = false, activa = false;

  const espera = async (ms) => {
    let t = 0;
    while (t < ms) {
      await new Promise((r) => setTimeout(r, 50));
      if (!enPausa && visible) t += 50;
    }
  };
  const ir = async (el, dx = 0.6, dy = 0.55) => {
    const a = root.getBoundingClientRect(), b = el.getBoundingClientRect();
    cursor.style.transform = `translate(${b.left - a.left + b.width * dx}px,${b.top - a.top + b.height * dy}px)`;
    await espera(680);
  };
  const escribir = async (el, texto) => {
    el.classList.add('focus');
    while (el.textContent) { el.textContent = el.textContent.slice(0, -1); await espera(26); }
    for (const c of texto) { el.textContent += c; await espera(55); }
    await espera(280);
    el.classList.remove('focus');
  };
  const destacar = (el) => { el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); };
  const guardar = async (btn, cambio) => {
    await ir(btn); btn.classList.add('press'); await espera(130); btn.classList.remove('press');
    await espera(170);
    const t = $('.mgp-toast'); t.classList.add('on');
    await espera(420); cambio(); await espera(2300); t.classList.remove('on'); await espera(300);
  };
  const vista = (n) => {
    root.querySelectorAll('[data-sec]').forEach((s) => s.classList.toggle('on', s.dataset.sec === n));
    root.querySelectorAll('.mgp-view,.mgp-page').forEach((v) => v.classList.toggle('on', v.dataset.v === n));
  };
  const plazas = (n) => {
    $('#p-num').textContent = n; $('#s-txt').textContent = `${n} plazas de 8`;
    root.querySelectorAll('.mgp-seats i').forEach((d, i) => d.classList.toggle('on', i < 8 - n));
  };
  const inicial = () => {
    vista('portada'); $('#p-tit').textContent = 'Saber cuándo avanzar.'; $('#s-tit').textContent = 'Saber cuándo avanzar.';
    $('#p-btn').textContent = 'Ver próximas salidas'; $('#s-btn').textContent = 'Ver próximas salidas'; plazas(5);
  };
  const final = () => {
    vista('salidas'); $('#p-tit').textContent = 'Cada salida, a tu ritmo.'; $('#s-tit').textContent = 'Cada salida, a tu ritmo.';
    $('#p-btn').textContent = 'Reserva tu plaza'; $('#s-btn').textContent = 'Reserva tu plaza'; plazas(4);
  };
  async function bucle() {
    if (activa) return; activa = true;
    while (true) {
      inicial(); await espera(1100);
      await ir($('#p-tit')); await escribir($('#p-tit'), 'Cada salida, a tu ritmo.');
      await ir($('#p-btn')); await escribir($('#p-btn'), 'Reserva tu plaza');
      await guardar($('#save-a'), () => { $('#s-tit').textContent = 'Cada salida, a tu ritmo.'; $('#s-btn').textContent = 'Reserva tu plaza'; destacar($('#s-btn')); });
      await ir($('[data-sec="salidas"]'), .5); await espera(180); vista('salidas'); await espera(900);
      await ir($('#p-num')); await escribir($('#p-num'), '4');
      await guardar($('#save-b'), () => { plazas(4); destacar($('#s-row')); });
      await espera(1000);
    }
  }
  const etiqueta = (p) => (document.documentElement.lang === 'es' ? (p ? 'Reanudar' : 'Pausar') : (p ? 'Play' : 'Pause'));
  textoBoton.textContent = etiqueta(false);
  if (quieto) { final(); boton.hidden = true; return; }
  boton.addEventListener('click', () => { enPausa = !enPausa; textoBoton.textContent = etiqueta(enPausa); boton.setAttribute('aria-pressed', enPausa); });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) bucle(); }, { threshold: .25 }).observe(root);
  inicial();
})();

/* Gráfica de altitud real: se dibuja al llegar y cada punto se arrastra enlazado con su número. */
(function () {
  const svg = document.getElementById('mg-alt');
  if (!svg) return;
  const lista = document.querySelector('.mg-numbers'), pista = document.getElementById('mg-alt-hint');
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MIN = 1700, MAX = 2500, PASO = 10, ESCALA = 198 / (MAX - MIN);
  const aY = (a) => 212 - (a - MIN) * ESCALA;
  const metros = (a) => `${String(a).replace(/(\d)(\d{3})$/, '$1.$2')} m`;
  const [area, linea] = svg.querySelectorAll('path');
  const puntos = [...svg.querySelectorAll('circle')], valor = svg.querySelector('text[font-weight]');
  const xs = puntos.map((c) => Number(c.getAttribute('cx')));
  const alt = lista.textContent.split(',').map(Number);
  area.classList.add('area'); linea.classList.add('line'); valor.classList.add('val');
  linea.setAttribute('pathLength', 1);
  puntos.forEach((c, i) => { c.classList.add('dot'); c.setAttribute('r', 4.5); c.setAttribute('fill', '#fff'); c.style.setProperty('--d', `${(quieto ? 0 : 500) + i * 45}ms`); });

  lista.textContent = '';
  const nums = alt.map((a, i) => {
    const s = document.createElement('span');
    s.className = 'mg-num'; s.textContent = a;
    lista.append(s, i < alt.length - 1 ? ', ' : '');
    return s;
  });
  const zonas = xs.map((x, i) => {
    const r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    r.setAttribute('class', 'hit'); r.setAttribute('width', 51); r.setAttribute('height', 90); r.setAttribute('x', x - 25.5);
    r.setAttribute('role', 'slider'); r.setAttribute('tabindex', i === 5 ? 0 : -1);
    r.setAttribute('aria-label', t('Altitude, point {n} of {total}', { n: i + 1, total: alt.length }));
    r.setAttribute('aria-valuemin', MIN); r.setAttribute('aria-valuemax', MAX);
    svg.append(r);
    return r;
  });

  let activo = null, tocado = false, enAnimacion = 0;
  const cima = () => alt.indexOf(Math.max(...alt));
  const pintar = () => {
    const d = alt.map((a, i) => `${i ? 'L' : 'M'}${xs[i]} ${aY(a).toFixed(1)}`).join(' ');
    linea.setAttribute('d', d); area.setAttribute('d', `${d} L610 212 L44 212Z`);
    const foco = activo === null ? cima() : activo, y = aY(alt[foco]);
    puntos.forEach((c, i) => { c.setAttribute('cy', aY(alt[i]).toFixed(1)); c.classList.toggle('on', i === foco); });
    nums.forEach((n, i) => { n.textContent = alt[i]; n.classList.toggle('on', i === activo); });
    zonas.forEach((z, i) => { z.setAttribute('y', aY(alt[i]) - 45); z.setAttribute('aria-valuenow', alt[i]); z.setAttribute('aria-valuetext', metros(alt[i])); });
    valor.textContent = metros(alt[foco]);
    valor.setAttribute('x', Math.min(585, Math.max(72, xs[foco])).toFixed(1));
    valor.setAttribute('y', (y > 26 ? y - 13 : y + 24).toFixed(1));
  };
  const elegir = (i) => { activo = i; pintar(); };
  const primeraVez = () => { if (tocado) return; tocado = true; cancelAnimationFrame(enAnimacion); alt[5] = 2428; pista.classList.add('off'); };
  const cambiar = (i, a) => { alt[i] = Math.max(MIN, Math.min(MAX, Math.round(a / PASO) * PASO)); pintar(); };

  zonas.forEach((z, i) => {
    let inicio = 0, base = 0;
    const yDe = (e) => new DOMPoint(e.clientX, e.clientY).matrixTransform(svg.getScreenCTM().inverse()).y;
    z.addEventListener('pointerenter', () => { if (!svg.classList.contains('drag')) elegir(i); });
    z.addEventListener('pointerleave', () => { if (!svg.classList.contains('drag')) elegir(null); });
    z.addEventListener('pointerdown', (e) => {
      primeraVez(); z.setPointerCapture(e.pointerId);
      svg.classList.add('drag'); inicio = yDe(e); base = alt[i]; elegir(i); e.preventDefault();
    });
    z.addEventListener('pointermove', (e) => { if (z.hasPointerCapture(e.pointerId)) cambiar(i, base - (yDe(e) - inicio) / ESCALA); });
    const soltar = () => { svg.classList.remove('drag'); elegir(null); };
    z.addEventListener('pointerup', soltar); z.addEventListener('pointercancel', soltar);
    z.addEventListener('focus', () => { if (z.matches(':focus-visible')) { puntos[i].classList.add('focus'); elegir(i); } });
    z.addEventListener('blur', () => { puntos[i].classList.remove('focus'); elegir(null); });
    z.addEventListener('keydown', (e) => {
      const dir = { ArrowLeft: -1, ArrowRight: 1 }[e.key], paso = { ArrowUp: PASO, ArrowDown: -PASO }[e.key];
      if (paso) { primeraVez(); cambiar(i, alt[i] + paso); e.preventDefault(); }
      if (dir && zonas[i + dir]) { z.tabIndex = -1; zonas[i + dir].tabIndex = 0; zonas[i + dir].focus(); e.preventDefault(); }
    });
    nums[i].addEventListener('pointerenter', () => elegir(i));
    nums[i].addEventListener('pointerleave', () => elegir(null));
  });

  // Tras dibujarse, la cima baja y vuelve para enseñar que se puede mover.
  const invitar = () => {
    const t0 = performance.now(), i = cima(), base = alt[i];
    activo = i;
    const paso = (ahora) => {
      if (tocado) return;
      const p = Math.min(1, (ahora - t0) / 1100);
      alt[i] = base - Math.round(Math.sin(p * Math.PI) ** 2 * 90);
      pintar();
      if (p < 1) enAnimacion = requestAnimationFrame(paso); else { alt[i] = base; activo = null; pintar(); }
    };
    enAnimacion = requestAnimationFrame(paso);
  };

  pintar();
  if (quieto) return;
  svg.classList.add('armed');
  new IntersectionObserver(([e], o) => {
    if (!e.isIntersecting) return;
    o.disconnect();
    svg.classList.add('enter'); svg.getBoundingClientRect(); svg.classList.remove('armed');
    setTimeout(() => { svg.classList.remove('enter'); if (!tocado) invitar(); }, 1500);
  }, { threshold: .35 }).observe(svg);
})();
