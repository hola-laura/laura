/* case-format.js
   Shared behaviour for case studies in the Flex format (case-format.css):
   the hero wall loops without a seam and can be paused. */
(() => {
  const es = window.I18n && I18n.lang === 'es';
  document.querySelectorAll('.fx-wall-col').forEach(col => {
    [...col.children].forEach(phone => col.append(phone.cloneNode(true)));
  });
  const hero = document.querySelector('.fx-hero'), pause = document.querySelector('.fx-pause');
  if (hero && pause) pause.addEventListener('click', () => {
    const paused = hero.classList.toggle('is-paused');
    pause.textContent = paused ? (es ? 'Reanudar' : 'Play') : (es ? 'Pausar' : 'Pause');
    pause.setAttribute('aria-pressed', String(paused));
  });
})();
