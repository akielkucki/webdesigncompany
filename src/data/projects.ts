export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  client: string;
  services: string[];
  challenge: string;
  solution: string;
  results: string[];
  image?: string;
  imageMobile?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  inProgress?: boolean;
  nextProject?: string;
}

export const projects: Project[] = [
  {
    slug: "yachtem-yacht-charters",
    title: "Yachtem Yacht Charters",
    category: "Hospitality & Booking Platform",
    description:
      "A concierge charter platform for a private Mediterranean fleet serving ultra-high-net-worth clientele.",
    year: "2026",
    client: "Yachtem Yacht Charters",
    services: [
      "Digital Art Direction",
      "Bespoke Booking Platform",
      "Editorial Photography Curation",
      "Concierge CRM Integration",
    ],
    image: "/portfolio/yachtem.png",
    imageMobile: "/portfolio/yachtem_mobile.png",
    challenge:
      "Yachtem operates one of the most sought-after charter fleets in Greece, yet their digital presence failed to convey the discretion and refinement of the experience aboard. Inquiries were arriving through fragmented channels and competing platforms were intercepting first-contact moments with high-net-worth travelers.",
    solution:
      "We architected an editorial-grade digital flagship — cinematic vessel cinematography, a discreet and elegant inquiry flow, and an integrated concierge CRM that routes every request to a private client advisor within minutes. Every interaction was composed to feel as considered as stepping aboard.",
    results: [
      "3.2× increase in qualified charter inquiries",
      "€4.2M in new bookings within the first six months",
      "Average advisor response time under four minutes",
      "Featured in Robb Report and Boat International",
    ],
    testimonial: {
      quote:
        "",
      author: "Giannis",
      role: "Director of Charters, Yachtem Yacht Charters",
    },
    inProgress: true,
    nextProject: "blum-skin-care",
  },
  {
    slug: "blum-skin-care",
    title: "Blum Skin Care",
    category: "Luxury Beauty & E-commerce",
    description:
      "An editorial e-commerce flagship for a premium skin care house designed around restraint and ritual.",
    year: "2026",
    client: "Blum Skin Care",
    services: [
      "Brand Strategy",
      "E-commerce Architecture",
      "Art Direction",
      "Product Photography Direction",
    ],
    image: "/portfolio/blumskincare.png",
    imageMobile: "/portfolio/blumskincare_mobile.png",
    challenge:
      "Blum had grown into one of the most respected independent skin care houses in its category, yet its digital storefront failed to communicate the craft and provenance behind the formulations. Conversion was capped by a template experience that undersold the product and the price point.",
    solution:
      "We crafted an editorial commerce experience built around negotiated white space, measured typography, and quiet motion. Product stories read like press features; checkout was reduced to a single composed gesture. The result feels less like a storefront and more like a private consultation.",
    results: [
      "220% increase in online revenue",
      "45% lift in average order value",
      "Featured in the Beauty Industry Awards",
      "92% post-purchase satisfaction",
    ],
    testimonial: {
      quote:
        "The new site captures the soul of the brand. Our clients tell us the online experience feels as refined as the products themselves.",
      author: "Elena Blum",
      role: "Founder, Blum Skin Care",
    },
    nextProject: "red-bridge-estates",
  },
  {
    slug: "red-bridge-estates",
    title: "Red Bridge Estates",
    category: "Luxury Real Estate & Identity",
    description:
      "A digital presence for a premier custom-home builder shaping the estates of Bucks County and the Main Line.",
    year: "2025",
    client: "Red Bridge Estates",
    services: [
      "Brand Refresh",
      "Editorial Web Design",
      "Photography Direction",
      "Private Client SEO",
    ],
    challenge:
      "Red Bridge had built a quiet reputation among the region's most discerning homeowners, but their digital presence leaned utilitarian. As they moved further into bespoke estate work, their site needed to signal craftsmanship on par with their portfolio and attract a more affluent clientele without surrendering local trust.",
    solution:
      "We designed a considered, editorial website built around architectural photography and long-form case studies. A private inquiry flow connects prospective clients directly with the principals, while a local-first SEO program positions the firm as the definitive name for bespoke estates across the corridor.",
    results: [
      "350% increase in qualified estate inquiries",
      "First-page visibility on premium local search terms",
      "85% of new clients credit the website in their decision",
      "Expanded service across Bucks County and the Main Line",
    ],
    testimonial: {
      quote:
        "The site is a true reflection of the work we do. It attracts the kind of clients we were built to serve.",
      author: "James Callahan",
      role: "Principal, Red Bridge Estates",
    },
    nextProject: "azur-yacht-charters",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
