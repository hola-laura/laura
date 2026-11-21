/* Screens that step through states while their slide is shown (e.g. the first progress tracker).
   Markup: <span class="cyc" data-cycle="2600"><img class="on">…<img></span>, optional <span class="cyc-dots"> next to it. */
(() => {
  document.querySelectorAll('[data-cycle]').forEach(box => {
    const sec = box.closest('.slide');
    const imgs = [...box.querySelectorAll('img')];
    const dots = [...(sec.querySelector(`.cyc-dots[data-for="${box.id}"]`) || document.createElement('i')).querySelectorAll('button')];
    const ms = +box.dataset.cycle || 2600;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let i = 0, t = 0;
    const show = n => {
      i = n;
      imgs.forEach((im, k) => im.classList.toggle('on', k === n));
      dots.forEach((d, k) => d.classList.toggle('on', k === n));
    };
    const tick = () => { show((i + 1) % imgs.length); t = setTimeout(tick, i === imgs.length - 1 ? ms * 1.6 : ms); };
    const sync = () => {
      clearTimeout(t);
      if (sec.classList.contains('active')) { show(0); if (!reduce) t = setTimeout(tick, ms + 600); }
    };
    dots.forEach((d, k) => d.addEventListener('click', e => { e.stopPropagation(); clearTimeout(t); show(k); }));
    new MutationObserver(sync).observe(sec, { attributes: true, attributeFilter: ['class'] });
    sync();
  });
})();
