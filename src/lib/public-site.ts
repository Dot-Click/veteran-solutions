import { queryOptions } from "@tanstack/react-query";
import { createContext, createElement, useContext, type ReactNode } from "react";
import { getPublicSite, type PublicService, type PublicSite } from "./public-site.functions";

export const publicSiteQuery = queryOptions({ queryKey: ["public-site"], queryFn: () => getPublicSite(), staleTime: 0, refetchOnWindowFocus: true });

// Original captured catalogue, used as a fallback whenever the live `services` table has no enabled rows.
export const originalServices: PublicService[] = [
  { slug: "junk-removal", title: "Junk Removal", display_order: 1, image_url: "/site-assets/58a94b431b74715b.webp", image_alt: "Veteran Solutions team member preparing to clear a cluttered space", summary: "Make room for what comes next. Furniture, unwanted items and property cleanouts, handled with care.", description: "From a few bulky items to a full property cleanout, we help remove the things taking up your space. Tell us what needs to go, where it is and how we can access it. We’ll discuss the scope and an estimate before the work starts." },
  { slug: "painting", title: "Painting", display_order: 2, image_url: "/site-assets/0695a946ebede19a.webp", image_alt: "Veteran Solutions painter working on a home exterior", summary: "Bring a fresh perspective to your property with thoughtfully prepared interior and exterior painting.", description: "A good paint job starts before the first coat. We discuss the surfaces, finish and colors you have in mind, then plan preparation and application around the space. From an individual room to an exterior refresh, the goal is a clean, considered result." },
  { slug: "pool-cleaning", title: "Pool Cleaning", display_order: 3, image_url: "/site-assets/268a312bff2a0a69.webp", image_alt: "Veteran Solutions worker skimming a swimming pool", summary: "Keep your pool inviting with attentive cleaning that takes everyday maintenance off your list.", description: "We help clear debris and clean the pool surfaces so your outdoor space is easier to enjoy. Whether you need a one-time visit or want to discuss ongoing care, we’ll review the size, condition and maintenance needs of your pool first." },
  { slug: "power-washing", title: "Power Washing", display_order: 4, image_url: "/site-assets/4f8f0842a9551b24.webp", image_alt: "Veteran Solutions worker power washing a paved patio", summary: "Lift built-up dirt from suitable exterior surfaces and give your property a cleaner first impression.", description: "Driveways, walkways and exterior surfaces can collect dirt and buildup over time. We review the material and its condition before choosing a suitable cleaning approach, with attention to the property and surrounding areas." },
  { slug: "renovating", title: "Renovating", display_order: 5, image_url: "/site-assets/bf38b010f24207a7.jpg", image_alt: "Bright finished interior with natural wood flooring", summary: "Turn a space that needs attention into one that feels considered, practical and ready for everyday life.", description: "Property improvements are easier with a clear plan. We talk through the changes you want, assess the existing space and define a practical scope of work. Individual upgrades or a coordinated refresh can bring new life to a room without losing sight of how you use it." },
  { slug: "property-cleaning", title: "Property Cleaning", display_order: 6, image_url: "/site-assets/c82ff7ecf9d14bb2.webp", image_alt: "Veteran Solutions worker cleaning an outdoor property area", summary: "Give your property the attention it deserves, with cleaning tailored to the areas that need it most.", description: "From getting a space ready for its next occupant to addressing areas that have been overlooked, we plan cleaning around your property’s needs. Tell us which areas require attention and the result you’re looking for so we can agree a clear scope." },
  { slug: "tile-replacement-installation", title: "Tile Replacement & Installation", display_order: 7, image_url: "/site-assets/5401e4713d7507d4.webp", image_alt: "Veteran Solutions worker installing tile", summary: "Well-chosen tile can transform the feel of a space.", description: "Well-chosen tile can transform the feel of a space. We discuss the layout, materials and existing surface, then assess the preparation needed for replacement or installation. The plan is shaped around both the appearance and everyday use of your space." },
  { slug: "floor-renovation", title: "Floor Renovation", display_order: 8, image_url: "/site-assets/bbf6bdeeff5f9e79.webp", image_alt: "Veteran Solutions worker renovating a wood floor", summary: "Floors set the tone for every room.", description: "Floors set the tone for every room. We review the existing flooring and your preferred finish, then discuss renovation or replacement options. Preparation, material choice and the condition beneath the floor all shape the agreed work." },
  { slug: "demolition", title: "Demolition", display_order: 9, image_url: "/site-assets/73ade72c9b09495f.jpg", image_alt: "Excavator at a demolition site", summary: "Selective removal, demolition requests and debris planning.", description: "A new beginning sometimes starts with removal. We assess your demolition request, discuss the items or areas to be removed and plan the work around access, the surrounding property and debris handling. Scope, safety requirements and any permits are confirmed before scheduling." },
];

export type ServiceGroup = "clear-clean" | "refresh-renew" | "clear-prepare";
export const serviceMeta: Record<string, { tint: string; category: string; group: ServiceGroup }> = {
  "junk-removal": { tint: "#f3f0ed", category: "Clear & clean", group: "clear-clean" },
  painting: { tint: "#f4eeea", category: "Refresh & renew", group: "refresh-renew" },
  "pool-cleaning": { tint: "#f5f1eb", category: "Clear & clean", group: "clear-clean" },
  "power-washing": { tint: "#f3f1ef", category: "Clear & clean", group: "clear-clean" },
  renovating: { tint: "#f4f0ea", category: "Refresh & renew", group: "refresh-renew" },
  "property-cleaning": { tint: "#f4f0ec", category: "Clear & clean", group: "clear-clean" },
  "tile-replacement-installation": { tint: "#f1f0ec", category: "Refresh & renew", group: "refresh-renew" },
  "floor-renovation": { tint: "#f4eee7", category: "Refresh & renew", group: "refresh-renew" },
  demolition: { tint: "#f1eee8", category: "Clear & prepare", group: "clear-prepare" },
};
const defaultServiceMeta = { tint: "#f3f0ed", category: "Clear & clean", group: "clear-clean" as ServiceGroup };
export function getServiceMeta(slug: string) {
  return serviceMeta[slug] ?? defaultServiceMeta;
}

// The services table is the source of truth once it has enabled rows; otherwise the site keeps showing the original captured catalogue.
export function resolvePublicServices(live: PublicService[] | null | undefined): PublicService[] {
  return live && live.length ? live : originalServices;
}

const PublicServicesContext = createContext<PublicService[]>(originalServices);
export function PublicServicesProvider({ services, children }: { services: PublicService[] | null | undefined; children: ReactNode }) {
  return createElement(PublicServicesContext.Provider, { value: resolvePublicServices(services) }, children);
}
export function usePublicServices() {
  return useContext(PublicServicesContext);
}

export function siteText(site: PublicSite | undefined, section: string, field: string) {
  return site?.content[section]?.[field];
}
