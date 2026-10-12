/* page-music.js */
(() => {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, m => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]
  ));

  function render() {
    const host = document.getElementById('music-body');
    if (!host || typeof MUSIC === 'undefined') return;
    host.innerHTML = MUSIC.map(m => `
      <div class="music-item">
        <div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;align-items:baseline">
          <h4>${esc(m.name)}</h4>
          <span class="tag">ch ${m.chapter}</span>
        </div>
        <div class="sub">${esc(m.nameEn)}</div>
        <iframe src="https://drive.google.com/file/d/${esc(m.driveId)}/preview"
                width="100%" height="80" frameborder="0" allow="autoplay" loading="lazy"></iframe>
        <a href="https://drive.google.com/file/d/${esc(m.driveId)}/view" target="_blank" rel="noopener noreferrer"
           style="font-size:.72rem;letter-spacing:.12em;text-transform:uppercase">
          <span class="lang-en">open in Drive</span><span class="lang-ar">افتح في Drive</span>
        </a>
      </div>`).join('');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
