/* ============================================================
   ctf-found.js — report a solved stage.
   Pages other than the home page do not load ctf.js, so the result is
   written straight to localStorage here and replayed on the home page.
   ============================================================ */
(() => {
  'use strict';

  const KEY = 'ctf.stages';

  const read = () => {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (_) { return []; }
  };

  const write = (list) => {
    try { localStorage.setItem(KEY, JSON.stringify([...new Set(list)].sort())); } catch (_) {}
  };

  window.ctfStages = read;

  window.ctfFound = (stage) => {
    const list = read();
    if (!list.includes(stage)) {
      list.push(stage);
      write(list);
    }
    window.__ctfFound = read();
    window.dispatchEvent(new CustomEvent('ctf:found', { detail: stage }));
  };
})();