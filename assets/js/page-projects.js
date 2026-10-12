/* page-projects.js — renders the project cards. */
(() => {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, m => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]
  ));

  function render() {
    const host = document.getElementById('proj-list');
    if (!host || typeof PROJECTS === 'undefined') return;
    host.innerHTML = PROJECTS.map(p => `
      <article class="proj" id="${p.id}">
        <div class="proj-top">
          <span>${esc(p.id)}</span>
          <span>${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join(' ')}</span>
        </div>
        <div class="proj-body">
          <h3>${esc(p.name)}</h3>
          <p class="kicker"><span class="lang-en">${esc(p.kicker)}</span><span class="lang-ar">${esc(p.kickerAr)}</span></p>

          <p><span class="lang-en">${esc(p.blurb)}</span><span class="lang-ar">${esc(p.blurbAr)}</span></p>

          <div class="stat-row" style="margin-top:1.2rem">
            ${p.facts.map(f => `<div class="stat"><b>${esc(f.v)}</b><span>${esc(f.l)}</span></div>`).join('')}
          </div>

          <p class="note"><span class="lang-en">${esc(p.note)}</span><span class="lang-ar">${esc(p.noteAr)}</span></p>

          <div class="chip-row">
            ${p.live ? `<a class="btn primary" href="${esc(p.live)}" target="_blank" rel="noopener noreferrer"><span class="lang-en">open it</span><span class="lang-ar">افتحه</span></a>` : ''}
            ${p.source ? `<a class="btn" href="${esc(p.source)}" target="_blank" rel="noopener noreferrer">source</a>` : ''}
          </div>
        </div>
      </article>`).join('');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
