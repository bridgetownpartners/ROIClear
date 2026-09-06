/* ROIClear sticky header
   The header itself is CSS position: sticky.
   Hamburger toggle lives inline in index.html.
   This file used to contain an old HTML snapshot. Keep it valid JS.
*/

window.addEventListener('orientationchange', function () {
  requestAnimationFrame(function () {
    window.scrollBy(0, 1);
    window.scrollBy(0, -1);
  });
});