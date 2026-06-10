import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://evitalsrpm.com";
  const lastModified = new Date();
  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/chronic-care-management", priority: 0.9 },
    { path: "/contact", priority: 0.7 },
    { path: "/demo", priority: 0.8 },
    { path: "/for-individuals", priority: 0.8 },
    { path: "/for-organizations", priority: 0.8 },
    { path: "/how-it-works", priority: 0.8 },
    { path: "/insights/overview", priority: 0.7 },
    { path: "/insights/rpm-outcomes", priority: 0.7 },
    { path: "/privacy-policy", priority: 0.4 },
    { path: "/ReimbursementCalculator", priority: 0.8 },
    { path: "/remote-patient-monitoring", priority: 0.9 },
    { path: "/rpm/Reimbursement-and-Billing", priority: 0.8 },
    { path: "/rpm/RPMDevices", priority: 0.8 },
    { path: "/rpm/RPMSoftware", priority: 0.8 },
    { path: "/services", priority: 0.8 },
    { path: "/support/resources", priority: 0.6 },
    { path: "/terms-of-service", priority: 0.4 },
    { path: "/who-we-serve", priority: 0.8 },
    { path: "/who-we-serve/cardiology", priority: 0.7 },
    { path: "/who-we-serve/endocrinology", priority: 0.7 },
    { path: "/who-we-serve/internal-medicine", priority: 0.7 },
    { path: "/who-we-serve/nephrology", priority: 0.7 },
    { path: "/who-we-serve/primary-care", priority: 0.7 },
    { path: "/who-we-serve/pulmonology", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
