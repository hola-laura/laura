/* embed.js — shared by every prototype embedded in the presentation.
   Arrow keys pressed while the prototype has focus still move the deck. */
(() => {
  if (new URLSearchParams(location.search).has('bare')) document.body.classList.add('is-bare');
  addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    parent.postMessage({deckKey: event.key}, '*');
  });
})();
