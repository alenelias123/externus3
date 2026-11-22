import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import {
  SITE_URL,
  SITE_LOGO_URL,
  CONTACT_EMAIL,
  ORGANIZATION_SAME_AS,
} from "../lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Externus Media - Digital Marketing & Brand Strategy",
    template: "%s | Externus Media",
  },
  description:
    "Where innovation meets strategy in the digital marketing world. We transform ideas into impactful digital solutions that drive growth, engagement, and success for forward-thinking brands.",
  keywords: [
    "digital marketing",
    "brand strategy",
    "social media marketing",
    "SEO",
    "content creation",
    "digital advertising",
    "brand identity",
    "marketing agency",
    "business growth",
    "digital solutions",
  ],
  authors: [{ name: "Externus Media" }],
  creator: "Externus Media",
  publisher: "Externus Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://externus.in",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Externus Media - Digital Marketing & Brand Strategy",
    description:
      "Where innovation meets strategy in the digital marketing world. We transform ideas into impactful digital solutions that drive growth, engagement, and success for forward-thinking brands.",
    siteName: "Externus Media",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Externus Media - Digital Marketing & Brand Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ExternusMedia",
    creator: "@ExternusMedia",
    title: "Externus Media - Digital Marketing & Brand Strategy",
    description:
      "Where innovation meets strategy in the digital marketing world. We transform ideas into impactful digital solutions that drive growth, engagement, and success for forward-thinking brands.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/FAVICON.ico" },
      { url: "/favicon-externus.svg", type: "image/svg+xml" },
    ],
    shortcut: "/FAVICON.ico",
    apple: [{ url: "/FAVICON.ico" }],
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Externus Media",
    description:
      "Digital marketing agency specializing in brand strategy, social media marketing, and creative solutions that drive business growth.",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_LOGO_URL,
      width: 60,
      height: 60,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: ORGANIZATION_SAME_AS,
    foundingDate: "2023",
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

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QMGECW7KTD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QMGECW7KTD');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
