/* Shared site script. Keeps the --header-h size up to date with the top bar's real height, so
   the top bar's shadow (drawn in style.css) always lines up with it, on every screen size. */
(function () {
  const header = document.querySelector("header");
  if (!header) return;
  const set = () => document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
  set();
  if ("ResizeObserver" in window) new ResizeObserver(set).observe(header);
  window.addEventListener("load", set);   // again once the fonts have loaded
})();
