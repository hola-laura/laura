/* Vision slide: ten screens that play through the journey.
   Each screen is built in layers: fixed bars, content that scrolls, card rows that swipe
   and illustrations that move. Focus moves one screen at a time, a tap marks the next step,
   and the last screen ends with a small confetti burst.
   The Pause button stops it; clicking a screen jumps to it. */
(() => {
  const root = document.querySelector('[data-vr]');
  if (!root) return;
  const sec = root.closest('.slide');
  const phs = [...root.querySelectorAll('.vr-ph')];
  const glow = root.querySelector('.vr-glow');
  const cv = sec.querySelector('.vr-fx');
  const cx = cv.getContext('2d');
  const btn = sec.querySelector('.vr-pp');
  const btnText = btn && btn.querySelector('.vr-pp-t');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const COLS = ['#ff5b3a', '#2fb2c3', '#d4f23c', '#f6a6d2', '#ffd447', '#ffffff'];
  const EASE = 'cubic-bezier(.45,0,.2,1)';
  let cur = 0, timers = [], running = false, paused = false, done = false, parts = [], raf = 0, last = 0;

  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  const clear = () => { timers.forEach(clearTimeout); timers = []; };
  const sc = p => p.querySelector('.vr-sc');
  const rows = p => [...p.querySelectorAll('.vr-ri')].filter(r => +r.dataset.dx > 0);

  function setBtn() {
    if (!btn) return;
    btn.setAttribute('aria-pressed', paused || done ? 'true' : 'false');
    btnText.textContent = done && !paused ? 'Play again' : paused ? 'Play' : 'Pause';
    root.classList.toggle('vr-paused', paused);
  }
  function layout() {
    phs.forEach((p, i) => {
      const d = Math.abs(i - cur);
      p.classList.toggle('on', d === 0);
      p.classList.toggle('near', d === 1);
      p.setAttribute('aria-pressed', d === 0 ? 'true' : 'false');
    });
    requestAnimationFrame(moveGlow);
    later(moveGlow, 380); later(moveGlow, 780);
  }
  function moveGlow() {
    const r = root.getBoundingClientRect(), p = phs[cur].getBoundingClientRect();
    if (!r.width) return;
    glow.style.setProperty('--gx', ((p.left + p.width / 2 - r.left) / r.width * 100) + '%');
  }
  function move(el, tf, ms) {
    el.style.transition = ms ? `transform ${ms}ms ${EASE}` : 'none';
    el.style.transform = tf;
  }
  function bar(p, ms) {
    const b = p.querySelector('.vr-bar i');
    b.style.transition = 'none'; b.style.width = '0';
    void b.offsetWidth;
    if (ms > 0) { b.style.transition = `width ${ms}ms linear`; b.style.width = '100%'; }
  }
  function reset(p) {
    move(sc(p), 'translateY(0)', 0);
    p.querySelectorAll('.vr-ri').forEach(r => move(r, 'translateX(0)', 0));
    bar(p, 0);
  }
  function freeze(p) {
    [sc(p), ...p.querySelectorAll('.vr-ri')].forEach(el => {
      el.style.transform = getComputedStyle(el).transform; el.style.transition = 'none';
    });
    const b = p.querySelector('.vr-bar i');
    b.style.width = getComputedStyle(b).width; b.style.transition = 'none';
  }
  function tap(p) {
    const t = p.dataset.tap;
    if (!t) return;
    const [x, y] = t.split(',').map(Number);
    const dot = document.createElement('i');
    dot.className = 'vr-tap';
    dot.style.left = (x * 100) + '%'; dot.style.top = (y * 100) + '%';
    p.querySelector('.bz-screen').append(dot);
    later(() => dot.remove(), 1000);
  }

  function play() {
    clear(); done = false; setBtn();
    const p = phs[cur];
    phs.forEach(reset);
    layout();
    if (reduce) return;
    if (cur === phs.length - 1) {     // the finale
      later(() => { p.classList.remove('pop'); void p.offsetWidth; p.classList.add('pop'); burst(p); }, 600);
      later(() => { p.classList.remove('pop'); done = true; setBtn(); }, 1500);
      return;
    }
    const base = p.querySelector('.vr-base');
    if (!base.complete || !base.naturalWidth) {   // wait for the screen, then play it
      base.addEventListener('load', () => { if (running && phs[cur] === p && !paused) play(); }, { once: true });
      return;
    }
    let t = 820, S = 0;
    const rs = rows(p), D = +sc(p).dataset.d || 0;
    const hOf = sel => { const el = p.querySelector(sel); return el ? parseFloat(el.style.height) || 0 : 0; };
    if (rs.length) {
      // bring the card row into view between the fixed bars, then swipe it to its end and back
      const box = rs[0].parentElement, top = hOf('.vr-ft'), bottom = 1305 - hOf('.vr-fb');
      S = Math.round(Math.max(0, Math.min(D, parseFloat(box.style.top) + parseFloat(box.style.height) / 2 - (top + bottom) / 2)));
      if (S > 20) {
        const d1 = Math.round(900 + S * 1.2);
        later(() => move(sc(p), `translateY(${-S}px)`, d1), t);
        t += d1 + 250;
      }
      later(() => rs.forEach(r => move(r, `translateX(${-r.dataset.dx}px)`, 1900)), t);
      t += 1900 + 800;
      later(() => rs.forEach(r => move(r, 'translateX(0)', 1100)), t);
      t += 1100 + 250;
    }
    if (D - S > 20) {                  // scroll the rest of the content under the fixed bars
      const dur = Math.round(1300 + (D - S) * 1.9);
      later(() => move(sc(p), `translateY(${-D}px)`, dur), t);
      t += dur + 650;
    } else t += rs.length ? 500 : 1900;
    const end = t + (p.dataset.tap ? 620 : 150);
    bar(p, end);
    later(() => tap(p), t);
    later(() => { if (running && !paused) { cur++; play(); } }, end);
  }

  function start() {
    running = true; paused = false; done = false; cur = 0;
    phs.forEach(q => { reset(q); q.classList.remove('pop'); });
    clear(); layout(); setBtn();
    if (!reduce) later(play, 900);
  }
  function stop() {
    running = false; clear();
    parts = []; cancelAnimationFrame(raf); raf = 0;
    cx.clearRect(0, 0, cv.width, cv.height);
  }

  phs.forEach((p, i) => p.addEventListener('click', e => {
    e.stopPropagation();
    paused = false; cur = i; play();
  }));
  if (btn) btn.addEventListener('click', e => {
    e.stopPropagation();
    if (done && !paused) { cur = 0; play(); return; }
    paused = !paused;
    if (paused) { clear(); freeze(phs[cur]); setBtn(); }
    else play();
  });

  // ---------- confetti: one small burst ----------
  function size() {
    const r = cv.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1);
    const w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
    if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
    return r;
  }
  function spawn(x, y, n) {
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (Math.random() - .5) * Math.PI * 1.25;
      const sp = 4 + Math.random() * 8;
      const kind = Math.random();
      parts.push({
        x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        g: .22 + Math.random() * .1, rot: Math.random() * 6.28, vr: (Math.random() - .5) * .25,
        ph: Math.random() * 6.28, vp: .08 + Math.random() * .16,
        w: 5 + Math.random() * 6, h: 3 + Math.random() * 3,
        shape: kind < .55 ? 'strip' : kind < .8 ? 'dot' : 'arc',
        col: COLS[(Math.random() * COLS.length) | 0], life: 0, max: 80 + Math.random() * 60
      });
    }
  }
  function burst(p) {
    if (reduce) return;
    const c = size(), s = p.querySelector('.bz-screen').getBoundingClientRect();
    const k = 1600 / c.width;
    spawn((s.left - c.left + s.width * .5) * k, (s.top - c.top + s.height * .46) * k, 60);
    last = performance.now();
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function tick(now) {
    const dt = Math.min(3, (now - last) / 16.67); last = now;
    size();
    const k = cv.width / 1600;
    cx.setTransform(1, 0, 0, 1, 0, 0);
    cx.clearRect(0, 0, cv.width, cv.height);
    cx.setTransform(k, 0, 0, k, 0, 0);
    parts = parts.filter(q => q.life < q.max && q.y < 960);
    for (const q of parts) {
      q.life += dt;
      q.vx *= Math.pow(.98, dt); q.vy = q.vy * Math.pow(.98, dt) + q.g * dt;
      q.x += q.vx * dt; q.y += q.vy * dt;
      q.rot += q.vr * dt; q.ph += q.vp * dt;
      cx.save();
      cx.globalAlpha = Math.max(0, Math.min(1, (q.max - q.life) / 30));
      cx.translate(q.x, q.y); cx.rotate(q.rot); cx.scale(1, Math.cos(q.ph));
      cx.fillStyle = q.col; cx.strokeStyle = q.col;
      if (q.shape === 'strip') cx.fillRect(-q.w / 2, -q.h / 2, q.w, q.h);
      else if (q.shape === 'dot') { cx.beginPath(); cx.arc(0, 0, q.h * .75, 0, 6.283); cx.fill(); }
      else { cx.lineWidth = q.h * .8; cx.lineCap = 'round'; cx.beginPath(); cx.arc(0, 0, q.w * .8, .2, 1.9); cx.stroke(); }
      cx.restore();
    }
    if (parts.length) raf = requestAnimationFrame(tick);
    else { raf = 0; cx.setTransform(1, 0, 0, 1, 0, 0); cx.clearRect(0, 0, cv.width, cv.height); }
  }

  // ---------- start when the slide is shown, stop when it is not ----------
  const sync = () => {
    const on = sec.classList.contains('active');
    if (on && !running) start();
    else if (!on && running) stop();
  };
  new MutationObserver(sync).observe(sec, { attributes: true, attributeFilter: ['class'] });
  addEventListener('resize', () => { if (running) moveGlow(); });
  sync();
})();
