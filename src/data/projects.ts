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
  {
    slug: "nexus-finance",
    title: "Nexus Finance",
    category: "Web Design & Development",
    description: "A fintech platform redesign that increased user engagement by 180%.",
    year: "2024",
    client: "Nexus Financial Services",
    services: ["UX Research", "UI Design", "Frontend Development", "Backend Integration"],
    challenge:
      "Nexus Finance was struggling with an outdated platform that had a 60% drop-off rate during onboarding. Users found the interface confusing, and the mobile experience was severely lacking.",
    solution:
      "We conducted extensive user research and completely reimagined the user journey. The new design features a streamlined onboarding process, intuitive dashboard, and a mobile-first approach with real-time portfolio tracking.",
    results: [
      "180% increase in user engagement",
      "45% reduction in onboarding drop-off",
      "4.8/5 average app store rating",
      "$2.5M additional AUM in first quarter",
    ],
    testimonial: {
      quote:
        "Northon Studios transformed our digital presence. The new platform has exceeded all our expectations and our users love it.",
      author: "Sarah Chen",
      role: "CEO, Nexus Financial Services",
    },
    nextProject: "meridian-studio",
  },
  {
    slug: "meridian-studio",
    title: "Meridian Studio",
    category: "Branding & Web",
    description: "Complete brand identity and website for a creative agency.",
    year: "2024",
    client: "Meridian Creative Studio",
    services: ["Brand Strategy", "Visual Identity", "Web Design", "Motion Design"],
    challenge:
      "Meridian was a talented but unknown creative agency that needed to establish a strong market presence. They lacked a cohesive brand identity and their existing website didn't reflect the quality of their work.",
    solution:
      "We developed a bold, distinctive brand identity that captures Meridian's creative spirit. The website showcases their portfolio with immersive animations and a unique navigation experience that sets them apart from competitors.",
    results: [
      "300% increase in inbound inquiries",
      "Featured in Awwwards and CSS Design Awards",
      "40% increase in average project value",
      "Successfully positioned as a premium agency",
    ],
    testimonial: {
      quote:
        "Working with Northon Studios was a game-changer. They understood our vision and created a brand that truly represents who we are.",
      author: "Marcus Webb",
      role: "Founder, Meridian Studio",
    },
    nextProject: "apex-athletics",
  },
  {
    slug: "apex-athletics",
    title: "Apex Athletics",
    category: "E-commerce",
    description: "High-performance e-commerce platform driving $2M+ monthly revenue.",
    year: "2023",
    client: "Apex Athletics Inc.",
    services: ["E-commerce Strategy", "UX Design", "Shopify Development", "Performance Optimization"],
    challenge:
      "Apex Athletics had a growing product line but their existing e-commerce platform couldn't handle the traffic spikes during product launches. Cart abandonment was high and the checkout process was cumbersome.",
    solution:
      "We built a lightning-fast, scalable e-commerce platform with a streamlined checkout process. The new design emphasizes product photography, includes size guides with AR try-on features, and a loyalty program integration.",
    results: [
      "$2M+ monthly revenue",
      "65% reduction in cart abandonment",
      "3x faster page load times",
      "200% increase in mobile conversions",
    ],
    testimonial: {
      quote:
        "The new platform handles our biggest launches without breaking a sweat. Our customers love the shopping experience.",
      author: "Jordan Hayes",
      role: "Director of E-commerce, Apex Athletics",
    },
    nextProject: "pulse-health",
  },
  {
    slug: "pulse-health",
    title: "Pulse Health",
    category: "Web Application",
    description: "Healthcare dashboard serving 50,000+ daily active users.",
    year: "2023",
    client: "Pulse Health Technologies",
    services: ["Product Design", "Dashboard Design", "React Development", "Data Visualization"],
    challenge:
      "Healthcare providers needed a centralized platform to monitor patient data, but existing solutions were either too complex or lacked the real-time capabilities required for critical care situations.",
    solution:
      "We designed and developed an intuitive healthcare dashboard with real-time data visualization, customizable alerts, and HIPAA-compliant secure messaging. The interface prioritizes critical information while remaining accessible for non-technical users.",
    results: [
      "50,000+ daily active users",
      "30% faster response time to critical alerts",
      "98.5% user satisfaction score",
      "Adopted by 200+ healthcare facilities",
    ],
    testimonial: {
      quote:
        "Pulse Health has revolutionized how we monitor our patients. The dashboard is intuitive and the real-time alerts have literally saved lives.",
      author: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer, Metro Health System",
    },
    nextProject: "blum-skin-care",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
