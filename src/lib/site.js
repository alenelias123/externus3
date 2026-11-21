/**
 * Shared public site values for JSON-LD and breadcrumbs.
 * NEXT_PUBLIC_SITE_URL, if set, should be the apex origin with no trailing slash.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://externus.in"
).replace(/\/$/, "");

// Confirmed on the live site on 20 Nov 2026 (IST): this file returns HTTP 200,
// content-type image/svg+xml, 292 bytes. /FAVICON.ico also exists (169,604 bytes)
// but is an oversized icon, not a good Organization logo. og-image*.jpg files 404.
export const SITE_LOGO_URL = `${SITE_URL}/favicon-externus.svg`;

// TODO(Chicku): decide the public contact email before changing this default.
// The site currently publishes info@externusmedia.com, but externusmedia.com
// does not resolve (NXDOMAIN) and externus.in has no MX or TXT records yet.
// Do not switch JSON-LD to info@externus.in (or similar) until mailbox MX/SPF
// are in place. This patch does not change visible mailto: links.
export const CONTACT_EMAIL = "info@externusmedia.com";

export const ORGANIZATION_SAME_AS = [
  // Unverified as of 20 Nov 2026 (IST): Instagram served a login wall, so this
  // profile could not be confirmed. Kept here until Chicku confirms or replaces it.
  "https://www.instagram.com/externus.media",
  // TODO(Chicku): add back only after the company page exists and is public.
  // "https://www.linkedin.com/company/externus-media", // 404 as of 20 Nov 2026
  // TODO(Chicku): add back only after the account exists.
  // "https://twitter.com/ExternusMedia", // 404 as of 20 Nov 2026
  // "https://x.com/ExternusMedia", // 404 as of 20 Nov 2026
];
