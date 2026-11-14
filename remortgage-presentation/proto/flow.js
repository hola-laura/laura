/* flow.js — plays a sequence of real Figma frames inside the phone, like a recorded prototype.
   flow.html?f=rec | chat | app   (&bare hides the step list)
   Each beat shows one frame. `scroll` scrolls a long frame, `tap` shows where the finger goes,
   `go` is how the next frame arrives: push (from the right), pop (back), up (sheet), down (close sheet). */
(() => {
  const root = document.querySelector('[data-flow]');
  if (!root) return;
  const A = 'remortgage-presentation/assets/proto/';
  const FLOWS = {
    rec: {
      steps: ['The tracker says it’s ready', 'The recommendation', 'Why this deal, for me', 'What it really costs', 'What we ruled out', 'Every detail, before you commit', 'Accept, reject or ask', 'What happens next', 'Back in the tracker'],
      beats: [
        {img: 'rec-tracker.png', step: 0, hold: 1700, tap: [201, 625], go: 'push'},
        {img: 'rec-main.png', step: 1, hold: 2300, tap: [110, 762], go: 'up'},
        {img: 'rec-why.png', step: 2, hold: 2900, tap: [38, 98], go: 'down'},
        {img: 'rec-main.png', step: 1, hold: 500, tap: [156, 362], go: 'push'},
        {img: 'rec-cost.png', step: 3, hold: 2900, tap: [36, 84], go: 'pop'},
        {img: 'rec-main.png', step: 1, hold: 1300, scroll: 185, tap: [200, 714], go: 'push'},
        {img: 'rec-ruledout.png', step: 4, hold: 2900, scroll: 342, go: 'pop'},
        {img: 'rec-main.png', step: 1, from: 185, scroll: 185, hold: 500, tap: [200, 820], go: 'push'},
        {img: 'rec-details.png', step: 5, hold: 4300, scroll: 1214, scrollMs: 3300, tap: [201, 819], go: 'push'},
        {img: 'rec-secure.png', step: 6, hold: 2700, tap: [293, 826], go: 'push'},
        {img: 'rec-next.png', step: 7, hold: 2700, tap: [202, 820], go: 'push'},
        {img: 'rec-tracker-after.png', step: 8, hold: 3400}
      ]
    },
    chat: {
      steps: ['The adviser lives in the tracker', 'A mortgage-only chat, clearly labelled', 'One tap to the recommendation'],
      beats: [
        {img: 'rec-tracker-after.png', step: 0, hold: 2400, tap: [336, 673], go: 'push'},
        {img: 'intercom-redacted.png', step: 1, hold: 3200, tap: [159, 247], go: 'push'},
        {img: 'rec-main.png', step: 2, hold: 3400}
      ]
    },
    app: {
      steps: ['Before you start', 'What happens next'],
      beats: [
        {img: 'factfind-ready.png', step: 0, hold: 2600, tap: [165, 666], go: 'push'},
        {img: 'factfind-timeline.png', step: 1, hold: 3600, scroll: 185, tap: [163, 632]}
      ]
    }
  };
  const flow = FLOWS[new URLSearchParams(location.search).get('f')] || FLOWS.rec;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const screen = root.querySelector('[data-flow-screen]');
  const list = root.querySelector('[data-flow-steps]');
  const toggle = root.querySelector('[data-flow-toggle]');

  list.innerHTML = flow.steps.map((label, i) => `<li><button type="button" data-step="${i}"><span class="mg-tk-num">${String(i + 1).padStart(2, '0')}</span><span>${label}</span></button></li>`).join('');
  const buttons = [...list.querySelectorAll('button')];
  screen.innerHTML = '<div class="fl-layer"><img alt=""></div><div class="fl-layer"><img alt=""></div><i class="fl-tap"></i>';
  const layers = [...screen.querySelectorAll('.fl-layer')];
  const tapDot = screen.querySelector('.fl-tap');
  flow.beats.forEach(beat => { new Image().src = A + beat.img; });

  let current = 0, front = 0, playing = false, timers = [];
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  const clear = () => { timers.forEach(clearTimeout); timers = []; };
  const setScroll = (img, y, ms) => { img.style.setProperty('--scroll-ms', ms + 'ms'); img.style.transform = `translateY(${-y}px)`; };
  const place = (layer, cls) => { layer.className = 'fl-layer no-anim ' + cls; void layer.offsetWidth; layer.classList.remove('no-anim'); };

  function show(index, how) {
    const beat = flow.beats[index];
    const incoming = layers[1 - front], outgoing = layers[front];
    const img = incoming.querySelector('img');
    incoming.classList.add('no-anim');
    img.src = A + beat.img;
    setScroll(img, beat.from || 0, 0);
    if (!how || reduced) {
      incoming.className = 'fl-layer no-anim'; incoming.style.zIndex = 2; outgoing.style.zIndex = 1;
    } else if (how === 'push') {
      place(incoming, 'is-right'); incoming.style.zIndex = 2; outgoing.style.zIndex = 1;
      incoming.className = 'fl-layer'; outgoing.className = 'fl-layer is-left';
    } else if (how === 'pop') {
      place(incoming, 'is-left'); incoming.style.zIndex = 1; outgoing.style.zIndex = 2;
      incoming.className = 'fl-layer'; outgoing.className = 'fl-layer is-right';
    } else if (how === 'up') {
      place(incoming, 'is-down'); incoming.style.zIndex = 2; outgoing.style.zIndex = 1;
      incoming.className = 'fl-layer'; outgoing.className = 'fl-layer is-back';
    } else if (how === 'down') {
      place(incoming, 'is-back'); incoming.style.zIndex = 1; outgoing.style.zIndex = 2;
      incoming.className = 'fl-layer'; outgoing.className = 'fl-layer is-down';
    }
    front = 1 - front; current = index;
    buttons.forEach((button, i) => { button.toggleAttribute('aria-current', i === beat.step); button.classList.toggle('is-past', i < beat.step); });
    if (beat.scroll && beat.scroll !== (beat.from || 0)) {
      const ms = beat.scrollMs || Math.max(900, beat.hold - 1100);
      later(() => { img.parentElement.classList.remove('no-anim'); setScroll(img, beat.scroll, ms); }, 650);
    }
  }

  function schedule() {
    clear();
    if (!playing) return;
    const beat = flow.beats[current];
    const last = current === flow.beats.length - 1;
    later(() => {
      if (beat.tap) {
        tapDot.style.left = beat.tap[0] + 'px'; tapDot.style.top = beat.tap[1] + 'px';
        tapDot.classList.remove('is-on'); void tapDot.offsetWidth; tapDot.classList.add('is-on');
      }
      later(() => { show(last ? 0 : current + 1, last ? null : beat.go || 'push'); schedule(); }, beat.tap ? 520 : 0);
    }, beat.hold + (beat.scroll ? 400 : 0));
  }

  function setPlaying(value) {
    playing = value;
    toggle.setAttribute('aria-pressed', String(value));
    toggle.querySelector('span').textContent = value ? 'Pause' : 'Play';
    schedule();
  }

  list.addEventListener('click', event => {
    const button = event.target.closest('[data-step]');
    if (!button) return;
    clear(); setPlaying(false);
    show(flow.beats.findIndex(beat => beat.step === +button.dataset.step), null);
  });
  toggle.addEventListener('click', () => setPlaying(!playing));

  const fit = () => screen.style.setProperty('--tk-scale', screen.parentElement.clientWidth / 402);
  new ResizeObserver(fit).observe(screen.parentElement);
  fit();
  show(0, null);
  if (!reduced) setPlaying(true);
})();
