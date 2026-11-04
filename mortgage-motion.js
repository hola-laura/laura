/* mortgage-motion.js
   Small animations for case-study-mortgages.html. Styles live in mortgage-device.css.
   Everything here is decoration: if this file fails or motion is turned off in the
   system settings, the page is complete and readable without it. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  /* 1. Phones lean gently towards the pointer (mouse and trackpad only, not touch) */
  if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
    let current = null;
    const reset = () => { if (current) current.style.transform = ''; current = null; };
    document.addEventListener('pointermove', event => {
      const phone = event.target.closest && event.target.closest('.mg-bz');
      if (phone !== current) reset();
      if (!phone) return;
      current = phone;
      const box = phone.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      phone.style.transform = `perspective(1100px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`;
    });
    document.documentElement.addEventListener('pointerleave', reset);
  }

  /* 2. Things appear as they scroll into view. Adding .mg-motion is what hides them first. */
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('mg-motion');

  document.querySelectorAll('.mg-timeline li').forEach((item, index) => item.style.setProperty('--i', index));

  /* Numbers like "38% → 88%" count up from the first value to the second */
  const countUp = element => {
    const text = element.textContent;
    const match = text.match(/^(.*?)(\d+(?:\.\d+)?)(\D*?→\s*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    const [, before, from, middle, to, after] = match;
    const start = performance.now(), duration = 1300;
    const tick = now => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(+from + (+to - +from) * eased);
      element.textContent = t < 1 ? `${before}${from}${middle}${value}${after}` : text;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    observer.unobserve(element);
    element.classList.add('is-in');
    if (element.matches('.mg-bz')) {          // wake the Dynamic Island
      element.classList.add('is-ping');
      setTimeout(() => element.classList.remove('is-ping'), 1200);
    }
    if (element.matches('.mg-metrics')) element.querySelectorAll('strong').forEach(countUp);
  }), { threshold: 0.25 });

  document.querySelectorAll('.mg-bz[data-mg-phone], .mg-timeline, .mg-bars, .mg-metrics').forEach(element => observer.observe(element));

  /* Printing or saving as PDF should never catch things half-hidden */
  addEventListener('beforeprint', () => document.querySelectorAll('.mg-bz, .mg-timeline, .mg-bars').forEach(element => element.classList.add('is-in')));
})();
