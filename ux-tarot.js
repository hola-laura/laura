/* UX Tarot: pick a situation, choose three cards, read them.
   Deck data lives in ux-tarot-cards.js. Language follows the site (I18n.lang). Art is geometric SVG drawn from the colour tokens in ux-tarot.css. */
(() => {
  const CARDS = window.UXT_CARDS || [];
  const mount = document.getElementById('tarot');
  if (!mount || !CARDS.length) return;

  const LANG = (window.I18n && window.I18n.lang) === 'es' ? 'es' : 'en';
  const SUITS = ['wild', 'sun', 'mtn', 'sq', 'dia', 'hex'];

  const T = {
    en: {
      step: ['The deck', 'Step 1 of 3 · Situation', 'Step 2 of 3 · Draw', 'Step 3 of 3 · Read'],
      reset: 'Start over',
      introT: 'The UX Tarot',
      introP: n => `${n} cards about making good products. Pick a situation, draw three cards and take away one thing to try this week.`,
      begin: 'Begin the reading',
      askT: 'What are you working on?',
      sits: [['Starting something', 'A blank page and a hunch'], ['Stuck halfway', 'Moving, but not getting anywhere'], ['Out of sync', 'The team pulls in different directions'], ['Launch is close', 'Almost ready, and a little nervous']],
      leads: ['For the start of something new:', 'For something stalled halfway:', 'For a team out of sync:', 'For a launch that is close:'],
      pickT: 'Choose three cards',
      pick: n => (n >= 3 ? 'Preparing your reading' : n === 2 ? 'Pick one more' : n === 1 ? 'Pick two more' : 'Tap a card to choose it'),
      slots: ['Where you stand', 'What to watch', 'Your next move'],
      hint: 'Turn each card over', turnAll: 'Reveal all',
      up: 'Advice', rev: 'Watch out', tryL: 'Try this week',
      suits: { wild: 'Wild', sun: 'Understand', mtn: 'Direct', sq: 'Make', dia: 'Review', hex: 'Team' },
      readT: 'Your reading', copy: 'Copy reading', copied: 'Copied', again: 'Draw again',
      sum: (lead, a, b, c) => `Start with ${a}. Watch out for ${b}. Then try ${c}.`,
      cardN: (i, n) => `Card ${i} of ${n}, face down`, turnN: i => `Turn card ${i} over`, chosen: (i, k) => `Card ${i}, chosen as number ${k}`
    },
    es: {
      step: ['La baraja', 'Paso 1 de 3 · Situación', 'Paso 2 de 3 · Elegir', 'Paso 3 de 3 · Leer'],
      reset: 'Empezar de nuevo',
      introT: 'El Tarot de UX',
      introP: n => `${n} cartas sobre cómo hacer buenos productos. Elige una situación, saca tres cartas y llévate algo que probar esta semana.`,
      begin: 'Empezar la lectura',
      askT: '¿En qué estás trabajando?',
      sits: [['Empezando algo', 'Una hoja en blanco y una corazonada'], ['Algo atascado', 'Hay movimiento, pero no se avanza'], ['Sin sintonía', 'El equipo tira en direcciones distintas'], ['Lanzamiento cerca', 'Casi listo y con algo de nervios']],
      leads: ['Para el comienzo de algo nuevo:', 'Para algo atascado a medio camino:', 'Para un equipo que no conecta:', 'Para un lanzamiento cercano:'],
      pickT: 'Elige tres cartas',
      pick: n => (n >= 3 ? 'Preparando tu lectura' : n === 2 ? 'Elige una más' : n === 1 ? 'Elige dos más' : 'Toca una carta para elegirla'),
      slots: ['Dónde estás', 'Qué vigilar', 'Tu próximo paso'],
      hint: 'Da la vuelta a cada carta', turnAll: 'Descubrir todas',
      up: 'Consejo', rev: 'Ojo', tryL: 'Prueba esta semana',
      suits: { wild: 'Comodín', sun: 'Entender', mtn: 'Orientar', sq: 'Hacer', dia: 'Revisar', hex: 'Equipo' },
      readT: 'Tu lectura', copy: 'Copiar lectura', copied: 'Copiada', again: 'Sacar de nuevo',
      sum: (lead, a, b, c) => `Empieza con ${a}. Ojo con ${b}. Después, prueba ${c}.`,
      cardN: (i, n) => `Carta ${i} de ${n}, boca abajo`, turnN: i => `Dar la vuelta a la carta ${i}`, chosen: (i, k) => `Carta ${i}, elegida como número ${k}`
    }
  };
  const L = T[LANG];

  /* ---------- geometric art (160 × 190 panel) ---------- */
  const f = k => `class="f${k}"`;
  const bgRect = a => `<rect width="160" height="190" ${f(a)}/>`;
  const ART = {
    sun([a, b, c, d, v]) {
      const cy = 82 + ((v % 3) - 1) * 8, r = 30 + (v % 4) * 4;
      return bgRect(a) + `<circle cx="80" cy="${cy}" r="${r}" ${f(b)}/><g class="nf s${c}" stroke-width="1.4"><circle cx="80" cy="${cy}" r="${r + 14}"/><circle cx="80" cy="${cy}" r="${r + 28}"/></g><rect y="152" width="160" height="38" ${f(d)}/><circle cx="${40 + v * 14}" cy="171" r="6" ${f(a)}/>`;
    },
    peaks([a, b, c, d, v]) {
      const sx = 112 - (v % 3) * 30;
      return bgRect(a) + `<circle cx="${sx}" cy="48" r="19" ${f(b)}/><polygon points="0,190 ${70 + v * 6},58 160,190" ${f(c)}/><polygon points="40,190 ${118 - v * 10},96 190,190" ${f(d)} opacity=".9"/>`;
    },
    stack([a, b, c, d, v]) {
      const w = [120, 88, 138, 70], col = [b, c, d, b];
      let s = bgRect(a);
      for (let i = 0; i < 4; i++) {
        const ww = w[(i + v) % 4], x = (160 - ww) / 2 + (((i + v) % 2) ? 12 : -12);
        s += `<rect x="${x}" y="${26 + i * 36}" width="${ww}" height="28" ${f(col[i])}/>`;
      }
      return s;
    },
    dots([a, b, c, d, v]) {
      let s = bgRect(a);
      for (let y = 0; y < 6; y++) for (let x = 0; x < 5; x++) {
        const i = y * 5 + x, hi = (i * 7 + v * 3) % 5 === 0;
        s += `<circle cx="${22 + x * 29}" cy="${22 + y * 29}" r="${hi ? 9 : 5.5}" ${f(hi ? b : c)}${hi ? '' : ' opacity=".55"'}/>`;
      }
      return s;
    },
    arcs([a, b, c, d, v]) {
      const col = [b, c, d, b], rad = [74, 54, 36, 18];
      let s = bgRect(a) + `<g${v % 2 ? ' transform="rotate(180 80 95)"' : ''}>`;
      rad.forEach((r, i) => { s += `<path d="M${80 - r} 150 A${r} ${r} 0 0 1 ${80 + r} 150Z" ${f(col[i])}/>`; });
      return s + `<rect x="10" y="150" width="140" height="2" ${f(c)} opacity=".6"/></g>`;
    },
    bars([a, b, c, d, v]) {
      const h = [[40, 70, 100, 130, 90], [120, 90, 56, 84, 44]][v % 2];
      let s = bgRect(a);
      const top = Math.max(...h);
      h.forEach((hh, i) => { s += `<rect x="${17 + i * 28}" y="${160 - hh}" width="20" height="${hh}" ${f(hh === top ? c : b)}/>`; });
      return s + `<rect x="10" y="160" width="140" height="2" ${f(b)} opacity=".6"/><circle cx="${27 + h.indexOf(top) * 28}" cy="${160 - top - 20}" r="8" ${f(d)}/>`;
    },
    venn([a, b, c, d, v]) {
      const sq = v % 2;
      const sh = (x, y, k) => (sq ? `<rect x="${x - 34}" y="${y - 34}" width="68" height="68" ${f(k)} class="f${k} mx" transform="rotate(${v * 9} ${x} ${y})"/>` : `<circle cx="${x}" cy="${y}" r="38" class="f${k} mx"/>`);
      return bgRect(a) + `<g style="isolation:isolate">${sh(62, 78, b)}${sh(98, 78, c)}${sh(80, 114, d)}</g>`;
    },
    stairs([a, b, c, d, v]) {
      let s = bgRect(a);
      for (let i = 0; i < 5; i++) s += `<rect x="${12 + i * 28}" y="${164 - i * 24}" width="26" height="${26 + i * 24}" ${f(i % 2 ? c : b)}/>`;
      return s + `<circle cx="${v % 2 ? 30 : 132}" cy="36" r="13" ${f(d)}/>`;
    },
    split([a, b, c, d, v]) {
      const h = v % 2;
      return bgRect(a) + (h ? `<rect width="160" height="95" ${f(b)}/><rect y="95" width="160" height="95" ${f(c)}/>` : `<rect width="80" height="190" ${f(b)}/><rect x="80" width="80" height="190" ${f(c)}/>`) + `<circle cx="80" cy="95" r="34" ${f(d)}/><circle cx="80" cy="95" r="14" ${f(a)}/>`;
    },
    orbit([a, b, c, d, v]) {
      let s = bgRect(a) + `<g class="nf s${c}" stroke-width="1.4"><circle cx="80" cy="95" r="40"/><circle cx="80" cy="95" r="68"/></g><circle cx="80" cy="95" r="20" ${f(b)}/>`;
      [[40, 28 + v * 40], [68, 150 + v * 30], [40, 250]].forEach(([r, ang], i) => {
        const t = ang * Math.PI / 180;
        s += `<circle cx="${(80 + r * Math.cos(t)).toFixed(1)}" cy="${(95 + r * Math.sin(t)).toFixed(1)}" r="${i === 1 ? 9 : 6}" ${f(i === 1 ? d : c)}/>`;
      });
      return s;
    },
    diamonds([a, b, c, d]) {
      const col = [b, c, d, b];
      let s = bgRect(a);
      [78, 58, 38, 18].forEach((r, i) => { s += `<polygon points="80,${95 - r} ${80 + r * .78},95 80,${95 + r} ${80 - r * .78},95" ${f(col[i])}/>`; });
      return s;
    },
    fan([a, b, c, d, v]) {
      let s = bgRect(a);
      for (let i = 0; i < 6; i++) {
        const a0 = (-75 + i * 25) * Math.PI / 180, a1 = (-75 + (i + 1) * 25) * Math.PI / 180, Ld = 190;
        s += `<polygon points="80,190 ${(80 + Ld * Math.sin(a0)).toFixed(1)},${(190 - Ld * Math.cos(a0)).toFixed(1)} ${(80 + Ld * Math.sin(a1)).toFixed(1)},${(190 - Ld * Math.cos(a1)).toFixed(1)}" ${f(i % 2 ? c : b)}/>`;
      }
      return s + `<circle cx="80" cy="${60 + v * 8}" r="16" ${f(d)}/>`;
    },
    waves([a, b, c, d, v]) {
      let s = bgRect(a) + '<g class="nf" stroke-width="9">';
      for (let r = 0; r < 5; r++) for (let k = 0; k < 4; k++) {
        const x = -20 + k * 40 + (r % 2) * 20 + (v ? 0 : 0);
        s += `<path d="M${x} ${46 + r * 28} a20 20 0 0 1 40 0" class="s${(r + k) % 5 === 2 ? d : r % 2 ? c : b}"/>`;
      }
      return s + '</g>';
    },
    corner([a, b, c, d, v]) {
      const flip = v % 2;
      return bgRect(a) + `<g${flip ? ' transform="translate(160 0) scale(-1 1)"' : ''}><path d="M0 0H92A92 92 0 0 1 0 92Z" ${f(b)}/><path d="M160 190H68A92 92 0 0 1 160 98Z" ${f(c)}/><rect x="96" y="22" width="40" height="40" ${f(d)}/><circle cx="40" cy="146" r="20" ${f(d)}/></g>`;
    },
    columns([a, b, c, d, v]) {
      const hs = [[96, 130, 70, 112], [120, 80, 140, 100], [76, 112, 96, 136]][v % 3];
      let s = bgRect(a);
      hs.forEach((h, i) => { s += `<rect x="${18 + i * 34}" y="${172 - h}" width="26" height="${h}" ${f(i % 2 ? c : b)}/><circle cx="${31 + i * 34}" cy="${172 - h - 11}" r="11" ${f(i === 2 ? d : i % 2 ? b : c)}/>`; });
      return s + `<rect x="10" y="172" width="140" height="3" ${f(c)} opacity=".7"/>`;
    },
    quilt([a, b, c, d, v]) {
      let s = bgRect(a);
      for (let y = 0; y < 4; y++) for (let x = 0; x < 3; x++) {
        const px = 20 + x * 40, py = 15 + y * 40, t = (x * 2 + y + v) % 4;
        if (t === 0) s += `<circle cx="${px + 20}" cy="${py + 20}" r="17" ${f(b)}/>`;
        else if (t === 1) s += `<path d="M${px + 3} ${py + 37}H${px + 37}V${py + 3}A34 34 0 0 0 ${px + 3} ${py + 37}Z" ${f(c)}/>`;
        else if (t === 2) s += `<rect x="${px + 4}" y="${py + 4}" width="32" height="32" ${f(d)}/>`;
        else s += `<polygon points="${px + 20},${py + 3} ${px + 37},${py + 37} ${px + 3},${py + 37}" ${f(b)} opacity=".55"/>`;
      }
      return s;
    }
  };
  const artOf = c => (typeof c.art === 'string' ? c.art : (ART[c.art[0]] || ART.sun)(c.art[1]));

  /* ---------- card faces ---------- */
  const S = {
    lang: LANG, step: 0, sit: null, fan: [], picks: [], read: [], fanIn: false
  };
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const txt = id => CARDS[id][LANG];
  const num = id => String(id).padStart(2, '0');

  function glyph(k, x, y) {
    const p = `transform="translate(${x} ${y})"`;
    if (k === 'sun') return `<circle ${p} r="5" class="fK"/>`;
    if (k === 'mtn') return `<polygon ${p} points="0,-6 6.5,5 -6.5,5" class="fK"/>`;
    if (k === 'sq') return `<rect ${p} x="-5" y="-5" width="10" height="10" class="fK"/>`;
    if (k === 'dia') return `<polygon ${p} points="0,-7 6,0 0,7 -6,0" class="fK"/>`;
    if (k === 'hex') return `<polygon ${p} points="0,-7 6,-3.5 6,3.5 0,7 -6,3.5 -6,-3.5" class="fK"/>`;
    return `<g ${p}><circle r="5" class="nf sK" stroke-width="1"/><circle r="1.6" class="fK"/></g>`;
  }
  function nameLines(name) {
    const n = name.toUpperCase();
    if (n.length <= 13) return [n];
    const mid = n.length / 2; let best = -1;
    for (let i = 0; i < n.length; i++) if (n[i] === ' ' && (best < 0 || Math.abs(i - mid) < Math.abs(best - mid))) best = i;
    return best < 0 ? [n] : [n.slice(0, best), n.slice(best + 1)];
  }
  function faceSVG(id) {
    const c = CARDS[id], name = c[LANG][0], suit = c.s;
    const lines = nameLines(name);
    const longest = Math.max(...lines.map(l => l.length));
    const fs = Math.min(lines.length > 1 ? 12.5 : 14, 168 / (longest * 0.86));
    const ty = lines.length > 1 ? 262 : 270;
    return `<svg viewBox="0 0 200 310" aria-hidden="true">
<rect width="200" height="310" class="fC"/>
<rect x="7" y="7" width="186" height="296" class="nf" stroke="var(--card-line)" stroke-width="1"/>
${glyph(suit, 26, 28)}${glyph(suit, 174, 28)}
<text x="100" y="33" font-size="13" class="cn">${num(id)}</text>
<svg x="20" y="46" width="160" height="190" viewBox="0 0 160 190">${artOf(c)}</svg>
${lines.map((l, i) => `<text x="100" y="${ty + i * 15}" font-size="${fs.toFixed(1)}" class="cs">${esc(l)}</text>`).join('')}
<text x="100" y="294" font-size="7" class="cl">${esc(L.suits[suit].toUpperCase())}</text>
</svg>`;
  }
  function backSVG() {
    return `<svg viewBox="0 0 200 310" aria-hidden="true">
<rect width="200" height="310" class="fN"/>
<rect x="9" y="9" width="182" height="292" class="nf sC" stroke-width=".9" opacity=".5"/>
<rect x="20" y="20" width="160" height="270" class="nf sC" stroke-width=".6" opacity=".28"/>
<circle cx="100" cy="155" r="66" class="nf sC" stroke-width=".7" opacity=".32"/>
<polygon points="100,56 130,132 70,132" class="fL"/>
<polygon points="100,254 70,178 130,178" class="fL"/>
<circle cx="100" cy="155" r="25" class="fT"/>
<circle cx="34" cy="34" r="3" class="fC" opacity=".7"/><circle cx="166" cy="276" r="3" class="fC" opacity=".7"/>
</svg>`;
  }
  const optGlyph = ['<circle cx="15" cy="15" r="9"/>', '<polygon points="15,5 26,25 4,25"/>', '<polygon points="15,3 27,15 15,27 3,15"/>', '<rect x="6" y="6" width="18" height="18"/>'];

  /* ---------- screens ---------- */
  function render() {
    $('tarotStep').textContent = L.step[S.step];
    $('tarotReset').textContent = L.reset;
    $('tarotReset').hidden = S.step === 0;
    const b = $('tarotBody');
    if (S.step === 0) renderIntro(b); else if (S.step === 1) renderAsk(b); else if (S.step === 2) renderPick(b); else renderRead(b);
  }
  const focusTitle = () => { const h = $('tarotTitle'); if (h) h.focus({ preventScroll: true }); };

  function renderIntro(b) {
    b.innerHTML = `<div class="tarot-deck" aria-hidden="true">${[0, 1, 2].map(() => `<span class="tcard"><span class="tcard-inner"><span class="tface">${backSVG()}</span></span></span>`).join('')}</div>
<h2 id="tarotTitle" tabindex="-1">${esc(L.introT)}</h2>
<p class="tarot-txt">${esc(L.introP(CARDS.length))}</p>
<button type="button" class="tarot-btn primary" id="tarotBegin">${esc(L.begin)}</button>`;
    $('tarotBegin').onclick = () => { S.step = 1; render(); focusTitle(); };
  }
  function renderAsk(b) {
    b.innerHTML = `<h2 id="tarotTitle" tabindex="-1">${esc(L.askT)}</h2>
<div class="tarot-opts">${L.sits.map((s, i) => `<button type="button" class="tarot-opt" data-i="${i}"><svg viewBox="0 0 30 30" aria-hidden="true">${optGlyph[i]}</svg><span><strong>${esc(s[0])}</strong><span class="d">${esc(s[1])}</span></span></button>`).join('')}</div>`;
    b.querySelectorAll('.tarot-opt').forEach(o => { o.onclick = () => chooseSit(+o.dataset.i); });
  }
  function chooseSit(i) {
    S.sit = i; S.fan = shuffle(CARDS.map((_, k) => k)).slice(0, 12); S.picks = []; S.fanIn = false; S.step = 2; render(); focusTitle();
  }
  function renderPick(b) {
    b.innerHTML = `<h2 id="tarotTitle" tabindex="-1">${esc(L.pickT)}</h2>
<p class="tarot-count" id="tarotCount">${esc(L.pick(S.picks.length))}</p>
<div class="tarot-fan${S.fanIn ? ' in' : ''}" id="tarotFan">${S.fan.map((id, i) => {
      const k = S.picks.indexOf(i);
      return `<button type="button" class="pcard${k >= 0 ? ' sel' : ''}" data-i="${i}" style="--i:${i}" aria-label="${esc(k >= 0 ? L.chosen(i + 1, k + 1) : L.cardN(i + 1, S.fan.length))}"><span class="tface">${backSVG()}</span><span class="badge">${k >= 0 ? k + 1 : ''}</span></button>`;
    }).join('')}</div>`;
    layoutFan();
    const fan = $('tarotFan');
    fan.querySelectorAll('.pcard').forEach(p => { p.onclick = () => pickCard(+p.dataset.i); });
    if (!S.fanIn) requestAnimationFrame(() => requestAnimationFrame(() => { S.fanIn = true; fan.classList.add('in'); }));
  }
  const isMobile = () => matchMedia('(max-width:820px)').matches;
  function layoutFan() {
    const fan = $('tarotFan'); if (!fan || isMobile()) return;
    const els = [...fan.children], n = els.length, W = fan.clientWidth, cw = els[0].offsetWidth || 100;
    const dx = Math.min(cw * .66, (W - cw * 1.6) / (n - 1));
    els.forEach((e, i) => {
      const k = i - (n - 1) / 2;
      e.style.setProperty('--tx', (k * dx).toFixed(1) + 'px');
      e.style.setProperty('--ty', (k * k * 1.5).toFixed(1) + 'px');
      e.style.setProperty('--rot', (k * 3).toFixed(2) + 'deg');
    });
  }
  function pickCard(i) {
    if (S.picks.length >= 3 || S.picks.includes(i)) return;
    S.picks.push(i);
    const el = document.querySelector(`.pcard[data-i="${i}"]`);
    el.classList.add('sel'); el.querySelector('.badge').textContent = S.picks.length;
    el.setAttribute('aria-label', L.chosen(i + 1, S.picks.length));
    $('tarotCount').textContent = L.pick(S.picks.length);
    if (S.picks.length === 3) {
      setTimeout(() => {
        if (S.step !== 2) return;
        S.read = S.picks.map(k => ({ id: S.fan[k], rev: Math.random() < .35, flipped: false }));
        S.step = 3; render(); focusTitle();
      }, 900);
    }
  }
  function renderRead(b) {
    b.innerHTML = `<div class="tarot-read">
<div class="read-top"><h2 id="tarotTitle" tabindex="-1">${esc(L.readT)}</h2><button type="button" class="tarot-link" id="tarotTurnAll">${esc(L.turnAll)}</button></div>
<p class="tarot-txt left" id="tarotHint">${esc(L.hint)}</p>
<div class="tarot-slots">${S.read.map((r, i) => slotHTML(r, i)).join('')}</div>
<div class="tarot-summary" id="tarotSummary"></div></div>`;
    b.querySelectorAll('.tcard').forEach(c => {
      c.onclick = () => flip(+c.dataset.i);
      c.addEventListener('pointermove', tilt); c.addEventListener('pointerleave', untilt);
    });
    $('tarotTurnAll').onclick = () => S.read.forEach((_, i) => setTimeout(() => flip(i), i * 260));
    fillSummary();
    if (S.read.every(r => r.flipped)) $('tarotSummary').classList.add('on');
  }
  function slotHTML(r, i) {
    const c = txt(r.id);
    const label = r.flipped ? `${c[0]}, ${r.rev ? L.rev : L.up}` : L.turnN(i + 1);
    return `<article class="tslot${r.flipped ? ' on' : ''}" id="tslot${i}">
<p class="slot-label">${esc(L.slots[i])}</p>
<button type="button" class="tcard${r.rev ? ' rev' : ''}" data-i="${i}" data-state="${r.flipped ? 'up' : 'down'}" aria-label="${esc(label)}"><span class="tcard-inner"><span class="tface back">${backSVG()}</span><span class="tface front">${faceSVG(r.id)}</span></span></button>
<div class="slot-text"><h3>${esc(c[0])}</h3><span class="tag">${esc(r.rev ? L.rev : L.up)}</span>
<p class="meaning">${esc(r.rev ? c[2] : c[1])}</p>
<p class="try"><b>${esc(L.tryL)}</b>${esc(c[3])}</p></div></article>`;
  }
  function flip(i) {
    const r = S.read[i]; if (!r || r.flipped) return;
    r.flipped = true;
    const slot = $('tslot' + i), card = slot.querySelector('.tcard'), c = txt(r.id);
    card.dataset.state = 'up';
    card.setAttribute('aria-label', `${c[0]}, ${r.rev ? L.rev : L.up}`);
    slot.classList.add('on');
    $('tarotLive').textContent = `${c[0]}, ${r.rev ? L.rev : L.up}. ${r.rev ? c[2] : c[1]}`;
    if (S.read.every(x => x.flipped)) setTimeout(() => $('tarotSummary').classList.add('on'), 500);
  }
  function tilt(e) {
    const c = e.currentTarget; if (c.dataset.state !== 'up' || e.pointerType === 'touch') return;
    const b = c.getBoundingClientRect(), px = (e.clientX - b.left) / b.width - .5, py = (e.clientY - b.top) / b.height - .5;
    c.classList.add('tilting'); c.style.setProperty('--rx', (-py * 10).toFixed(2) + 'deg'); c.style.setProperty('--ry', (px * 12).toFixed(2) + 'deg');
  }
  function untilt(e) { const c = e.currentTarget; c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); setTimeout(() => c.classList.remove('tilting'), 160); }
  function summaryText() {
    const n = S.read.map(r => txt(r.id)[0]);
    return L.sum(L.leads[S.sit], n[0], n[1], n[2]);
  }
  function fillSummary() {
    $('tarotSummary').innerHTML = `<p class="lead">${esc(summaryText())}</p><div class="tarot-actions"><button type="button" class="tarot-btn" id="tarotCopy">${esc(L.copy)}</button><button type="button" class="tarot-btn primary" id="tarotAgain">${esc(L.again)}</button></div>`;
    $('tarotCopy').onclick = copyReading;
    $('tarotAgain').onclick = () => { S.step = 1; S.sit = null; render(); focusTitle(); mount.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  }
  function readingPlain() {
    const lines = [`UX Tarot · ${L.sits[S.sit][0]}`, ''];
    S.read.forEach((r, i) => {
      const c = txt(r.id);
      lines.push(`${i + 1}. ${L.slots[i]}: ${c[0]} (${r.rev ? L.rev : L.up})`, r.rev ? c[2] : c[1], `${L.tryL}: ${c[3]}`, '');
    });
    lines.push(summaryText());
    return lines.join('\n');
  }
  function copyReading() {
    const text = readingPlain(), btn = $('tarotCopy');
    const done = () => { btn.textContent = L.copied; setTimeout(() => { if ($('tarotCopy')) $('tarotCopy').textContent = L.copy; }, 1800); };
    const fallback = () => {
      const ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) { } ta.remove(); done();
    };
    try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
  }

  mount.innerHTML = `<div class="tarot-head"><span class="tarot-step" id="tarotStep"></span><button type="button" class="tarot-link" id="tarotReset" hidden></button></div><div class="tarot-body" id="tarotBody"></div><div class="tarot-sr" id="tarotLive" aria-live="polite"></div>`;
  $('tarotReset').onclick = () => { S.step = 0; S.sit = null; S.picks = []; render(); };
  addEventListener('resize', layoutFan);
  render();
})();
