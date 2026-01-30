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
        "Studio transformed our digital presence. The new platform has exceeded all our expectations and our users love it.",
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
        "Working with Studio was a game-changer. They understood our vision and created a brand that truly represents who we are.",
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
    nextProject: "nexus-finance",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
