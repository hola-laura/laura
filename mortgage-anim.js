/* mortgage-anim.js — swaps the onboarding illustrations for Monzo's animated versions (same as the remortgaging deck).
   Static images stay for people who prefer reduced motion. */
(() => {
  const P = 'remortgage-presentation/assets/';
  const still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (still) { document.querySelectorAll('.ms-anim').forEach(img => img.remove()); }
  const swap = {'connect.png': 'anim/house-light.webp', 'insights.png': 'anim/calculator-light.webp', 'calendar.png': 'anim/calendar-light.webp'};
  const run = () => {
    if (!still) document.querySelectorAll('.ob-frame img').forEach(img => {
      const name = (img.getAttribute('src') || '').split('/').pop();
      if (!swap[name]) return;
      img.removeAttribute('width'); img.removeAttribute('height'); img.classList.add('is-anim'); img.src = P + swap[name];
    });
    document.querySelectorAll('.ob-frame .ob-art img[src$="equity.png"]').forEach(img => {
      const I = P + 'img/';
      img.outerHTML = '<div class="eq-art" aria-hidden="true"><img class="eq-base" src="' + I + 'eq-base.png" alt="">'
        + '<img class="eq-cloud eq-cloud-l" src="' + I + 'eq-cloud-l.png" alt=""><img class="eq-cloud eq-cloud-r" src="' + I + 'eq-cloud-r.png" alt="">'
        + '<img class="eq-spark" src="' + I + 'eq-spark.png" alt=""><span class="eq-bar"><i class="eq-fill"></i></span></div>';
    });
  };
  if (document.querySelector('.ob-frame .ob-screen')) run();
  else document.addEventListener('DOMContentLoaded', run);
})();
