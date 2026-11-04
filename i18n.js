/* Site language. English is the source text in the HTML; Spanish comes from i18n-es.js.
   The choice is remembered across pages. Add ?lang=es or ?lang=en to any URL to force one. */
(() => {
  const KEY = 'laura-lang';
  const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  const write = value => { try { localStorage.setItem(KEY, value); } catch {} };
  const forced = new URLSearchParams(location.search).get('lang');
  if (forced === 'es' || forced === 'en') write(forced);
  const lang = forced === 'es' || forced === 'en' ? forced : read() === 'es' ? 'es' : 'en';
  document.documentElement.lang = lang;

  let hide = null;
  if (lang === 'es') {
    hide = document.createElement('style');
    hide.textContent = 'body{visibility:hidden}';
    document.head.appendChild(hide);
    setTimeout(() => hide.remove(), 2000);
  }

  const INLINE = new Set(['A', 'EM', 'STRONG', 'B', 'I', 'BR', 'SPAN', 'SMALL', 'SUP', 'SUB', 'U', 'ABBR']);
  const SKIP = 'script,style,svg,noscript,canvas,.rld-mock-body,.rld-app-mock,.rld-report-dialog,[data-no-i18n]';
  const ATTRS = ['alt', 'aria-label', 'title', 'placeholder', 'data-screen-alt', 'data-screen-caption', 'data-flower'];
  const clean = text => text.replace(/\s+/g, ' ').trim();
  const hasWords = text => /[A-Za-z]{2}/.test(text);
  const isUnit = el => [...el.children].every(child => INLINE.has(child.tagName) && isUnit(child));

  function walk(root, visit) {
    for (const el of root.children) {
      if (el.matches(SKIP)) continue;
      if (el.textContent.trim() && isUnit(el)) { visit.unit(el); continue; }
      for (const node of el.childNodes) if (node.nodeType === 3 && node.textContent.trim()) visit.text(node);
      walk(el, visit);
    }
  }
  function eachAttr(fn) {
    for (const name of ATTRS) {
      for (const el of document.querySelectorAll(`[${name}]`)) {
        if (el.closest('.rld-mock-body,.rld-app-mock,.rld-report-dialog')) continue;
        const value = el.getAttribute(name);
        if (hasWords(value)) fn(el, name, value);
      }
    }
  }
  const meta = () => document.querySelector('meta[name="description"]');

  function apply(dict) {
    const get = key => dict[clean(key)];
    walk(document.body, {
      unit(el) { const es = get(el.innerHTML); if (es !== undefined) el.innerHTML = es; },
      text(node) {
        const es = get(node.textContent);
        if (es !== undefined) node.textContent = node.textContent.replace(/\S[\s\S]*\S|\S/, es);
      }
    });
    eachAttr((el, name, value) => { const es = get(value); if (es !== undefined) el.setAttribute(name, es); });
    const title = get(document.title);
    if (title !== undefined) document.title = title;
    const desc = meta();
    if (desc && get(desc.content) !== undefined) desc.content = get(desc.content);
  }

  function collect() {
    const keys = [];
    const add = value => { const key = clean(value); if (hasWords(key.replace(/<[^>]+>/g, ' '))) keys.push(key); };
    walk(document.body, { unit: el => add(el.innerHTML), text: node => add(node.textContent) });
    eachAttr((el, name, value) => add(value));
    add(document.title);
    if (meta()) add(meta().content);
    return [...new Set(keys)];
  }

  window.I18n = {
    lang,
    run() {
      if (new URLSearchParams(location.search).has('i18n-dump')) window.__keys = collect();
      if (lang === 'es' && window.I18N_ES) apply(window.I18N_ES);
      if (hide) hide.remove();
      this.pill();
    },
    pill() {
      const button = document.querySelector('.lang-pill');
      if (!button) return;
      const next = lang === 'es' ? 'en' : 'es';
      button.querySelector('.lang-flag-es').toggleAttribute('hidden', next !== 'es');
      button.querySelector('.lang-flag-en').toggleAttribute('hidden', next !== 'en');
      button.querySelector('.lang-name').textContent = next === 'es' ? 'Español' : 'English';
      button.setAttribute('aria-label', next === 'es' ? 'Ver la web en español' : 'View this site in English');
      button.lang = next;
      button.addEventListener('click', () => { write(next); location.href = location.pathname + location.hash; });
    }
  };
  /* For text that scripts write at runtime: t('{n} of {total}', {n: 1, total: 5}) */
  window.t = (text, values = {}) => {
    const es = lang === 'es' && window.I18N_ES ? window.I18N_ES[text] : undefined;
    return (es === undefined ? text : es).replace(/\{(\w+)\}/g, (match, name) => name in values ? values[name] : match);
  };
})();
