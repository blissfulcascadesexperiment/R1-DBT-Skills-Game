/* =========================================================================
   WISE MIND: A DBT ADVENTURE
   Bootstrap with on-screen error reporting
   ========================================================================= */

(function init() {
  window.addEventListener('DOMContentLoaded', () => {
    try {
      UI.init();
    } catch (err) {
      const app = document.getElementById('app');
      if (app) {
        app.innerHTML = `<div class="panel" style="margin:60px auto;max-width:520px;text-align:center">
          <h2>😵 Something went wrong</h2>
          <p class="muted">An error stopped the game from starting:</p>
          <p style="background:#fdecec;border-radius:12px;padding:12px;margin:12px 0;font-family:monospace;font-size:.85rem;word-break:break-all">${esc(err && err.message ? err.message : String(err))}</p>
          <button class="btn" onclick="localStorage.removeItem('wisemind_save_v1'); location.reload()">Clear save &amp; reload</button>
        </div>`;
      }
    }
  });
})();
