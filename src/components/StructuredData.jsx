import { SITE_URL, SITE_LOGO_URL, CONTACT_EMAIL, ORGANIZATION_SAME_AS } from "../lib/site";

export function createOrganizationSchema({
  name = "Externus Media",
  description = "Digital marketing agency specializing in brand strategy, social media marketing, and creative solutions that drive business growth.",
  url = SITE_URL,
  logo = SITE_LOGO_URL,
  email = CONTACT_EMAIL,
  telephone,
  address,
  socialLinks = ORGANIZATION_SAME_AS,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: name,
    description: description,
    url: url,
    logo: {
      "@type": "ImageObject",
      url: logo,
      width: 60,
      height: 60,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: email,
      telephone: telephone,
      contactType: "customer service",
      availableLanguage: "English",
    },
    address: address
      ? {
          "@type": "PostalAddress",
          streetAddress: address.streetAddress,
          addressLocality: address.city,
          addressRegion: address.state,
          postalCode: address.postalCode,
          addressCountry: address.country,
        }
      : undefined,
    sameAs: socialLinks,
    foundingDate: "2023",
    numberOfEmployees: "2-10",
    slogan: "Where innovation meets strategy in the digital marketing world",
    knowsAbout: [
      "Digital Marketing",
      "Brand Strategy",
      "Social Media Marketing",
      "Content Creation",
      "SEO",
      "Digital Advertising",
      "Brand Identity",
      "Marketing Strategy",
    ],
    serviceArea: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Identity Design",
            description:
              "Complete brand development from logo design to brand guidelines",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing",
            description:
              "Data-driven social media campaigns that build community and engagement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Strategy Development",
            description:
              "Comprehensive strategies that align with business goals and market trends",
          },
        },
      ],
    },
  };
}

export function createWebPageSchema({
  name,
  description,
  url,
  datePublished,
  dateModified,
  author = "Externus Media",
  publisher = "Externus Media",
  image,
  breadcrumb,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: name,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: publisher,
    },
    image: image
      ? {
          "@type": "ImageObject",
          url: image,
          width: 1200,
          height: 630,
        }
      : undefined,
    breadcrumb: breadcrumb
      ? {
          "@type": "BreadcrumbList",
          itemListElement: breadcrumb.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }
      : undefined,
    mainEntity: {
      "@type": "Organization",
      name: "Externus Media",
    },
  };
}

export function createArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "Externus Media",
  publisher = "Externus Media",
  url,
  wordCount,
  keywords,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: headline,
    description: description,
    image: image
      ? {
          "@type": "ImageObject",
          url: image,
          width: 1200,
          height: 630,
        }
      : undefined,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: publisher,
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO_URL,
      },
    },
    url: url,
    wordCount: wordCount,
    keywords: keywords,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function createServiceSchema({
  name,
  description,
  provider = "Externus Media",
  areaServed = "Worldwide",
  serviceType,
  url,
  image,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    areaServed: {
      "@type": "Place",
      name: areaServed,
    },
    serviceType: serviceType,
    url: url,
    image: image
      ? {
          "@type": "ImageObject",
          url: image,
        }
      : undefined,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Services`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: name,
          },
        },
      ],
    },
  };
}

export function createBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
