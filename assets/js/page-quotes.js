/* page-quotes.js */
(() => {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, m => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]
  ));

  function render() {
    const host = document.getElementById('quotes-body');
    if (!host || typeof QUOTES === 'undefined') return;
    host.innerHTML = QUOTES.map(g => `
      <div class="quote-group">
        <h3><span class="lang-en">${esc(g.g)}</span><span class="lang-ar">${esc(g.gAr)}</span></h3>
        ${g.items.map(q => `
          <blockquote>
            <span class="lang-en">"${esc(q.t)}"<span class="quote-author">— ${esc(q.a)}</span></span>
            <span class="lang-ar">"${esc(q.tAr)}"<span class="quote-author">— ${esc(q.aAr || q.a)}</span></span>
          </blockquote>`).join('')}
      </div>`).join('');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
