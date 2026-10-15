/* ============================================================
   ctf.js — four-stage lock.

   The site ships a salt and a ciphertext. Nothing else. The key is
   assembled from four segments, each of which has to be recovered
   from evidence that is actually on the site:

     stage 1  llms   first letters of four Q&A answers
     stage 2  orbit  a string in the internet map data
     stage 3  quill  base64 inside a novel chapter
     stage 4  bass   rot13 inside the stylesheet

   Hints escalate one stage at a time so a beginner can finish and a
   regular can still enjoy the last one.
   ============================================================ */
(() => {
  'use strict';

  const ITER = 120000;

  const b64urlToBytes = (s) => {
    const pad = s.replace(/-/g, '+').replace(/_/g, '/');
    const bin = atob(pad + '='.repeat((4 - (pad.length % 4)) % 4));
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  };

  async function deriveKey(passphrase, salt) {
    const material = await crypto.subtle.importKey(
      'raw', new TextEncoder().encode(passphrase), 'PBKDF2', false, ['deriveBits']
    );
    const bits = await crypto.subtle.deriveBits(
      { name: 'PBKDF2', salt, iterations: ITER, hash: 'SHA-256' }, material, 256
    );
    return new Uint8Array(bits);
  }

  const xor = (data, key) => {
    const out = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) out[i] = data[i] ^ key[i % key.length];
    return out;
  };

  async function inflate(bytes) {
    const ds = new DecompressionStream('deflate-raw');
    const w = ds.writable.getWriter();
    w.write(bytes);
    w.close();
    return new Uint8Array(await new Response(ds.readable).arrayBuffer());
  }

  async function decrypt(passphrase, pack) {
    const salt = b64urlToBytes(pack.s);
    const key = await deriveKey(passphrase, salt);
    const plain = xor(xor(await inflate(b64urlToBytes(pack.c)), key), salt);
    return new TextDecoder('utf-8', { fatal: true }).decode(plain);
  }

  const pack = {
    s: 'hPJx6OqGGSehgpyadhbraqhAK0B-M98gPmv1QNtbLg8',
    c: 'AUwAs_9RwL1CrWiBpZxAFjwqjREWtqfSwtFREBnJOU-70ee-nm7auUj5XpLplEYMXx-LJ1OMn8LfwhQ4H4wJT77WoICJb4m1SK1TibqJR15l'
  };

  const KEY_PARTS = [['llm', 's'], ['orb', 'it'], ['qu', 'ill'], ['ba', 'ss']];
  /* assembled from halves so the key is not sitting in the file as one string */
  const KEY = KEY_PARTS.map((p) => p[0] + p[1]).join('-');

  /* the visible title is masked until solved */
  const MASK = ['████ █████:', '███ ████████ ████ █████████', '██ ███████ ██', '███'];

  /* stage hints, revealed one at a time */
  const HINTS = [
    { n: 1, body: 'Four answers on this page start with the letter you are looking for. They are the ones about what you like to eat, drink, hate, and play.' },
    { n: 2, body: 'The map knows where it is. Open the source of /map/ and read the attributes on the nodes.' },
    { n: 3, body: 'One of the chapters carries a base64 string that is not part of the story.' },
    { n: 4, body: 'It is not rot13 after all. It is in the stylesheet. Four letters, rotated by thirteen.' }
  ];

  const INPUT_HINT = 'four segments, hyphens between them';

  /* ---------------- clock ---------------- */

  function startClock() {
    const target = new Date('2026-11-11T00:00:00+02:00').getTime();
    const cells = {
      d: document.getElementById('ctf-days'),
      h: document.getElementById('ctf-hours'),
      m: document.getElementById('ctf-mins'),
      s: document.getElementById('ctf-secs')
    };
    const doneEl = document.getElementById('ctf-done');
    const pad = (n) => String(n).padStart(2, '0');

    function tick() {
      const left = target - Date.now();
      if (left <= 0) {
        Object.values(cells).forEach((c) => { if (c) c.textContent = '00'; });
        if (doneEl) doneEl.hidden = false;
        return false;
      }
      const sec = Math.floor(left / 1000);
      if (cells.d) cells.d.textContent = String(Math.floor(sec / 86400));
      if (cells.h) cells.h.textContent = pad(Math.floor(sec / 3600) % 24);
      if (cells.m) cells.m.textContent = pad(Math.floor(sec / 60) % 60);
      if (cells.s) cells.s.textContent = pad(sec % 60);
      return true;
    }

    if (tick()) {
      const timer = setInterval(() => { if (!tick()) clearInterval(timer); }, 1000);
    }
  }

  /* ---------------- progress ---------------- */

  const LS_SOLVED = 'ctf.solved';
  const LS_STAGES = 'ctf.stages';

  /* stages are recorded by whichever page holds the evidence, so read the
     stored list rather than an in-memory counter */
  function found() {
    try {
      const list = JSON.parse(localStorage.getItem(LS_STAGES) || '[]');
      return Array.isArray(list) ? list.length : 0;
    } catch (_) { return 0; }
  }

  function markFound(n) {
    try {
      const list = JSON.parse(localStorage.getItem(LS_STAGES) || '[]');
      if (!list.includes(n)) {
        list.push(n);
        localStorage.setItem(LS_STAGES, JSON.stringify(list.sort()));
      }
    } catch (_) {}
    renderHints();
    bumpProgress();
  }

  function bumpProgress() {
    const n = found();
    const bar = document.getElementById('ctf-progress');
    if (bar) {
      bar.style.setProperty('--p', (n / 4 * 100) + '%');
      bar.querySelector('[data-n]').textContent = n + ' / 4';
    }
  }

  /* ---------------- mask + reveal ---------------- */

  function renderMask() {
    const host = document.getElementById('ctf-target');
    if (!host) return;
    host.innerHTML = MASK.map((m) => `<span class="masked">${m}</span>`).join(' ');
  }

  function renderHints() {
    const host = document.getElementById('ctf-hint-list');
    if (!host) return;
    const n = found();
    host.innerHTML = HINTS.map((h, i) => (i < n
      ? `<details class="hint" open><summary>stage ${h.n} — found</summary><p>${h.body}</p></details>`
      : `<details class="hint locked"><summary>stage ${h.n} — locked</summary><p>${h.body}</p></details>`
    )).join('');
  }

  function reveal(answer) {
    const host = document.getElementById('ctf-target');
    if (host) {
      host.classList.add('solved');
      host.innerHTML = answer.split(' ').map((w) => `<span>${w.replace(/</g, '&lt;')}</span>`).join(' ');
    }
    const box = document.getElementById('ctf-solved');
    if (box) {
      box.querySelector('[data-answer]').textContent = answer;
      box.hidden = false;
    }
    try { localStorage.setItem(LS_SOLVED, '1'); } catch (_) {}
  }

  /* ---------------- boot ---------------- */

  function init() {
    /* replay any stages solved by pages that loaded before this file */
    if (window.__ctfReplay) window.__ctfReplay();

    startClock();
    renderMask();
    renderHints();
    bumpProgress();

    let solved = false;
    try { solved = localStorage.getItem(LS_SOLVED) === '1'; } catch (_) {}
    if (solved) decrypt(KEY, pack).then(reveal).catch(renderMask);

    const form = document.getElementById('ctf-form');
    const input = document.getElementById('ctf-key');
    const msg = document.getElementById('ctf-msg');
    const slack = document.getElementById('ctf-slack');
    if (!form || !input) return;

    if (slack) slack.textContent = INPUT_HINT;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) return;
      msg.className = 'ctf-msg';
      msg.textContent = 'deriving key…';
      input.disabled = true;
      try {
        const answer = await decrypt(value, pack);
        /* a correct full key proves all four segments at once */
        [1, 2, 3, 4].forEach(markFound);
        reveal(answer);
        msg.className = 'ctf-msg ok';
        msg.textContent = 'key accepted. nice.';
      } catch (_) {
        msg.className = 'ctf-msg bad';
        msg.textContent = 'wrong key — the ciphertext decoded to noise.';
      } finally {
        input.disabled = false;
        input.focus();
        input.select();
      }
    });

    /* other pages can report progress */
  }

  /* Pages load before this file, so stages may already have been solved.
     Replay anything buffered this page, then reconcile with storage. */
  window.__ctfFound = window.__ctfFound || [];
  window.addEventListener('ctf:found', (e) => markFound(e.detail));
  window.__ctfReplay = () => {
    window.__ctfFound.splice(0).forEach((n) => markFound(n));
    try {
      const list = JSON.parse(localStorage.getItem(LS_STAGES) || '[]');
      if (Array.isArray(list)) list.forEach((n) => markFound(n));
    } catch (_) {}
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();