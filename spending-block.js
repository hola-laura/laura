/* spending-block.js
   The Spending Block prototype: write a reminder, block, try to unblock and read your own words. */
(() => {
  const root = document.querySelector('[data-sb-proto]');
  if (!root) return;
  const screens = [...root.querySelectorAll('.sb-scr')];
  const note = root.querySelector('[data-note]'), quote = root.querySelector('[data-quote]');
  const fallback = note.value;
  const show = name => {
    if (name === 'reconsider') quote.textContent = `“${note.value.trim() || fallback}”`;
    screens.forEach(s => {
      const on = s.dataset.scr === name;
      s.classList.toggle('is-on', on);
      s.toggleAttribute('inert', !on);
    });
    const target = root.querySelector(`[data-scr="${name}"]`);
    const focus = target.querySelector('textarea, button');
    if (focus) focus.focus({ preventScroll: true });
  };
  root.addEventListener('click', e => {
    const go = e.target.closest('[data-go]');
    if (go) show(go.dataset.go);
  });
})();
