/* home-videos.js
   Homepage card videos (.card-video): short loops recorded from the prototypes in each case study.
   They play only while on screen. With reduced motion they never autoplay and show controls instead. */
(() => {
  const vids = [...document.querySelectorAll('.card-video')];
  if (!vids.length) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    vids.forEach(v => { v.removeAttribute('autoplay'); v.pause(); v.controls = true; });
    return;
  }
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.play().catch(() => {}); else e.target.pause(); });
  }, { threshold: .25 });
  vids.forEach(v => io.observe(v));
})();
