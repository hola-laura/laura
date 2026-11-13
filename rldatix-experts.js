/* rldatix-experts.js
   RLDatix case study: interactive risk register (#rld-experts) and save states (#rld-behaviour). */
(() => {
  /* ---------- Risk register: saved views and bulk selection ---------- */
  const reg = document.querySelector('#rld-experts .xp-reg');
  if (reg) {
    // id, title, owner, band, label, trend class, trend, controls in place, controls total, next review, overdue, mine
    const ROWS = [
      ['RSK-0118', 'Staffing escalation out of hours', 'Ward lead', 'ext', 'Extreme', 'up', '▲ 4', 1, 3, '3 days overdue', true, true],
      ['RSK-0142', 'Clinical handover between shifts', 'Governance team', 'high', 'High', 'dn', '▼ 4', 1, 3, 'Today', false, true],
      ['RSK-0097', 'Sepsis screening missed in ED', 'Critical care', 'ext', 'Extreme', 'eq', '—', 2, 4, '12 Nov', false, false],
      ['RSK-0156', 'Medication dose transcription', 'Pharmacy', 'ext', 'Extreme', 'up', '▲ 4', 1, 2, '2 days overdue', true, false],
      ['RSK-0131', 'Falls on Ward 3 at night', 'Ward lead', 'high', 'High', 'dn', '▼ 2', 3, 4, '18 Nov', false, true],
      ['RSK-0102', 'Equipment checks overdue', 'Estates', 'mod', 'Moderate', 'eq', '—', 2, 2, '21 Nov', false, false],
      ['RSK-0164', 'Agency staff induction', 'Workforce', 'high', 'High', 'up', '▲ 3', 0, 2, '1 day overdue', true, false],
      ['RSK-0089', 'Interpreter booking delays', 'Patient experience', 'mod', 'Moderate', 'dn', '▼ 1', 2, 3, '28 Nov', false, false]
    ];
    const rows = reg.querySelector('[data-xp-rows]'), all = reg.querySelector('[data-xp-all]');
    const bulk = reg.querySelector('[data-xp-bulk]'), bulkN = reg.querySelector('[data-xp-bulk-n]'), count = reg.querySelector('[data-xp-count]');
    const sel = new Set(['RSK-0118', 'RSK-0156']);
    let view = 'all';
    const visible = () => ROWS.filter(r => view === 'all' || (view === 'mine' && r[11]) || (view === 'over' && r[10]) || (view === 'ext' && r[3] === 'ext'));
    const render = () => {
      const v = visible();
      rows.innerHTML = v.map(r => `<tr class="${sel.has(r[0]) ? 'is-sel' : ''}"><td><input type="checkbox" data-id="${r[0]}" aria-label="Select ${r[1]}"${sel.has(r[0]) ? ' checked' : ''}></td><td class="id">${r[0]}</td><td class="t">${r[1]}</td><td>${r[2]}</td><td><span class="rs-chip ${r[3]}">${r[4]}</span></td><td class="tr ${r[5]}">${r[6]}</td><td>${r[7]} of ${r[8]}</td><td class="${r[10] ? 'over' : ''}">${r[9]}</td></tr>`).join('');
      count.textContent = `Showing ${v.length} of ${ROWS.length}`;
      bulk.hidden = sel.size === 0;
      bulkN.textContent = `${sel.size} selected`;
      all.checked = v.length > 0 && v.every(r => sel.has(r[0]));
    };
    rows.addEventListener('change', e => {
      const id = e.target.dataset.id;
      if (!id) return;
      e.target.checked ? sel.add(id) : sel.delete(id);
      render();
    });
    all.addEventListener('change', () => { visible().forEach(r => (all.checked ? sel.add(r[0]) : sel.delete(r[0]))); render(); });
    reg.querySelectorAll('[data-xv]').forEach(b => b.addEventListener('click', () => {
      view = b.dataset.xv;
      reg.querySelectorAll('[data-xv]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      render();
    }));
    render();
  }

  /* ---------- Save states ---------- */
  const beh = document.getElementById('rld-behaviour');
  if (beh) {
    const fields = (date, err) => `<label class="rs-fake-input">Owner<span>Ward lead</span></label><label class="rs-fake-input${err ? ' is-err' : ''}">Review date<span>${date}</span>${err ? `<em>${err}</em>` : ''}</label>`;
    const S = {
      saving: { t: 'Saving', trig: 'Someone presses Save.', sys: 'Disables the button, shows progress and keeps the form readable.', per: 'Knows it’s working and doesn’t press twice.',
        f: fields('18 Nov') + '<div class="xp-row"><span class="rs-btn" data-state="busy"><span class="rs-spin" aria-hidden="true"></span>Saving</span><span class="rs-btn ghost">Cancel</span></div>' },
      saved: { t: 'Saved', trig: 'The server confirms the change.', sys: 'Confirms what changed and offers undo for a few seconds.', per: 'Moves on without checking again.',
        f: fields('18 Nov') + '<div class="xp-row"><span class="rs-btn">Save changes</span><span class="rs-btn ghost">Cancel</span></div><div class="xp-banner ok"><b>✓</b><span>Changes saved. Owner and review date updated.</span></div>' },
      invalid: { t: 'Invalid', trig: 'A field breaks a rule, such as a review date in the past.', sys: 'Stops the save and marks that field, with the fix in plain words.', per: 'Sees exactly what to change, right where it is.',
        f: fields('18 Oct', 'Review date can’t be in the past. Pick today or later.') + '<div class="xp-row"><span class="rs-btn">Save changes</span><span class="rs-btn ghost">Cancel</span></div>' },
      failed: { t: 'Failed', trig: 'The connection drops or the server returns an error.', sys: 'Keeps everything typed and offers a retry. Nothing is lost.', per: 'Retries without typing it all again.',
        f: fields('18 Nov') + '<div class="xp-banner bad"><b>!</b><span>We couldn’t save your changes. Your edits are still here. Check your connection and try again.</span></div><div class="xp-row"><span class="rs-btn">Try again</span><span class="rs-btn ghost">Cancel</span></div>' }
    };
    if (document.documentElement.lang === 'es') {
      Object.assign(S.saving, { t: 'Guardando', trig: 'Alguien pulsa Guardar.', sys: 'Desactiva el botón, muestra el progreso y mantiene el formulario legible.', per: 'Sabe que está funcionando y no pulsa dos veces.' });
      Object.assign(S.saved, { t: 'Guardado', trig: 'El servidor confirma el cambio.', sys: 'Confirma qué ha cambiado y ofrece deshacer durante unos segundos.', per: 'Sigue con lo suyo sin volver a comprobarlo.' });
      Object.assign(S.invalid, { t: 'No válido', trig: 'Un campo incumple una regla, como una fecha de revisión pasada.', sys: 'Detiene el guardado y marca ese campo, con la solución en palabras claras.', per: 'Ve exactamente qué cambiar, justo donde está.' });
      Object.assign(S.failed, { t: 'Fallido', trig: 'Se cae la conexión o el servidor devuelve un error.', sys: 'Conserva todo lo escrito y ofrece reintentar. No se pierde nada.', per: 'Reintenta sin tener que escribirlo todo otra vez.' });
    }
    const form = beh.querySelector('[data-xs-form]');
    const show = k => {
      const s = S[k];
      beh.querySelector('[data-xs-title]').textContent = s.t;
      beh.querySelector('[data-xs-trigger]').textContent = s.trig;
      beh.querySelector('[data-xs-system]').textContent = s.sys;
      beh.querySelector('[data-xs-person]').textContent = s.per;
      form.innerHTML = s.f;
      beh.querySelectorAll('[data-xs]').forEach(b => b.setAttribute('aria-selected', String(b.dataset.xs === k)));
      beh.querySelectorAll('[data-xf]').forEach(f => f.classList.toggle('on', f.dataset.xf === k));
    };
    beh.querySelectorAll('[data-xs]').forEach(b => b.addEventListener('click', () => show(b.dataset.xs)));
    show('failed');
  }
})();
