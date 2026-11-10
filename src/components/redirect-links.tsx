import { isPlaceholder, redirect, siteConfig } from "@/lib/site";

/**
 * Links to Redirect's own website, privacy policy and support.
 * While an address in site.ts is still a placeholder, a plain note is
 * shown instead of a link that goes nowhere.
 */
export default function RedirectLinks() {
  const siteReady = !isPlaceholder(redirect.url);
  const privacyReady = !isPlaceholder(redirect.privacyUrl);
  const supportReady = !isPlaceholder(redirect.supportEmail);
  const supportEmail = supportReady ? redirect.supportEmail : siteConfig.email;

  return (
    <dl className="flex flex-col gap-x-12 gap-y-6 sm:flex-row sm:flex-wrap">
      <div>
        <dt className="t-small">Website</dt>
        <dd className="mt-1">
          {siteReady ? (
            <a className="link" href={redirect.url}>
              Visit the Redirect website
            </a>
          ) : (
            <span>Launching with the app</span>
          )}
        </dd>
      </div>
      <div>
        <dt className="t-small">Privacy policy</dt>
        <dd className="mt-1">
          {privacyReady ? (
            <a className="link" href={redirect.privacyUrl}>
              Read Redirect&rsquo;s privacy policy
            </a>
          ) : (
            <span>Published before release</span>
          )}
        </dd>
      </div>
      <div>
        <dt className="t-small">Support</dt>
        <dd className="mt-1 [overflow-wrap:anywhere]">
          <a className="link" href={`mailto:${supportEmail}`}>
            {supportEmail}
          </a>
        </dd>
      </div>
    </dl>
  );
}
