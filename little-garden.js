/* A quiet five-seed game, with native modal keyboard and focus handling. */
(() => {
  const opener = document.querySelector('.little-jelly');
  const dialog = document.querySelector('#little-garden');
  if (!opener || !dialog) return;
  const seeds = [...dialog.querySelectorAll('[data-seed]')];
  const count = dialog.querySelector('.garden-count');
  const restart = dialog.querySelector('.garden-restart');
  const title = dialog.querySelector('#garden-title');
  const instruction = dialog.querySelector('#garden-instruction');
  const note = dialog.querySelector('.garden-note');
  const cursor = dialog.querySelector('.garden-dot');
  let grown = 0;
  opener.addEventListener('click', () => {
    if (!dialog.open) { dialog.showModal(); document.body.classList.add('garden-open'); }
  });
  function close() { dialog.close(); }
  dialog.querySelector('.garden-close').addEventListener('click', close);
  dialog.addEventListener('close', () => {
    document.body.classList.remove('garden-open'); cursor.style.opacity = '0'; opener.focus({preventScroll:true});
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
  });
  dialog.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    const rect = dialog.getBoundingClientRect();
    cursor.style.transform = `translate(${event.clientX-rect.left}px, ${event.clientY-rect.top}px)`;
    cursor.style.opacity = '1';
  });
  dialog.addEventListener('pointerleave', () => { cursor.style.opacity = '0'; });
  for (const seed of seeds) seed.addEventListener('click', () => {
    if (seed.classList.contains('is-grown')) return;
    seed.classList.add('is-grown');
    seed.setAttribute('aria-disabled', 'true');
    seed.setAttribute('aria-label', `${seed.dataset.flower}, grown by you`);
    grown++;
    count.textContent = `${seed.dataset.flower} is blooming. ${grown} of 5 in bloom`;
    dialog.classList.add('has-started');
    if (grown === seeds.length) {
      dialog.classList.add('is-complete');
      title.textContent = 'Look what you grew.';
      instruction.textContent = 'A little garden, just for you.';
      note.textContent = 'Take a breath. Enjoy your little patch of good.';
      count.textContent = '5 of 5 in bloom. Your garden is complete.';
      restart.hidden = false;
    }
  });
  restart.addEventListener('click', () => {
    grown = 0;
    dialog.classList.remove('is-complete', 'has-started');
    for (const seed of seeds) {
      seed.classList.remove('is-grown'); seed.removeAttribute('aria-disabled');
      seed.setAttribute('aria-label', `Plant seed ${seed.dataset.seed} of 5`);
    }
    count.textContent = '0 of 5 in bloom';
    title.textContent = 'Grow a little good.';
    instruction.textContent = 'Five seeds. Five different flowers. A little care.';
    note.textContent = 'No rush. Good things take a little care.';
    restart.hidden = true; seeds[0].focus();
  });
})();
