// Portfolio Projects Data - Digital Marketing Agency Works
import { autopulse } from "./autopulse";
import { fitclub } from "./fitclub";
import { unicornEvents } from "./unicorn-events";

// All projects array
export const allProjects = [autopulse, fitclub, unicornEvents];

// Featured projects
export const featuredProjects = allProjects.filter(
  (project) => project.featured,
);

// Regular projects (non-featured)
export const regularProjects = allProjects.filter(
  (project) => !project.featured,
);

// Get project by slug
export const getProjectBySlug = (slug) => {
  return allProjects.find((project) => project.slug === slug);
};

// Get project by ID
export const getProjectById = (id) => {
  return allProjects.find((project) => project.id === id);
};

// Export individual projects
export { autopulse, fitclub, unicornEvents };
