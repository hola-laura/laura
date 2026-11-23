/* journey.js — the February journey as a click-through prototype.
   Tap the button on each screen to move on; scroll long screens with the wheel, a trackpad or a finger.
   Tap anywhere else and the place to tap lights up. Arrow keys also move through it. */
(() => {
  const root = document.querySelector('[data-journey]');
  if (!root) return;
  const I = 'remortgage-presentation/assets/img/', P = 'remortgage-presentation/assets/proto/';
  const CHAPTERS = ['Free advice from Monzo', 'The form, pre-filled', 'Chat with your expert', 'Your recommendation',
    'Accept it in the app', 'Documents from your phone', 'The tracker, until the offer is accepted', 'Is this your new mortgage?'];
  /* h: screen height at 402px wide. hot: [x, y, w, h] on the full-length screen. to: next beat (default: the one after). */
  const BEATS = [
    {id: 'intro', img: I + 'feb-intro.webp?v=1', h: 1325, ch: 0, hot: [32, 1245, 338, 48], to: 'prefill', alt: [[284, 61, 102, 44, 'lenders', 'up']]},
    {id: 'lenders', img: P + 'fj-lenders.webp?v=1', h: 922, ch: 0, hot: [16, 78, 44, 44], to: 'intro', go: 'down'},
    {id: 'prefill', img: I + 'app-prefill.webp?v=1', h: 874, ch: 1, hot: [32, 794, 337, 47]},
    {id: 'chat', img: I + 'feb-chat.webp?v=1', h: 1566, ch: 2, hot: [60, 1056, 239, 48]},
    {id: 'rec', img: I + 'feb-rec.webp?v=1', h: 1059, ch: 3, hot: [35, 981, 338, 45]},
    {id: 'secure', img: P + 'fj-secure.webp?v=1', h: 880, ch: 4, hot: [210, 799, 160, 48]},
    {id: 'chosen', img: P + 'fj-chosen.webp?v=1', h: 874, ch: 4, hot: [33, 795, 336, 46], go: 'fade'},
    {id: 'docs', img: I + 'feb-docs.webp?v=2', h: 874, ch: 5, hot: [16, 350, 370, 48]},
    {id: 'photo', img: P + 'fj-photo.webp?v=1', h: 872, ch: 5, hot: [8, 706, 386, 47], go: 'fade'},
    {id: 'library', img: P + 'fj-library.webp?v=1', h: 874, ch: 5, hot: [0, 182, 133, 133], go: 'up'},
    {id: 'done', img: P + 'fj-done.webp?v=1', h: 874, ch: 5, hot: [10, 36, 48, 48], go: 'fade', jump: 'Weeks later'},
    {id: 'track', img: I + 'feb-track.webp?v=3', h: 1162, ch: 6, hot: [24, 280, 354, 300], go: 'fade', jump: 'When the deal starts'},
    {id: 'new', img: I + 'feb-new.webp?v=3', h: 1035, ch: 7, hot: [32, 892, 338, 45], end: true}
  ];
  const index = id => BEATS.findIndex(b => b.id === id);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const screen = root.querySelector('[data-journey-screen]');
  const list = root.querySelector('[data-journey-steps]');
  const jumpBtn = root.querySelector('[data-journey-jump]');
  const restartBtn = root.querySelector('[data-journey-restart]');
  const hintBtn = root.querySelector('[data-journey-hints]');
  const note = root.querySelector('[data-journey-note]');

  list.innerHTML = CHAPTERS.map((label, i) => `<li><button type="button" data-step="${i}"><span class="mg-tk-num">${String(i + 1).padStart(2, '0')}</span><span>${label}</span></button></li>`).join('');
  const buttons = [...list.querySelectorAll('button')];
  screen.innerHTML = '<div class="fl-layer"><img alt=""></div><div class="fl-layer"><img alt=""></div><i class="jr-hot" aria-hidden="true"></i><i class="fl-tap"></i>';
  const layers = [...screen.querySelectorAll('.fl-layer')];
  const hotEl = screen.querySelector('.jr-hot');
  const tapDot = screen.querySelector('.fl-tap');
  BEATS.forEach(b => { new Image().src = b.img; });

  let current = 0, front = 0, y = 0, hints = false, busy = false;
  const maxY = () => Math.max(0, BEATS[current].h - 874);
  const frontImg = () => layers[front].querySelector('img');
  const setY = (value, ms = 0) => {
    y = Math.min(maxY(), Math.max(0, value));
    const img = frontImg(); img.style.setProperty('--scroll-ms', ms + 'ms'); img.style.transform = `translateY(${-y}px)`;
    placeHot(); root.dataset.y = Math.round(y);
  };
  const place = (layer, cls) => { layer.className = 'fl-layer no-anim ' + cls; void layer.offsetWidth; layer.classList.remove('no-anim'); };
  function placeHot() {
    const [x, top, w, h] = BEATS[current].hot;
    hotEl.style.cssText = `left:${x}px;top:${top - y}px;width:${w}px;height:${h}px`;
    hotEl.classList.toggle('is-on', hints);
  }

  function show(i, how) {
    const beat = BEATS[i];
    const incoming = layers[1 - front], outgoing = layers[front];
    const img = incoming.querySelector('img');
    incoming.classList.add('no-anim'); img.style.setProperty('--scroll-ms', '0ms'); img.style.transform = 'translateY(0)';
    img.src = beat.img; img.alt = CHAPTERS[beat.ch];
    if (!how || reduced) { incoming.className = 'fl-layer no-anim'; incoming.style.zIndex = 2; outgoing.style.zIndex = 1; }
    else if (how === 'fade') { place(incoming, 'is-clear'); incoming.style.zIndex = 2; outgoing.style.zIndex = 1; incoming.className = 'fl-layer'; }
    else if (how === 'push') { place(incoming, 'is-right'); incoming.style.zIndex = 2; outgoing.style.zIndex = 1; incoming.className = 'fl-layer'; outgoing.className = 'fl-layer is-left'; }
    else if (how === 'back') { place(incoming, 'is-left'); incoming.style.zIndex = 1; outgoing.style.zIndex = 2; incoming.className = 'fl-layer'; outgoing.className = 'fl-layer is-right'; }
    else if (how === 'up') { place(incoming, 'is-down'); incoming.style.zIndex = 2; outgoing.style.zIndex = 1; incoming.className = 'fl-layer'; outgoing.className = 'fl-layer is-back'; }
    else if (how === 'down') { place(incoming, 'is-back'); incoming.style.zIndex = 1; outgoing.style.zIndex = 2; incoming.className = 'fl-layer'; outgoing.className = 'fl-layer is-down'; }
    front = 1 - front; current = i; y = 0; root.dataset.beat = beat.id; root.dataset.y = 0;
    buttons.forEach((b, n) => { b.toggleAttribute('aria-current', n === beat.ch); b.classList.toggle('is-past', n < beat.ch); });
    jumpBtn.hidden = !beat.jump; if (beat.jump) jumpBtn.querySelector('span').textContent = beat.jump + ' →';
    note.textContent = beat.end ? '' : note.dataset.default;
    hotEl.classList.remove('is-flash'); placeHot();
    busy = true; setTimeout(() => { busy = false; }, reduced ? 0 : 480);
  }

  function next(target, how) {
    const beat = BEATS[current];
    if (beat.end) { show(0, 'fade'); note.textContent = 'That’s the whole journey. Tap through it again, or pick a chapter.'; return; }
    const to = target != null ? target : (beat.to ? index(beat.to) : current + 1);
    show(to, how || beat.go || 'push');
  }
  function back() {
    if (current === 0) return;
    const prev = BEATS[current].id === 'lenders' ? index('intro') : current - 1 - (BEATS[current - 1].id === 'lenders' ? 1 : 0);
    show(prev, BEATS[current].id === 'lenders' ? 'down' : 'back');
  }
  function tap(x, ty) {
    tapDot.style.left = x + 'px'; tapDot.style.top = (ty - y) + 'px';
    tapDot.classList.remove('is-on'); void tapDot.offsetWidth; tapDot.classList.add('is-on');
  }
  function flashHot() {
    const [, top, , h] = BEATS[current].hot;
    if (top < y || top + h > y + 874) setY(top - 874 + h + 120, 600);
    hotEl.classList.remove('is-flash'); void hotEl.offsetWidth; hotEl.classList.add('is-flash');
  }
  const inside = (r, x, ty) => x >= r[0] && x <= r[0] + r[2] && ty >= r[1] && ty <= r[1] + r[3];

  /* taps and drags on the screen */
  let down = null;
  screen.addEventListener('pointerdown', e => { down = {x: e.clientX, y: e.clientY, sy: y, moved: false}; screen.setPointerCapture(e.pointerId); });
  screen.addEventListener('pointermove', e => {
    if (!down) return;
    const scale = screen.getBoundingClientRect().width / 402;
    const dy = (e.clientY - down.y) / scale;
    if (Math.abs(dy) > 6) down.moved = true;
    if (down.moved) setY(down.sy - dy);
  });
  screen.addEventListener('pointerup', e => {
    const d = down; down = null;
    if (!d || d.moved || busy) return;
    const r = screen.getBoundingClientRect(), scale = r.width / 402;
    const x = (e.clientX - r.left) / scale, ty = (e.clientY - r.top) / scale + y;
    const beat = BEATS[current];
    const alt = (beat.alt || []).find(a => inside(a, x, ty));
    if (alt) { tap(x, ty); setTimeout(() => show(index(alt[4]), alt[5]), 160); return; }
    if (inside(beat.hot, x, ty) || beat.jump) { tap(x, ty); setTimeout(() => next(), 160); return; }
    flashHot();
  });
  screen.addEventListener('wheel', e => { e.preventDefault(); setY(y + e.deltaY * 0.9); }, {passive: false});

  list.addEventListener('click', e => {
    const b = e.target.closest('[data-step]'); if (!b) return;
    show(BEATS.findIndex(beat => beat.ch === +b.dataset.step), 'fade');
  });
  jumpBtn.addEventListener('click', () => next());
  restartBtn.addEventListener('click', () => { show(0, 'fade'); });
  hintBtn.addEventListener('click', () => { hints = !hints; hintBtn.setAttribute('aria-pressed', String(hints)); placeHot(); });
  addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); if (!busy) next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); if (!busy) back(); }
    if (e.key === 'ArrowDown') setY(y + 120, 300);
    if (e.key === 'ArrowUp') setY(y - 120, 300);
  });

  const fit = () => screen.style.setProperty('--tk-scale', screen.parentElement.clientWidth / 402);
  new ResizeObserver(fit).observe(screen.parentElement);
  fit();
  note.dataset.default = note.textContent;
  show(0, null);
})();
