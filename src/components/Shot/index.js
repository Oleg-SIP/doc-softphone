import React, { useEffect, useRef, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

/* The screenshots live once, at the root of the site: Docusaurus copies
   static/ into the build of every language, so the build step
   (scripts/merge-sitemaps.mjs) keeps only the root copy and every language
   links there. Each language has its own set, taken in that language. */

/* A screenshot shown small, enlarged on click.
 *
 *   <Shot name="06_settings_devices" alt="Settings → Devices" />
 *
 * `name` is a file in static/screenshots/macos/<locale>/, taken in the
 * language of the page. The small picture is the cropped preview in
 * thumbs/ (the right-hand side of the window, where the settings are);
 * `full` uses the whole window instead, for pages about the phone on the
 * left. Click opens the full-size screenshot over the page.
 * `src` shows any other picture, such as one on ai-softphone.com; a picture
 * from the main site's English set is swapped for the same one in the
 * language of the page (the main site names Serbian Latin `sr_Latn`). */
export default function Shot({ name, src, alt, full = false, children }) {
  const { siteConfig, i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  // the site's own base, without the /<locale>/ a translated build adds
  const suffix = `${locale}/`;
  const root = locale !== i18n.defaultLocale && siteConfig.baseUrl.endsWith(suffix)
    ? siteConfig.baseUrl.slice(0, -suffix.length)
    : siteConfig.baseUrl;
  const dir = `${root}screenshots/macos/${locale}`;
  let other = src && locale !== i18n.defaultLocale
    ? src.replace('ai-softphone.com/screenshots/macos/en/', `ai-softphone.com/screenshots/macos/${locale.replace('-', '_')}/`)
    : src;
  // a site that carries its own copy of those pictures (static-ru/) does not
  // depend on another host for them
  if (other && siteConfig.customFields.localShots) {
    other = other.replace(/^https:\/\/ai-softphone\.com\/screenshots\/macos\//, `${root}screenshots/`);
  }
  const small = name ? `${dir}/thumbs/${name}${full ? '-full' : ''}.jpg` : other;
  const large = name ? `${dir}/${name}.png` : other;
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
