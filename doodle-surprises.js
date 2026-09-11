/* Brief SVG cameos on project previews and spare space, with no click interception. */
(() => {
  const files = ['flower', 'wave', 'hello', 'apple', 'sprout'];
  const active = new Map();
  let next = 0, lastClick = -Infinity, lastHover = -Infinity;
  const ignored = 'a, button, input, textarea, select, label, summary, [contenteditable], dialog, nav';
  function remove(pop) {
    clearTimeout(active.get(pop));
    active.delete(pop);
    pop.remove();
  }
  function clear() { [...active.keys()].forEach(remove); }
  function appear(x, y) {
    if (document.hidden || document.querySelector('dialog[open]')) return;
    if (active.size >= 2) remove(active.keys().next().value);
    const width = innerWidth < 600 ? 76 : 100;
    const height = width * 1.2;
    const pop = document.createElement('img');
    pop.className = 'doodle-pop';
    pop.src = `assets/doodles/${files[next++ % files.length]}.svg`;
    pop.alt = '';
    pop.setAttribute('aria-hidden', 'true');
    pop.draggable = false;
    pop.style.width = `${width}px`;
    pop.style.height = `${height}px`;
    pop.style.left = `${Math.max(12, Math.min(innerWidth - width - 12, x))}px`;
    pop.style.top = `${Math.max(12, Math.min(innerHeight - height - 12, y))}px`;
    pop.style.setProperty('--doodle-angle', `${next % 2 ? -9 : 8}deg`);
    document.body.append(pop);
    active.set(pop, setTimeout(() => remove(pop), 2100));
    pop.addEventListener('animationend', () => remove(pop), { once: true });
  }
  document.addEventListener('click', event => {
    if (event.button !== 0 || event.detail > 1 || event.target.closest(ignored)) return;
    if (window.getSelection()?.toString() || performance.now() - lastClick < 800) return;
    lastClick = performance.now();
    appear(event.clientX + 12, event.clientY - 88);
  });
  document.querySelectorAll('.card-media').forEach(media => {
    let waiting = 0;
    function cancel() { clearTimeout(waiting); waiting = 0; }
    function visit() {
      if (performance.now() - lastHover < 2400) return;
      lastHover = performance.now();
      const rect = media.getBoundingClientRect();
      appear(rect.right - 97, rect.top + 16);
    }
    media.addEventListener('pointerenter', event => {
      if (event.pointerType === 'touch') return;
      cancel();
      waiting = setTimeout(visit, 160);
    });
    media.addEventListener('pointerleave', cancel);
    media.addEventListener('pointercancel', cancel);
    media.closest('a')?.addEventListener('focus', () => {
      if (media.closest('a').matches(':focus-visible')) visit();
    });
    window.addEventListener('scroll', cancel, { passive: true });
  });
  document.addEventListener('visibilitychange', clear);
  window.addEventListener('scroll', clear, { passive: true });
  window.addEventListener('resize', clear);
})();
