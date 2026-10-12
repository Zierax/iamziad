/* page-now.js — renders the "now" cells. */
(() => {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, m => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]
  ));

  function render() {
    const host = document.getElementById('now-list');
    if (!host || typeof NOW === 'undefined') return;
    host.innerHTML = NOW.cells.map(c => `
      <div class="now-cell">
        <h4><span class="lang-en">${esc(c.h)}</span><span class="lang-ar">${esc(c.hAr)}</span></h4>
        <p><span class="lang-en">${esc(c.body)}</span><span class="lang-ar">${esc(c.bodyAr)}</span></p>
      </div>`).join('');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
