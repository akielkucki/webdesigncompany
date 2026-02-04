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
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  nextProject?: string;
}

export const projects: Project[] = [
  {
    slug: "blum-skin-care",
    title: "Blum Skin Care",
    category: "E-commerce & Branding",
    description: "An elegant skin care service and e-commerce platform designed for luxury and refinement.",
    year: "2024",
    client: "Blum Skin Care",
    services: ["Brand Strategy", "E-commerce Development", "UI/UX Design", "Product Photography Direction"],
    challenge:
      "Blum Skin Care needed a digital presence that matched the sophistication of their premium product line. Their existing site failed to convey the elegance and quality that defines their brand, resulting in lower conversions and brand perception issues.",
    solution:
      "We crafted a refined e-commerce experience with soft, elegant typography, carefully curated product galleries, and seamless checkout flow. The design emphasizes white space and subtle animations to create a luxurious, spa-like browsing experience.",
    results: [
      "220% increase in online sales",
      "45% improvement in average order value",
      "Featured in Beauty Industry Awards",
      "92% customer satisfaction rating",
    ],
    testimonial: {
      quote:
        "The new website perfectly captures the essence of our brand. Our customers tell us the online experience feels as luxurious as our products.",
      author: "Elena Blum",
      role: "Founder, Blum Skin Care",
    },
    nextProject: "royal-vending-cart",
  },
  {
    slug: "royal-vending-cart",
    title: "Royal Vending Cart",
    category: "E-commerce & Web Application",
    description: "A comprehensive food truck parts e-commerce platform with custom cart builder tool.",
    year: "2024",
    client: "Royal Vending Cart",
    services: ["E-commerce Development", "Product Configurator", "UX Design", "Inventory Management Integration"],
    challenge:
      "Royal Vending Cart needed to transition from a local parts supplier to a national e-commerce presence. They required a platform that could sell individual parts while also offering a custom food truck builder for customers starting from scratch.",
    solution:
      "We developed a robust e-commerce platform featuring an interactive food truck builder that lets customers design and spec out their dream cart. The parts catalog includes detailed compatibility filters and real-time inventory tracking.",
    results: [
      "400% growth in online revenue",
      "2,500+ custom builds configured in first 6 months",
      "60% reduction in customer support inquiries",
      "Expanded from regional to nationwide sales",
    ],
    testimonial: {
      quote:
        "The custom builder tool has transformed our business. Customers can now visualize exactly what they're building, and our sales have never been better.",
      author: "Michael Torres",
      role: "Owner, Royal Vending Cart",
    },
    nextProject: "red-bridge-construction",
  },
  {
    slug: "red-bridge-construction",
    title: "Red Bridge Construction",
    category: "Web Design & Branding",
    description: "A professional construction company website showcasing quality craftsmanship in Bucks County.",
    year: "2024",
    client: "Red Bridge Construction",
    services: ["Web Design", "Brand Refresh", "Photography Direction", "SEO Optimization"],
    challenge:
      "Red Bridge Construction, a trusted name in New Hope and Bucks County, relied primarily on word-of-mouth referrals. They needed a professional online presence to attract new clients and showcase their portfolio of residential and commercial projects.",
    solution:
      "We designed a clean, professional website that highlights their craftsmanship through stunning project galleries. The site includes detailed case studies, a streamlined quote request system, and local SEO optimization to capture the Bucks County market.",
    results: [
      "350% increase in qualified leads",
      "First page Google ranking for local search terms",
      "85% of new clients cite website in discovery",
      "Expanded service area across Bucks County",
    ],
    testimonial: {
      quote:
        "Our new website has brought in more quality leads than we ever expected. It truly represents the pride we take in our work.",
      author: "James Callahan",
      role: "President, Red Bridge Construction",
    },
    nextProject: "nexus-finance",
  },

];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
