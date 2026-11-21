/* Vision slide: ten screens that play through the journey.
   Focus moves one screen at a time, long screens scroll, a tap shows the next step,
   and the last screen ends in a confetti burst. Click a screen to jump to it,
   click the one in focus to pause or play. */
(() => {
  const root = document.querySelector('[data-vr]');
  if (!root) return;
  const sec = root.closest('.slide');
  const phs = [...root.querySelectorAll('.vr-ph')];
  const glow = root.querySelector('.vr-glow');
  const cv = sec.querySelector('.vr-fx');
  const cx = cv.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SCREEN = 874 / 402;            // screen height / width
  const COLS = ['#ff5b3a', '#2fb2c3', '#d4f23c', '#f6a6d2', '#ffd447', '#ffffff', '#1fc9a0'];
  let cur = 0, timers = [], running = false, paused = false, parts = [], raf = 0, last = 0;

  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  const clear = () => { timers.forEach(clearTimeout); timers = []; };
  const img = p => p.querySelector('img');

  function layout() {
    phs.forEach((p, i) => {
      const d = Math.abs(i - cur);
      p.classList.toggle('on', d === 0);
      p.classList.toggle('near', d === 1);
      p.setAttribute('aria-pressed', d === 0 ? 'true' : 'false');
    });
    // the glow follows the screen in focus once the row has settled
    requestAnimationFrame(() => moveGlow());
    later(moveGlow, 380); later(moveGlow, 780);
  }
  function moveGlow() {
    const r = root.getBoundingClientRect(), p = phs[cur].getBoundingClientRect();
    if (!r.width) return;
    glow.style.setProperty('--gx', ((p.left + p.width / 2 - r.left) / r.width * 100) + '%');
  }
  function scrollShare(p) {           // how much of the image sits below the screen, as a share of its height
    const im = img(p);
    if (!im.naturalWidth) return 0;
    return Math.max(0, 1 - SCREEN * im.naturalWidth / im.naturalHeight);
  }
  function resetScroll(p) {
    const im = img(p);
    im.style.transition = 'none';
    im.style.transform = 'translateY(0)';
  }
  function bar(p, ms) {
    const b = p.querySelector('.vr-bar i');
    b.style.transition = 'none'; b.style.width = '0';
    void b.offsetWidth;
    if (ms > 0) { b.style.transition = `width ${ms}ms linear`; b.style.width = '100%'; }
  }
  function freezeBar(p) {
    const b = p.querySelector('.vr-bar i');
    b.style.width = getComputedStyle(b).width; b.style.transition = 'none';
  }
  function tap(p) {
    const t = p.dataset.tap;
    if (!t) return 0;
    const [x, y] = t.split(',').map(Number);
    const dot = document.createElement('i');
    dot.className = 'vr-tap';
    dot.style.left = (x * 100) + '%'; dot.style.top = (y * 100) + '%';
    p.querySelector('.bz-screen').append(dot);
    later(() => dot.remove(), 1000);
    return 620;
  }

  function play() {
    clear();
    const p = phs[cur];
    phs.forEach((q, i) => { if (i !== cur) { resetScroll(q); bar(q, 0); } });
    layout();
    if (reduce) return;
    if (cur === phs.length - 1) {     // the finale
      bar(p, 900);
      later(() => { p.classList.remove('pop'); void p.offsetWidth; p.classList.add('pop'); burst(p); }, 560);
      later(() => p.classList.remove('pop'), 1400);
      return;
    }
    const im = img(p);
    if (!im.complete || !im.naturalWidth) {   // wait for the image, then play this screen
      im.addEventListener('load', () => { if (running && phs[cur] === p) play(); }, { once: true });
      return;
    }
    const share = scrollShare(p);
    let t = 820;
    if (share > 0) {
      const dur = Math.round(1500 + share * 3400);
      later(() => { im.style.transition = `transform ${dur}ms cubic-bezier(.45,0,.2,1)`; im.style.transform = `translateY(${-share * 100}%)`; }, t);
      t += dur + 650;
    } else t += 1900;
    const tapAt = t, end = t + (p.dataset.tap ? 620 : 150);
    bar(p, end);
    later(() => tap(p), tapAt);
    later(() => { if (running && !paused) { cur++; play(); } }, end);
  }

  function start() {
    running = true; paused = false; cur = 0;
    phs.forEach(q => { resetScroll(q); bar(q, 0); q.classList.remove('pop'); });
    layout();
    clear();
    if (!reduce) later(play, 900);
  }
  function stop() {
    running = false; clear();
    parts = []; cancelAnimationFrame(raf); raf = 0;
    cx.clearRect(0, 0, cv.width, cv.height);
  }

  phs.forEach((p, i) => p.addEventListener('click', e => {
    e.stopPropagation();
    if (i === cur && cur !== phs.length - 1) {        // pause or play the screen in focus
      paused = !paused;
      if (paused) { clear(); freezeBar(p); } else play();
      return;
    }
    paused = false; cur = i; play();
  }));

  // ---------- confetti ----------
  function size() {
    const r = cv.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1);
    const w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
    if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
    return r;
  }
  function spawn(x, y, n, pow, spread) {
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (Math.random() - .5) * spread;
      const sp = (7 + Math.random() * 17) * pow;
      const kind = Math.random();
      parts.push({
        x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        g: .3 + Math.random() * .14, rot: Math.random() * 6.28, vr: (Math.random() - .5) * .32,
        ph: Math.random() * 6.28, vp: .08 + Math.random() * .2,
        w: 7 + Math.random() * 9, h: 3.5 + Math.random() * 4.5,
        shape: kind < .5 ? 'strip' : kind < .72 ? 'arc' : kind < .9 ? 'dot' : 'star',
        col: COLS[(Math.random() * COLS.length) | 0], life: 0, max: 110 + Math.random() * 90
      });
    }
  }
  function burst(p) {
    if (reduce) return;
    const c = size(), s = p.querySelector('.bz-screen').getBoundingClientRect();
    const k = 1600 / c.width;
    const ox = (s.left - c.left + s.width * .5) * k, oy = (s.top - c.top + s.height * .45) * k;
    spawn(ox, oy, 170, 1, Math.PI * 1.9);
    later(() => spawn(ox - 70, oy + 30, 70, .85, Math.PI * 1.2), 170);
    later(() => spawn(ox + 70, oy + 20, 70, .85, Math.PI * 1.2), 300);
    later(() => spawn(ox, oy - 40, 60, .7, Math.PI * .9), 520);
    last = performance.now();
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function star(r) {
    cx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = i * Math.PI / 5 - Math.PI / 2, rr = i % 2 ? r * .45 : r;
      cx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
    }
    cx.closePath(); cx.fill();
  }
  function tick(now) {
    const dt = Math.min(3, (now - last) / 16.67); last = now;
    const c = size(), sc = cv.width / 1600;
    cx.setTransform(1, 0, 0, 1, 0, 0);
    cx.clearRect(0, 0, cv.width, cv.height);
    cx.setTransform(sc, 0, 0, sc, 0, 0);
    parts = parts.filter(q => q.life < q.max && q.y < 960);
    for (const q of parts) {
      q.life += dt;
      q.vx *= Math.pow(.982, dt); q.vy = q.vy * Math.pow(.982, dt) + q.g * dt;
      q.x += q.vx * dt; q.y += q.vy * dt;
      q.rot += q.vr * dt; q.ph += q.vp * dt;
      const fade = Math.min(1, (q.max - q.life) / 30);
      cx.save();
      cx.globalAlpha = Math.max(0, fade);
      cx.translate(q.x, q.y); cx.rotate(q.rot); cx.scale(1, Math.cos(q.ph));
      cx.fillStyle = q.col; cx.strokeStyle = q.col;
      if (q.shape === 'strip') cx.fillRect(-q.w / 2, -q.h / 2, q.w, q.h);
      else if (q.shape === 'dot') { cx.beginPath(); cx.arc(0, 0, q.h * .8, 0, 6.283); cx.fill(); }
      else if (q.shape === 'arc') { cx.lineWidth = q.h * .9; cx.lineCap = 'round'; cx.beginPath(); cx.arc(0, 0, q.w, .2, 1.9); cx.stroke(); }
      else star(q.w * .7);
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
