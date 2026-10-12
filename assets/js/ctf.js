/* ============================================================
   ctf.js — the countdown lock
   Nothing readable about the title exists in this file. The
   site ships a salt and a ciphertext; the key comes from the
   person solving it. Decrypt runs entirely in the browser.
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

  const bytesToB64url = (bytes) => {
    let bin = '';
    for (const b of bytes) bin += String.fromCharCode(b);
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
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
    s: 'yg-sREh3b2OtPCHJtV6akC3IIBBuLkjVgEEzSsCLw48',
    c: 'AUwAs__NwSnGR-fhLQvVT-XL6jvU77iLc1A_BBZVEy3GdeiQWfLbLcwT0fJhA9NVhv7sDZHVgJtuQ3osEBAjLcNyr65O84ghzEfc6TIe0ge8'
  };

  /* ---------- the visible title, until solved ---------- */
  const SCRAMBLE = [
    ['Ziad', 'Ziad'],
    ['Salah:', 'Salah:'],
    ['The', 'The'],
    ['Youngest', 'Youngest'],
    ['main', 'main'],
    ['Presenter', 'Presenter'],
    ['in', 'in'],
    ['CanSecWest', 'CanSecWest'],
    ['[re]aligned', '[re]aligned'],
    ['in', 'in'],
    ['history', 'history']
  ];

  function renderScramble() {
    const host = document.getElementById('ctf-target');
    if (!host) return;
    const parts = SCRAMBLE.map(([plain]) => {
      const shown = plain.replace(/[A-Za-z]/g, () => '█');
      return `<span class="scramble">${shown}</span>`;
    });
    host.innerHTML = parts.join('<span class="sep"> </span>');
  }

  function reveal(answer) {
    const host = document.getElementById('ctf-target');
    if (!host) return;
    host.innerHTML = answer
      .split(' ')
      .map(w => `<span class="reveal">${w.replace(/</g, '&lt;')}</span>`)
      .join(' ');
    const box = document.getElementById('ctf-solved');
    if (box) {
      box.querySelector('[data-answer]').textContent = answer;
      box.hidden = false;
    }
    try { localStorage.setItem('ctf-solved', '1'); } catch (_) {}
  }

  function init() {
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
        Object.values(cells).forEach(c => { if (c) c.textContent = '00'; });
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

    renderScramble();

    let solved = null;
    try { solved = localStorage.getItem('ctf-solved') === '1'; } catch (_) {}

    if (solved) {
      decrypt('giza-2008-cansecwest', pack)
        .then(reveal)
        .catch(() => renderScramble());
    }

    const form = document.getElementById('ctf-form');
    const input = document.getElementById('ctf-key');
    const msg = document.getElementById('ctf-msg');
    if (!form || !input) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) return;
      msg.className = 'ctf-msg';
      msg.textContent = 'deriving key…';
      input.disabled = true;
      try {
        const answer = await decrypt(value, pack);
        reveal(answer);
        msg.className = 'ctf-msg ok';
        msg.textContent = 'key accepted. nice.';
      } catch (_) {
        msg.className = 'ctf-msg bad';
        msg.textContent = 'wrong key. the ciphertext decoded to noise.';
      } finally {
        input.disabled = false;
        input.focus();
        input.select();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* keep the ciphertext out of casual inspection of globals */
  window.__ctf = Object.freeze({ decrypt, pack: Object.freeze({ ...pack }) });
})();
