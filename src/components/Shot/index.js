import React, { useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const DIR = '/screenshots/macos/en';

/* A screenshot shown small, enlarged on click.
 *
 *   <Shot name="06_settings_devices" alt="Settings → Devices" />
 *
 * `name` is a file in static/screenshots/macos/en/. The small picture is the
 * cropped preview in thumbs/ (the right-hand side of the window, where the
 * settings are); `full` uses the whole window instead, for pages about the
 * phone on the left. Click opens the full-size screenshot over the page.
 * `src` shows any other picture, such as one on ai-softphone.com. */
export default function Shot({ name, src, alt, full = false, children }) {
  const small = useBaseUrl(name ? `${DIR}/thumbs/${name}${full ? '-full' : ''}.jpg` : src);
  const large = useBaseUrl(name ? `${DIR}/${name}.png` : src);
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);

  useEffect(() => {
    if (open && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [open]);

  return (
    <figure className={styles.shot}>
      <button
        type="button"
        className={styles.thumb}
        onClick={() => setOpen(true)}
        aria-label={`Enlarge the screenshot: ${alt}`}
      >
        <img src={small} alt={alt} loading="lazy" />
        <span className={styles.badge} aria-hidden="true">Enlarge</span>
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
          <button type="button" className={styles.close} aria-label="Close">×</button>
        </dialog>
      ) : null}
    </figure>
  );
}
