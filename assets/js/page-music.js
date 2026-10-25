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
        <audio controls preload="metadata"
               src="https://drive.google.com/uc?export=download&id=${esc(m.driveId)}"></audio>
        <a href="https://drive.google.com/file/d/${esc(m.driveId)}/view" target="_blank" rel="noopener noreferrer"
           style="font-size:.72rem;letter-spacing:.12em;text-transform:uppercase">
          <span class="lang-en">open in Drive</span><span class="lang-ar">افتح في Drive</span>
        </a>
      </div>`).join('');

    /* if direct playback fails (browser/DRM quirks), fall back to the Drive preview player */
    host.querySelectorAll('.music-item audio').forEach(a => {
      a.addEventListener('error', () => {
        const item = a.closest('.music-item');
        if (!item || item.querySelector('iframe')) return;
        const id = new URL(a.src).searchParams.get('id');
        if (!id) return;
        const f = document.createElement('iframe');
        f.src = 'https://drive.google.com/file/d/' + id + '/preview';
        f.width = '100%'; f.height = '80';
        f.setAttribute('frameborder', '0');
        f.setAttribute('allow', 'autoplay');
        f.loading = 'lazy';
        a.replaceWith(f);
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
