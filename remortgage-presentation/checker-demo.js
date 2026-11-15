/* Plays the checker by itself while this slide is showing: types the copy, runs the check, scrolls the results. */
(() => {
  const frame = document.querySelector('iframe.checker-demo');
  if (!frame) return;
  let run = 0;
  const wait = ms => new Promise(r => setTimeout(r, ms));
  frame.addEventListener('load', async () => {
    const id = ++run;
    const alive = () => id === run && frame.getAttribute('src');
    try {
      const doc = frame.contentDocument, win = frame.contentWindow;
      const box = doc.getElementById('text'), check = doc.getElementById('check');
      if (!box || !check) return;
      const copy = box.value;
      const scroll = (to, ms) => new Promise(done => {
        const from = win.scrollY, t0 = performance.now();
        const step = now => {
          if (!alive()) return done();
          const p = Math.min(1, (now - t0) / ms), e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
          win.scrollTo(0, from + (to - from) * e);
          p < 1 ? requestAnimationFrame(step) : done();
        };
        requestAnimationFrame(step);
      });
      while (alive()) {
        win.scrollTo(0, 0);
        const results = doc.getElementById('results');
        if (results) results.innerHTML = '';
        box.value = '';
        await wait(900);
        await scroll(Math.max(0, box.getBoundingClientRect().top + win.scrollY - 150), 900);
        for (const ch of copy) { if (!alive()) return; box.value += ch; await wait(16); }
        box.dispatchEvent(new Event('input', {bubbles: true}));
        await wait(600);
        check.click();
        await wait(900);
        const end = doc.documentElement.scrollHeight - win.innerHeight;
        await scroll(Math.min(end, check.getBoundingClientRect().top + win.scrollY - 40), 1200);
        await wait(1400);
        await scroll(end, 9000);
        await wait(2200);
      }
    } catch (error) { /* shown from another origin (local preview): the tool simply stays as it is */ }
  });
})();
