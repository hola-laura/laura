/* Flex v2: draw a line from the selected list item to the part of the screen it points to. */
(() => {
  const grid = document.querySelector('.fx-rank-grid');
  if (!grid) return;
  const svg = grid.querySelector('.fx-rank-line'), path = svg.querySelector('path'), dot = svg.querySelector('circle');
  const hit = grid.querySelector('.fx-map-hit'), screen = grid.querySelector('.fx-map-screen');
  const draw = () => {
    const item = grid.querySelector('.fx-rank-item[aria-pressed=true]');
    if (!item || getComputedStyle(svg).display === 'none') return;
    const g = grid.getBoundingClientRect(), a = item.getBoundingClientRect(), h = hit.getBoundingClientRect(), s = screen.getBoundingClientRect();
    const x1 = a.right - g.left, y1 = a.top + a.height / 2 - g.top;
    const x2 = s.left - g.left - 10;
    const y2 = Math.min(Math.max(h.top + h.height / 2, s.top + 24), s.bottom - 24) - g.top;
    const mid = (x1 + x2) / 2;
    path.setAttribute('d', `M${x1} ${y1} C${mid} ${y1} ${mid} ${y2} ${x2} ${y2}`);
    dot.setAttribute('cx', x2); dot.setAttribute('cy', y2);
  };
  let until = 0;
  const follow = () => { draw(); if (performance.now() < until) requestAnimationFrame(follow); };
  const animate = () => { until = performance.now() + 900; requestAnimationFrame(follow); };
  grid.querySelectorAll('.fx-rank-item').forEach(b => ['click', 'mouseenter', 'focus'].forEach(e => b.addEventListener(e, animate)));
  addEventListener('resize', animate);
  addEventListener('scroll', draw, { passive: true });
  addEventListener('load', animate);
  animate();
})();
