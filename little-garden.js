/* A quiet five-seed game, with native modal keyboard and focus handling. */
(() => {
  const opener = document.querySelector('.signature-flower');
  const dialog = document.querySelector('#little-garden');
  if (!opener || !dialog) return;
  const seeds = [...dialog.querySelectorAll('[data-seed]')];
  const count = dialog.querySelector('.garden-count');
  const restart = dialog.querySelector('.garden-restart');
  const title = dialog.querySelector('#garden-title');
  const instruction = dialog.querySelector('#garden-instruction');
  const note = dialog.querySelector('.garden-note');
  const cursor = dialog.querySelector('.garden-dot');
  // Reset to the original HTML copy, so content only needs editing once.
  const initialCopy = [title, instruction, note].map(element => [element, element.textContent]);
  const total = seeds.length;
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
    seed.setAttribute('aria-label', t('{flower}, grown by you',{flower:seed.dataset.flower}));
    grown++;
    count.textContent = t('{flower} is blooming. {grown} of {total} in bloom',{flower:seed.dataset.flower,grown,total});
    dialog.classList.add('has-started');
    if (grown === total) {
      dialog.classList.add('is-complete');
      title.textContent = t('Look what you grew.');
      instruction.textContent = t('A little garden, just for you.');
      note.textContent = t('Take a breath. Enjoy your little patch of good.');
      count.textContent = t('{total} of {total} in bloom. Your garden is complete.',{total});
      restart.hidden = false;
    }
  });
  restart.addEventListener('click', () => {
    grown = 0;
    dialog.classList.remove('is-complete', 'has-started');
    for (const seed of seeds) {
      seed.classList.remove('is-grown'); seed.removeAttribute('aria-disabled');
      seed.setAttribute('aria-label', t('Plant seed {seed} of {total}',{seed:seed.dataset.seed,total}));
    }
    count.textContent = t('0 of {total} in bloom',{total});
    for (const [element, text] of initialCopy) element.textContent = text;
    restart.hidden = true; seeds[0].focus();
  });
})();
