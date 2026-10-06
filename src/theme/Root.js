import React, { useEffect, useState } from 'react';
import { translate } from '@docusaurus/Translate';

/* The cookie question of ai-softphone.com, asked on the documentation too:
   once, remembered in localStorage (asking for permission to set a cookie
   by setting one would be a poor joke), and brought back by the cookie
   link in the footer. Two buttons of the same size, because a refusal that
   is harder to press than an acceptance is not a question. The head has
   already denied everything and applied the last answer; this only asks
   and writes the answer down. */
function remembered() {
  try { return window.localStorage.getItem('analytics'); } catch (e) { return null; }
}

function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!remembered()) setOpen(true);
    const onClick = (e) => {
      const link = e.target.closest && e.target.closest('.consent-link');
      if (!link) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const answer = (what) => {
    try { window.localStorage.setItem('analytics', what); } catch (e) { /* private mode */ }
    // taking permission back has to take effect on this page, not the next
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: what });
    }
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className="consent" role="dialog" aria-live="polite" aria-labelledby="consent-text">
      <p className="consent-text" id="consent-text">
        {translate({
          id: 'consent.text',
          message: 'This page can count visits with Google Analytics — which pages are read, and roughly where from. That needs a cookie, so it waits for your answer.',
        })}
      </p>
      <div className="consent-buttons">
        <button type="button" className="consent-no" onClick={() => answer('denied')}>
          {translate({ id: 'consent.no', message: 'No thanks' })}
        </button>
        <button type="button" className="consent-yes" onClick={() => answer('granted')}>
          {translate({ id: 'consent.yes', message: 'Allow' })}
        </button>
      </div>
    </div>
  );
}

export default function Root({ children }) {
  return (
    <>
      {children}
      <ConsentBanner />
    </>
  );
}
