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
