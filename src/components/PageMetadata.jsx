"use client";
import { useEffect } from "react";
import {
  createOrganizationSchema,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "./StructuredData";

export default function PageMetadata({
  title = "Externus Media - Digital Marketing & Brand Strategy",
  description = "Where innovation meets strategy in the digital marketing world. We transform ideas into impactful digital solutions that drive growth, engagement, and success for forward-thinking brands.",
  keywords = "digital marketing, brand strategy, social media marketing, SEO, content creation, digital advertising, brand identity, marketing agency, business growth, digital solutions",
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  ogUrl,
  twitterCard = "summary_large_image",
  noindex = false,
  nofollow = false,
  datePublished,
  dateModified,
  breadcrumb,
  includeOrganization = true,
  additionalSchemas = [],
}) {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://externus.in"
  ).replace(/\/$/, "");
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage}`;
  // Prefer the explicit canonical/ogUrl from the server page so this client
  // helper cannot overwrite the tag with window.location.href (www, query strings).
  const fullCanonical = resolveUrl(canonical || ogUrl, siteUrl);
  const fullOgUrl = resolveUrl(ogUrl || canonical, siteUrl);

  const robotsContent = `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}, max-image-preview:large, max-snippet:-1, max-video-preview:-1`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("name", "robots", robotsContent);

    // Open Graph tags
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", fullOgImage);
    updateMetaTag("property", "og:url", fullOgUrl);
    updateMetaTag("property", "og:type", ogType);

    // Twitter tags
    updateMetaTag("property", "twitter:title", title);
    updateMetaTag("property", "twitter:description", description);
    updateMetaTag("property", "twitter:image", fullOgImage);
    updateMetaTag("property", "twitter:card", twitterCard);

    // Canonical link
    updateCanonicalLink(fullCanonical);

    // Structured data
    const schemas = [];

    if (includeOrganization) {
      schemas.push(createOrganizationSchema({}));
    }

    schemas.push(
      createWebPageSchema({
        name: title,
        description: description,
        url: fullOgUrl,
        datePublished: datePublished,
        dateModified: dateModified,
        image: fullOgImage,
        breadcrumb: breadcrumb,
      }),
    );

    if (breadcrumb && breadcrumb.length > 1) {
      schemas.push(createBreadcrumbSchema(breadcrumb));
    }

    // Add any additional schemas
    schemas.push(...additionalSchemas);

    // Update structured data
    updateStructuredData(schemas);
  }, [
    title,
    description,
    keywords,
    fullOgImage,
    fullOgUrl,
    ogType,
    twitterCard,
    robotsContent,
    fullCanonical,
    datePublished,
    dateModified,
    breadcrumb,
    includeOrganization,
    additionalSchemas,
  ]);

  return null; // This component doesn't render anything visible
}

function resolveUrl(value, siteUrl) {
  if (!value) return siteUrl;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return `${siteUrl}${value.startsWith("/") ? value : `/${value}`}`;
}

function updateMetaTag(attribute, name, content) {
  if (!content) return;

  let meta = document.querySelector(`meta[${attribute}="${name}"]`);
  if (meta) {
    meta.setAttribute("content", content);
  } else {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, name);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
  }
}

function updateCanonicalLink(href) {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", href);
  } else {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", href);
    document.head.appendChild(canonical);
  }
}

function updateStructuredData(schemas) {
  // Remove existing structured data
  const existingScripts = document.querySelectorAll(
    'script[type="application/ld+json"]',
  );
  existingScripts.forEach((script) => {
    if (script.dataset.dynamic === "true") {
      script.remove();
    }
  });

  // Add new structured data
  schemas.forEach((schema, index) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.dynamic = "true";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}
