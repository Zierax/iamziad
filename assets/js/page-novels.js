/* page-novels.js — tabs, chapters, per-chapter AR/EN switch. */
(() => {
  'use strict';

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, m => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]
  ));

  const fmt = (raw) => esc(raw)
    .replace(/\n+---\n+/g, '\u0001')
    .split('\n')
    .map(line => {
      /* latin-only lines (the English epigraphs) keep their own direction */
      const t = line.trim();
      return (t && t !== '\u0001' && /^[«»'(),.:;!?A-Za-z0-9 \-—]+$/.test(t))
        ? `<bdi>${line}</bdi>` : line;
    })
    .join('\n')
    .replace(/\u0001/g, '<hr>')
    .replace(/\n/g, '<br>');

/* paths in the data are already repo-relative, e.g. "assets/x.png" */
  const mediaSrc = (raw) => '/' + String(raw).replace(/^\/+/, '');

  /* chapters open in whatever language the visitor picked site-wide */
  const siteLang = (() => {
    try { return localStorage.getItem('iam.lang') === 'ar' ? 'ar' : 'en'; }
    catch (_) {
      return document.documentElement.getAttribute('data-lang') === 'ar' ? 'ar' : 'en';
    }
  })();

  function chapterHtml(novelId, ch, i) {
    const cap = `<figcaption><span class="lang-en">${esc(ch.title)}</span><span class="lang-ar">${esc(ch.titleAr)}</span></figcaption>`;
    const media = ch.video
      ? `<div class="chapter-media"><figure class="chapter-fig"><video controls preload="metadata" playsinline><source src="${esc(mediaSrc(ch.video))}" type="video/mp4"></video>${cap}</figure></div>`
      : ch.image
        ? `<div class="chapter-media"><figure class="chapter-fig"><img src="${esc(mediaSrc(ch.image))}" alt="${esc(ch.title)}" loading="lazy">${cap}</figure></div>`
        : '';

    const music = ch.music
      ? `<div class="chapter-media">
           <div class="music-card">
             <div class="music-head">
               <span class="music-glyph" aria-hidden="true">♪</span>
               <div class="music-names">
                 <span class="lang-ar">${esc(ch.music.name)}</span>
                 <span class="lang-en">${esc(ch.music.nameEn)}</span>
               </div>
             </div>
             <audio controls preload="metadata" src="https://drive.google.com/uc?export=download&id=${esc(ch.music.driveId)}"></audio>
             <a class="music-open" href="https://drive.google.com/file/d/${esc(ch.music.driveId)}/view" target="_blank" rel="noopener">
               <span class="lang-en">open on Drive</span><span class="lang-ar">افتح على درايف</span> ↗
             </a>
           </div>
         </div>`
      : '';

    return `
      <article class="chapter" id="${novelId}-ch${i}">
        <div class="chapter-head">
          <div>
            <span class="chapter-num"><span class="lang-en">chapter ${ch.num}</span><span class="lang-ar">الفصل ${ch.num}</span></span>
            <h4>${esc(ch.title)}</h4>
          </div>
          <div class="lang-pair" role="group" aria-label="chapter language">
            <button data-lang="ar"${siteLang === 'ar' ? ' class="on"' : ''}>AR</button>
            <button data-lang="en"${siteLang === 'en' ? ' class="on"' : ''}>EN</button>
          </div>
        </div>
        ${media}
        ${music}
        <div class="chapter-text" data-lang="ar" dir="rtl"${siteLang === 'ar' ? '' : ' hidden'}>${fmt(ch.ar)}</div>
        <div class="chapter-text" data-lang="en"${siteLang === 'en' ? '' : ' hidden'}>${fmt(ch.en)}</div>
      </article>`;
  }

  function render() {
    const tabs = document.getElementById('novel-tabs');
    const panels = document.getElementById('novel-panels');
    if (!tabs || !panels) return;
    if (typeof NOVEL_INDEX === 'undefined' || typeof NOVEL_TEXT === 'undefined') return;

    /* stage 3 of the lock: something in the prose is not prose.
       Buffer does not exist in the page, so decode base64url by hand. */
    (() => {
      const fromB64url = (x) => {
        try {
          const s = x.replace(/-/g, '+').replace(/_/g, '/');
          return decodeURIComponent(escape(atob(s + '='.repeat((4 - s.length % 4) % 4))));
        } catch (_) { return ''; }
      };
      for (const id of Object.keys(NOVEL_TEXT)) {
        for (const ch of NOVEL_TEXT[id].chapters) {
          const m = String(ch.en || '').match(/\[([A-Za-z0-9_-]{4,})\]/);
          if (m && fromB64url(m[1]) === 'quill' && window.ctfFound) { window.ctfFound(3); return; }
        }
      }
    })();

    tabs.innerHTML = NOVEL_INDEX.map((n, i) => `
      <button class="tab-btn${i === 0 ? ' active' : ''}" data-tab="${n.id}">
        <span class="lang-en">${esc(n.title)}</span><span class="lang-ar">${esc(n.titleAr)}</span>
      </button>`).join('');

    panels.innerHTML = NOVEL_INDEX.map((n, i) => {
      const text = NOVEL_TEXT[n.id];
      const chapters = text ? text.chapters : [];
      return `
        <div class="tab-panel${i === 0 ? ' active' : ''}" id="tab-${n.id}">
          <div class="card" style="margin-bottom:1.4rem">
            <h3 style="font-size:1.3rem">${esc(n.title)}</h3>
            <p class="kicker" style="font-size:.74rem;letter-spacing:.12em;text-transform:uppercase;color:var(--neon);margin:0 0 .9rem">
              <span class="lang-en">${esc(n.subtitleEn)}</span><span class="lang-ar">${esc(n.subtitleAr)}</span>
            </p>
            <p><span class="lang-en">${esc(n.blurbEn)}</span><span class="lang-ar">${esc(n.blurbAr)}</span></p>
            <p class="note">
              <span class="lang-en">${esc(n.noteEn)}</span><span class="lang-ar">${esc(n.noteAr)}</span>
            </p>
            <div class="chip-row">
              <span class="tag cool">${chapters.length} <span class="lang-en">chapters</span><span class="lang-ar">فصل</span></span>
              <span class="tag">${n.id === 'holy-theft' ? '<span class="lang-en">read first</span><span class="lang-ar">اتقرأ الأول</span>' : '<span class="lang-en">read second</span><span class="lang-ar">اتقرأ بعد الأول</span>'}</span>
            </div>
          </div>
          ${chapters.map((c, ci) => chapterHtml(n.id, c, ci)).join('')}
        </div>`;
    }).join('');

    tabs.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        panels.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = document.getElementById('tab-' + btn.dataset.tab);
        if (panel) panel.classList.add('active');
      });
    });

    panels.querySelectorAll('.chapter').forEach(chapter => {
      const btns = chapter.querySelectorAll('.lang-pair button');
      const texts = chapter.querySelectorAll('.chapter-text');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          btns.forEach(b => b.classList.remove('on'));
          btn.classList.add('on');
          texts.forEach(t => { t.hidden = t.dataset.lang !== btn.dataset.lang; });
        });
      });
    });

    /* if Drive refuses direct playback, fall back to the embedded player */
    panels.querySelectorAll('.music-card audio').forEach(a => {
      a.addEventListener('error', () => {
        const card = a.closest('.music-card');
        if (!card || card.querySelector('iframe')) return;
        const id = new URL(a.src).searchParams.get('id');
        const iframe = document.createElement('iframe');
        iframe.src = 'https://drive.google.com/file/d/' + id + '/preview';
        iframe.width = '100%'; iframe.height = '80'; iframe.loading = 'lazy';
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'autoplay');
        a.replaceWith(iframe);
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
