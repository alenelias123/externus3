// Portfolio Projects Data
import { techflowSaas } from "./techflow-saas";
import { ecoVibeFashion } from "./ecovibe-fashion";
import { financeForwardApp } from "./financeforward-app";
import { localBitesRestaurant } from "./localbites-restaurant";
import { mindfulSpaceApp } from "./mindfulspace-app";
import { cloudTechPortal } from "./cloudtech-portal";

// All projects array
export const allProjects = [
  techflowSaas,
  ecoVibeFashion,
  financeForwardApp,
  localBitesRestaurant,
  mindfulSpaceApp,
  cloudTechPortal,
];

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
export {
  techflowSaas,
  ecoVibeFashion,
  financeForwardApp,
  localBitesRestaurant,
  mindfulSpaceApp,
  cloudTechPortal,
};
