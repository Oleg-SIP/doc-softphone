/* The Metrika counter in the head (docusaurus.config.ru.js) counts the page
   the visitor arrives on. The site is a single-page application after that,
   so every later page is reported here, once its title is in place, with
   the page it was reached from as the referrer. */
const YM_ID = 113807738;

export function onRouteDidUpdate({ location, previousLocation }) {
  if (!previousLocation || typeof window.ym !== 'function') return;
  if (location.pathname === previousLocation.pathname) return;
  const { origin } = window.location;
  const referer = origin + previousLocation.pathname + previousLocation.search + previousLocation.hash;
  // the new title is written a moment after the route changes
  const title = document.title;
  let tries = 0;
  const send = () => {
    if (document.title === title && tries++ < 10) { setTimeout(send, 50); return; }
    window.ym(YM_ID, 'hit', window.location.href, { title: document.title, referer });
  };
  setTimeout(send);
}
