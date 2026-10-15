/* ============================================================
   app.js — shared behaviour for every page.
   Language switch, theme, nav state, toast, and the
   Internet Map constellation renderer.
   ============================================================ */
(() => {
  'use strict';

  const LS_LANG = 'iam.lang';
  const LS_THEME = 'iam.theme';

  /* ---------------- language ---------------- */

  function currentLang() {
    return document.documentElement.getAttribute('data-lang') || 'en';
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    try { localStorage.setItem(LS_LANG, lang); } catch (_) {}
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.setAttribute('aria-pressed', String(b.dataset.langBtn === lang));
    });
    const label = document.querySelector('[data-lang-label]');
    if (label) label.textContent = lang === 'ar' ? 'AR' : 'EN';
  }

  /* ---------------- theme ---------------- */

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(LS_THEME, theme); } catch (_) {}
    const btn = document.querySelector('[data-theme-btn]');
    if (btn) {
      btn.textContent = theme === 'light' ? 'DARK' : 'LIGHT';
      btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    }
  }

  /* ---------------- toast ---------------- */

  let toastTimer;
  function toast(msg) {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = msg;
    requestAnimationFrame(() => el.classList.add('show'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  /* ---------------- boot ---------------- */

  function boot() {
    /* pre-paint theme so there is no flash */
    /* the default look is the stickerbook day; night arcade is opt-in */
    let theme = 'light';
    try { theme = localStorage.getItem(LS_THEME) || 'light'; } catch (_) {}
    applyTheme(theme);

    let lang = 'en';
    const qs = new URLSearchParams(location.search).get('lang');
    if (qs === 'ar' || qs === 'en') lang = qs;
    else {
      try { lang = localStorage.getItem(LS_LANG) || 'en'; } catch (_) {}
    }
    applyLang(lang);

    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = btn.dataset.langBtn;
        applyLang(next);
        if (MAP_STATE.rerender) MAP_STATE.rerender();
        const u = new URL(location.href);
        u.searchParams.set('lang', next);
        history.replaceState({}, '', u);
      });
    });

    const themeBtn = document.querySelector('[data-theme-btn]');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        applyTheme(currentTheme() === 'light' ? 'dark' : 'light');
      });
    }

    const mark = document.body.getAttribute('data-page');
    if (mark) {
      document.querySelectorAll('.chrome-nav a').forEach(a => {
        if (a.getAttribute('href') === mark || a.dataset.page === mark) {
          a.setAttribute('aria-current', 'page');
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
        const q = document.querySelector('[data-quickfind]');
        if (q) { e.preventDefault(); q.focus(); }
      }
    });
  }

  const currentTheme = () => document.documentElement.getAttribute('data-theme') || 'dark';

  /* ============================================================
     Internet Map — a small force-directed constellation.
     Nodes are the accounts; edges are proximity clusters.
     ============================================================ */

  const MAP_STATE = { rerender: null };

  function initMap() {
    const canvas = document.getElementById('map-canvas');
    const list = document.getElementById('map-list');
    if (!canvas || !typeof MAP_NODES === 'undefined') return;

    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, raf = null, t0 = performance.now();

    const nodes = MAP_NODES.map(n => ({
      ...n,
      px: n.x, py: n.y,
      vx: 0, vy: 0,
      r: 4 + Math.sqrt(n.weight) * 2.4,
      seed: Math.random() * Math.PI * 2
    }));

    /* cluster anchors keep the layout stable and readable */
    const ANCHORS = {
      me:    { x: 0.56, y: 0.60 },
      code:  { x: 0.36, y: 0.30 },
      sec:   { x: 0.76, y: 0.32 },
      pro:   { x: 0.72, y: 0.84 },
      social:{ x: 0.18, y: 0.42 }
    };

    const css = getComputedStyle(document.documentElement);
    const color = (name, fallback) => (css.getPropertyValue(name) || fallback).trim();

    function resize() {
      const r = canvas.parentElement.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function step(dt) {
      for (const n of nodes) {
        const a = ANCHORS[n.kind] || { x: 0.5, y: 0.5 };
        /* spring toward the anchor */
        n.vx += ((a.x - n.x) * 1.15 - n.vx * 1.9) * dt;
        n.vy += ((a.y - n.y) * 1.15 - n.vy * 1.9) * dt;

        /* gentle repulsion so labels do not collide */
        for (const m of nodes) {
          if (m === n) continue;
          const dx = n.x - m.x, dy = n.y - m.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > 0 && d2 < 0.035) {
            const f = (0.035 - d2) * 5.5;
            const d = Math.sqrt(d2);
            n.vx += (dx / d) * f * dt;
            n.vy += (dy / d) * f * dt;
          }
        }
        n.px = n.x; n.py = n.y;
        n.x += n.vx * dt * 6;
        n.y += n.vy * dt * 6;
        n.x = Math.min(0.94, Math.max(0.06, n.x));
        n.y = Math.min(0.92, Math.max(0.10, n.y));
      }
    }

    let last = performance.now();
    function frame(now) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      step(dt * 6);
      draw(now);
      raf = requestAnimationFrame(frame);
    }

    function draw(now) {
      const elapsed = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);

      const line = color('--line', '#232833');
      const fg = color('--fg', '#e9edf2');
      const dim = color('--fg-faint', '#5d6773');

      /* links: every node to its cluster anchor + to the "me" node */
      const me = nodes.find(n => n.kind === 'me');
      ctx.lineWidth = 1;
      ctx.strokeStyle = line;
      for (const n of nodes) {
        if (me && n !== me) {
          const dx = (me.x - n.x) * W, dy = (me.y - n.y) * H;
          const d = Math.hypot(dx, dy);
          if (d < Math.min(W, H) * 0.62) {
            ctx.globalAlpha = Math.max(0.08, 0.34 - d / (Math.min(W, H) * 2.1));
            ctx.beginPath();
            ctx.moveTo(n.x * W, n.y * H);
            ctx.lineTo(me.x * W, me.y * H);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      const small = W < 620;

      for (const n of nodes) {
        const x = n.x * W, y = n.y * H;
        /* MAP_KINDS now stores the token name, which getPropertyValue can read */
        const c = color((MAP_KINDS[n.kind] || {}).color, '#4de3ff');
        const pulse = 1 + Math.sin(elapsed * 1.5 + n.seed) * 0.09;

        /* halo */
        ctx.beginPath();
        ctx.arc(x, y, n.r * 3.1 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = c;
        ctx.globalAlpha = 0.09;
        ctx.fill();

        /* core */
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(x, y, n.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = c;
        ctx.fill();

        /* ring */
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = c;
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.arc(x, y, n.r * 1.9 * pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;

        if (!small || n.kind === 'me' || n.weight >= 6) {
          ctx.font = '600 10px ui-monospace, monospace';
          ctx.fillStyle = n.kind === 'me' ? c : fg;
          ctx.textAlign = n.x > 0.72 ? 'right' : 'left';
          const px = n.x > 0.72 ? -n.r * 2.6 : n.r * 2.6;
          ctx.fillText(n.label.toUpperCase(), x + px, y + 3.5);
        }
      }
      ctx.globalAlpha = 1;
      void dim;
    }

    function hover() {
      if (!canvas) return;
      const hit = (mx, my) => nodes.find(n => Math.hypot((n.x * W) - mx, (n.y * H) - my) < n.r * 3.4);

      const move = (e) => {
        const r = canvas.getBoundingClientRect();
        const p = e.touches ? e.touches[0] : e;
        const n = hit(p.clientX - r.left, p.clientY - r.top);
        canvas.style.cursor = n ? 'pointer' : 'default';
        canvas.title = n ? `${n.label} — ${n.handle}` : '';
      };
      canvas.addEventListener('mousemove', move);
      canvas.addEventListener('touchstart', move, { passive: true });

      const jump = (e) => {
        const r = canvas.getBoundingClientRect();
        const p = e.changedTouches ? e.changedTouches[0] : e;
        const n = hit(p.clientX - r.left, p.clientY - r.top);
        if (n && n.url) window.open(n.url, '_blank', 'noopener,noreferrer');
      };
      canvas.addEventListener('click', jump);
    }

    resize();
    hover();
    if (window.ResizeObserver) new ResizeObserver(() => { resize(); }).observe(canvas.parentElement);
    else window.addEventListener('resize', resize);
    raf = requestAnimationFrame(frame);
    MAP_STATE.rerender = () => { t0 = performance.now(); };

    /* accessible list — the canvas is decorative, this is the real UI */
    if (list) {
      list.innerHTML = nodes.map(n => `
        <a class="node-row" href="${n.url}" target="_blank" rel="me noopener noreferrer">
          <span>
            <b><span class="lang-en">${n.label}</span><span class="lang-ar">${n.label}</span></b>
            <span class="handle">${n.handle}</span>
            ${n.note ? `<small><span class="lang-en">${n.note}</span><span class="lang-ar">${n.noteAr || n.note}</span></small>` : ''}
          </span>
          <span class="tag">${(MAP_KINDS[n.kind] || {}).label || n.kind}</span>
        </a>`).join('');
    }

    /* stage 2 of the lock: the segment was sitting in this file all along */
    if (typeof STAGE2_SEGMENT === 'string' && STAGE2_SEGMENT === 'orbit') {
      if (window.ctfFound) window.ctfFound(2);
    }
  }

  window.IAM = { toast, applyLang, applyTheme, currentLang, currentTheme };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { boot(); initMap(); });
  } else {
    boot(); initMap();
  }
})();
