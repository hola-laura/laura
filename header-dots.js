/* Header dots respond locally to the pointer, retaining the original SVG as a fallback. */
(() => {
  const texture = document.querySelector('.dotted-field');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if (!texture || !fine.matches) return;
  const canvas = document.createElement('canvas');
  canvas.className = 'header-dot-response';
  canvas.setAttribute('aria-hidden', 'true');
  const density = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(1069 * density);
  canvas.height = Math.round(478 * density);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.scale(density, density);
  texture.after(canvas);
  const dots = [];
  for (let row = 0; row < 11; row++) {
    for (let col = 0; col < 22; col++) dots.push({x:11.5 + col * 48, y:10.5 + row * 43, opacity:0});
  }
  let pointer = null, frame = 0, previous = 0, visible = true;
  let bounds = canvas.getBoundingClientRect();
  function draw(now) {
    frame = 0;
    if (document.hidden || !visible) { clear(); return; }
    const dt = previous ? Math.min(now - previous, 50) : 16.67;
    previous = now;
    const blend = reduced.matches ? 1 : 1 - Math.exp(-dt / 70);
    const scale = bounds.width / 1069;
    ctx.clearRect(0, 0, 1069, 478);
    ctx.fillStyle = '#69488f';
    let settling = false;
    for (const dot of dots) {
      const distance = pointer ? Math.hypot((dot.x - pointer.x) * scale, (dot.y - pointer.y) * scale) : Infinity;
      const proximity = Math.max(0, 1 - distance / 145);
      const target = fine.matches ? .48 * proximity * proximity * (3 - 2 * proximity) : 0;
      dot.opacity += (target - dot.opacity) * blend;
      if (Math.abs(target - dot.opacity) < .001) dot.opacity = target;
      else settling = true;
      if (dot.opacity < .001) continue;
      ctx.globalAlpha = dot.opacity;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (settling) frame = requestAnimationFrame(draw);
    else previous = 0;
  }
  function start() {
    if (!frame && visible && !document.hidden) frame = requestAnimationFrame(draw);
  }
  function clear() {
    cancelAnimationFrame(frame);
    frame = previous = 0; pointer = null;
    for (const dot of dots) dot.opacity = 0;
    ctx.clearRect(0, 0, 1069, 478);
  }
  function leave() { pointer = null; start(); }
  window.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || !visible || !fine.matches) return;
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      if (pointer) leave();
      return;
    }
    pointer = {x:(event.clientX - bounds.left) / bounds.width * 1069, y:(event.clientY - bounds.top) / bounds.height * 478};
    start();
  }, {passive:true});
  document.documentElement.addEventListener('pointerleave', leave);
  window.addEventListener('blur', leave);
  window.addEventListener('scroll', () => { bounds = canvas.getBoundingClientRect(); leave(); }, {passive:true});
  window.addEventListener('resize', () => { bounds = canvas.getBoundingClientRect(); clear(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) clear(); });
  fine.addEventListener('change', clear);
  reduced.addEventListener('change', () => { clear(); });
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    bounds = canvas.getBoundingClientRect();
    if (!visible) clear();
  }).observe(texture);
})();
