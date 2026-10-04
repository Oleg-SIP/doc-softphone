import React, { useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

/* The languages the screenshots have been taken in. A page in any other
   language shows the English ones. */
const SHOT_LOCALES = ['en', 'cs', 'de'];

/* A screenshot shown small, enlarged on click.
 *
 *   <Shot name="06_settings_devices" alt="Settings → Devices" />
 *
 * `name` is a file in static/screenshots/macos/<locale>/, taken in the
 * language of the page. The small picture is the cropped preview in
 * thumbs/ (the right-hand side of the window, where the settings are);
 * `full` uses the whole window instead, for pages about the phone on the
 * left. Click opens the full-size screenshot over the page.
 * `src` shows any other picture, such as one on ai-softphone.com. */
export default function Shot({ name, src, alt, full = false, children }) {
  const { i18n } = useDocusaurusContext();
  const locale = SHOT_LOCALES.includes(i18n.currentLocale) ? i18n.currentLocale : 'en';
  const dir = `/screenshots/macos/${locale}`;
  const small = useBaseUrl(name ? `${dir}/thumbs/${name}${full ? '-full' : ''}.jpg` : src);
  const large = useBaseUrl(name ? `${dir}/${name}.png` : src);
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);

  useEffect(() => {
    if (open && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [open]);

  const enlarge = translate({ id: 'shot.enlarge', message: 'Enlarge' });
  const enlargeLabel = translate(
    { id: 'shot.enlargeLabel', message: 'Enlarge the screenshot: {alt}' },
    { alt },
  );
  const close = translate({ id: 'shot.close', message: 'Close' });

  return (
    <figure className={styles.shot}>
      <button
        type="button"
        className={styles.thumb}
        onClick={() => setOpen(true)}
        aria-label={enlargeLabel}
      >
        <img src={small} alt={alt} loading="lazy" />
        <span className={styles.badge} aria-hidden="true">{enlarge}</span>
      </button>
      {children ? <figcaption>{children}</figcaption> : null}
      {open ? (
        <dialog
          ref={dialog}
          className={styles.dialog}
          onClose={() => setOpen(false)}
          onClick={() => setOpen(false)}
        >
          <img src={large} alt={alt} />
          <button type="button" className={styles.close} aria-label={close}>×</button>
        </dialog>
      ) : null}
    </figure>
  );
}
