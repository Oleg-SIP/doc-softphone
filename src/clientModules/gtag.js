/* The tag in the head counts the page the visitor arrives on. The site is
   a single-page application after that, so every later page is reported
   here, once its title is in place. */
export function onRouteDidUpdate({ location, previousLocation }) {
  if (!previousLocation || typeof window.gtag !== 'function') return;
  if (location.pathname === previousLocation.pathname) return;
  setTimeout(() => {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname + location.search + location.hash,
    });
  });
}
