/**
 * Shared public site values for JSON-LD, breadcrumbs, and contact links.
 * NEXT_PUBLIC_SITE_URL, if set, should be the apex origin with no trailing slash.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://externus.in"
).replace(/\/$/, "");

// Confirmed on the live site on 20 Nov 2026 (IST): this file returns HTTP 200,
// content-type image/svg+xml, 292 bytes. /FAVICON.ico also exists (169,604 bytes)
// but is an oversized icon, not a good Organization logo. og-image*.jpg files 404.
export const SITE_LOGO_URL = `${SITE_URL}/favicon-externus.svg`;

// Public contact email already shown to visitors on /contact and /legal.
// Kept (not switched to externusmedia@gmail.com) so on-page copy and JSON-LD stay consistent.
// Note: externusmedia.com still does not resolve and externus.in has no MX yet,
// so deliverability depends on that mailbox actually working.
export const CONTACT_EMAIL = "info@externusmedia.com";

// Personal/company LinkedIn profile provided by Chicku on 21 Nov 2026 (IST).
// Replaces the previous company URL, which 404'd.
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/externus-media-a40b70450/";

export const ORGANIZATION_SAME_AS = [
  // Unverified as of 20 Nov 2026 (IST): Instagram served a login wall, so this
  // profile could not be confirmed. Kept here until Chicku confirms or replaces it.
  "https://www.instagram.com/externus.media",
  LINKEDIN_URL,
  // TODO(Chicku): add back only after the account exists.
  // "https://twitter.com/ExternusMedia", // 404 as of 20 Nov 2026
  // "https://x.com/ExternusMedia", // 404 as of 20 Nov 2026
];
