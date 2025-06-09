import { featuredProjects, regularProjects } from "../data/portfolio";

export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://externusmedia.com";

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic portfolio pages
  const portfolioPages = [...featuredProjects, ...regularProjects].map(
    (project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: new Date(
        project.dateModified || project.datePublished || new Date(),
      ),
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  return [...staticPages, ...portfolioPages];
}
