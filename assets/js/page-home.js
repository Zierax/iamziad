/* ============================================================
   page-home.js — renders the Q&A and values lists on the home page.
   ============================================================ */
(() => {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, m => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]
  ));

  /* stage 1 of the lock: these four answers open with l, l, m, s.
     The dot is visible but subtle; the hint names the categories. */
  const STAGE1 = new Set([3, 4, 5, 8]);

  function renderQa() {
    const host = document.getElementById('qa-list');
    if (!host || typeof QA === 'undefined') return;
    host.innerHTML = QA.map((item, i) => `
      <article class="qa-item${STAGE1.has(i + 1) ? ' stage1' : ''}" id="qa-${i + 1}">
        <p class="qa-q">
          <span class="lang-en"><span class="q-tag">[Q]</span>${esc(item.q)}</span>
          <span class="lang-ar"><span class="q-tag">[س]</span>${esc(item.qAr)}</span>
        </p>
        <p class="qa-a">
          <span class="lang-en"><span class="a-tag">[A]</span>${esc(item.a)}</span>
          <span class="lang-ar"><span class="a-tag">[ج]</span>${esc(item.aAr)}</span>
        </p>
      </article>`).join('');

    /* stage 1: those four answers open with l, l, m, s */
    const letters = [3, 4, 5, 8].map((n) => (QA[n - 1].a || '').trim().charAt(0).toLowerCase()).join('');
    const el = document.getElementById('stage1');
    if (el) el.dataset.segment = letters;
    if (letters === 'llms') if (window.ctfFound) window.ctfFound(1);
  }

  function renderValues() {
    const host = document.getElementById('values-list');
    if (!host || typeof VALUES === 'undefined') return;
    host.innerHTML = VALUES.map(v => `
      <li>
        <b><span class="lang-en">${esc(v.h)}</span><span class="lang-ar">${esc(v.hAr)}</span></b>
        <span class="lang-en">${esc(v.b)}</span><span class="lang-ar">${esc(v.bAr)}</span>
      </li>`).join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { renderQa(); renderValues(); });
  } else {
    renderQa(); renderValues();
  }
})();