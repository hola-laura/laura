/* home-videos.js
   Homepage card videos (.card-video): short loops for each case study.
   Each one shows its poster until it is near the screen, then loads and plays; it pauses when it leaves.
   So only the videos someone actually reaches are downloaded. With reduced motion they never play by
   themselves and show controls instead. Without JavaScript the poster stays as a still image.
   A card marked data-video-sync (Flex) holds two videos of the same length that tell one story:
   they restart together so the tap on the first phone lines up with the second. */
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
  const play = v => v.play().catch(() => {});
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const group = e.target.hasAttribute('data-video-sync') ? [...e.target.querySelectorAll('.card-video')] : [e.target];
      if (!e.isIntersecting) { group.forEach(v => v.pause()); return; }
      if (group.length > 1) group.forEach(v => { try { v.currentTime = 0; } catch (err) {} });
      group.forEach(play);
    });
  }, { rootMargin: '150px 0px', threshold: .15 });
  const groups = [...document.querySelectorAll('[data-video-sync]')];
  groups.forEach(g => {
    io.observe(g);
    const [lead, ...rest] = g.querySelectorAll('.card-video');
    // Keep the pair together: when the first one loops, bring the others back to the start too.
    lead.addEventListener('seeked', () => { if (lead.currentTime < .2) rest.forEach(v => { if (Math.abs(v.currentTime - lead.currentTime) > .4) v.currentTime = lead.currentTime; }); });
  });
  vids.filter(v => !v.closest('[data-video-sync]')).forEach(v => io.observe(v));
})();
