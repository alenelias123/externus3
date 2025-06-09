import Head from "next/head";

export default function SEOMetadata({
  title = "Externus Media - Digital Marketing & Brand Strategy",
  description = "Where innovation meets strategy in the digital marketing world. We transform ideas into impactful digital solutions that drive growth, engagement, and success for forward-thinking brands.",
  keywords = "digital marketing, brand strategy, social media marketing, SEO, content creation, digital advertising, brand identity, marketing agency, business growth, digital solutions",
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  ogUrl,
  twitterCard = "summary_large_image",
  twitterSite = "@ExternusMedia",
  twitterCreator = "@ExternusMedia",
  noindex = false,
  nofollow = false,
  structuredData,
}) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://externusmedia.com";
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage}`;
  const fullCanonical = canonical || ogUrl || siteUrl;
  const fullOgUrl = ogUrl || siteUrl;

  const robotsContent = `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}, max-image-preview:large, max-snippet:-1, max-video-preview:-1`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="language" content="English" />
      <meta name="author" content="Externus Media" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullOgUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Externus Media" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullOgUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullOgImage} />
      <meta property="twitter:image:alt" content={title} />
      <meta property="twitter:site" content={twitterSite} />
      <meta property="twitter:creator" content={twitterCreator} />

      {/* Additional Meta Tags for better SEO */}
      <meta name="theme-color" content="#a3e635" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-navbutton-color" content="#a3e635" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Geo Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />

      {/* Business Tags */}
      <meta name="rating" content="5" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
}
