/* rldatix-laptop.js
   RLDatix case study: the scrolling laptop tour ([data-laptop-tour]) with play, reset and a position slider. Respects reduced motion. */
(() => {
  const root = document.querySelector('[data-laptop-tour]');
  if (!root) return;
  const screen = root.querySelector('[data-laptop-screen]');
  const play = root.querySelector('[data-laptop-play]');
  const reset = root.querySelector('[data-laptop-reset]');
  const slider = root.querySelector('[data-laptop-position]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let playing = false;
  const maxScroll = () => Math.max(0, screen.scrollHeight - screen.clientHeight);
  const sync = () => {
    const percent = maxScroll() ? Math.round(screen.scrollTop / maxScroll() * 100) : 0;
    slider.value = String(percent);
    slider.setAttribute('aria-valuetext', t('{percent}% through the dashboard',{percent}));
    if (!playing) play.textContent = percent >= 99 ? t('Replay tour') : t('Play tour');
  };
  const stop = () => {
    cancelAnimationFrame(frame);
    playing = false;
    root.classList.remove('is-playing');
    play.setAttribute('aria-pressed', 'false');
    sync();
  };
  play.addEventListener('click', () => {
    if (playing) { stop(); return; }
    if (screen.scrollTop >= maxScroll() - 2) screen.scrollTop = 0;
    if (reduced.matches) { screen.scrollTop = maxScroll(); sync(); return; }
    const start = screen.scrollTop;
    const distance = maxScroll() - start;
    if (distance <= 0) return;
    playing = true;
    root.classList.add('is-playing');
    play.textContent = t('Pause tour');
    play.setAttribute('aria-pressed', 'true');
    const duration = Math.max(2400, 8000 * distance / maxScroll());
    let started;
    const tick = now => {
      if (!playing) return;
      if (started === undefined) started = now;
      const t = Math.min(1, (now - started) / duration);
      const eased = t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      screen.scrollTop = start + distance * eased;
      sync();
      if (t < 1) frame = requestAnimationFrame(tick); else stop();
    };
    frame = requestAnimationFrame(tick);
  });
  reset.addEventListener('click', () => { stop(); screen.scrollTop = 0; sync(); });
  slider.addEventListener('input', () => {
    const percent = Number(slider.value);
    stop();
    screen.scrollTop = maxScroll() * percent / 100;
    sync();
  });
  screen.addEventListener('scroll', sync, {passive:true});
  ['wheel', 'pointerdown', 'touchstart'].forEach(type => screen.addEventListener(type, stop, {passive:true}));
  screen.addEventListener('keydown', event => {
    if (['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key)) stop();
  });
  new IntersectionObserver(entries => { if (!entries[0].isIntersecting) stop(); }).observe(root);
  screen.querySelectorAll('img').forEach(image => image.addEventListener('load', sync));
  addEventListener('resize', () => { stop(); sync(); });
  reduced.addEventListener('change', stop);
  sync();

  if (!reduced.matches) {
    const targets = [...document.querySelectorAll('main > section, #v3-section-0 .fv-lead-grid article, .rld-laptop')];
    document.documentElement.classList.add('rld-motion-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: .06, rootMargin:'0px 0px -24px 0px'});
    targets.forEach((target, index) => {
      target.classList.add('rld-reveal');
      if (target.matches('#v3-section-0 .fv-lead-grid article')) target.style.setProperty('--reveal-delay', (index % 3 * 75) + 'ms');
      observer.observe(target);
    });
    reduced.addEventListener('change', () => {
      if (reduced.matches) document.documentElement.classList.remove('rld-motion-ready');
    });
  }
})();