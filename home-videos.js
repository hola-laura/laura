/* home-videos.js
   Homepage card videos (.card-video): short loops recorded from the prototypes in each case study.
   Each one shows its poster until it is near the screen, then loads and plays; it pauses when it leaves.
   So only the videos someone actually reaches are downloaded. With reduced motion they never play by
   themselves and show controls instead. Without JavaScript the poster stays as a still image. */
(() => {
  const vids = [...document.querySelectorAll('.card-video')];
  if (!vids.length) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    vids.forEach(v => { v.controls = true; });
    return;
  }
  if (!('IntersectionObserver' in window)) {
    vids.forEach(v => v.play().catch(() => {}));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.play().catch(() => {}); else e.target.pause(); });
  }, { rootMargin: '150px 0px', threshold: .15 });
  vids.forEach(v => io.observe(v));
})();
