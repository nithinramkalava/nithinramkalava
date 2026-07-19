import type { Project } from "../types";

export const featuredProject: Project = {
  slug: "pqc",
  name: "pqc",
  tagline: "Post-quantum cryptography for JavaScript",
  featured: true,
  description:
    "A pure-JavaScript implementation of the NIST post-quantum standards (ML-KEM, ML-DSA and SLH-DSA, covering FIPS 203, 204 and 205), built for the web with no native dependencies and an accompanying research paper.",
  stats: [
    { value: "3,493", label: "npm downloads", accent: true },
    { value: "2,300+", label: "ML-KEM keygens / sec" },
    { value: "3", label: "NIST standards" },
  ],
  tags: ["JavaScript (ESM)", "FIPS 203/204/205", "Lattice crypto", "npm"],
  links: [{ label: "npm package →", href: "https://www.npmjs.com/package/pqc", primary: true }],
};

export const otherProjects: Project[] = [
  {
    slug: "pqc-vizz",
    name: "PQC-Vizz",
    tagline: "Post-quantum algorithm visualizer",
    description:
      "An interactive, in-browser visualizer for post-quantum algorithms that runs the real `pqc` library live.",
    tags: ["Next.js", "TypeScript", "SVG"],
    links: [
      { label: "Live", href: "https://pqc.nithinram.com/", primary: true },
      { label: "GitHub", href: "https://github.com/nithinramkalava/pqc-vizz" },
    ],
  },
  {
    slug: "pc-building-assistant",
    name: "PC Building Assistant",
    tagline: "AI and ML component recommender",
    description:
      "An LLM and ML component recommender with a PostgreSQL compatibility engine and an ETL pipeline.",
    tags: ["PostgreSQL", "Python", "Next.js"],
    links: [
      { label: "Live", href: "https://pc.nithinram.com/", primary: true },
      { label: "GitHub", href: "https://github.com/nithinramkalava/build-your-pc" },
    ],
  },
  {
    slug: "careerpath-navigator",
    name: "CareerPath Navigator",
    tagline: "Career platform for rural students",
    description:
      "A career-exploration platform for rural students, optimized for low-bandwidth devices and networks.",
    tags: ["Next.js", "Accessibility"],
    links: [
      { label: "Live", href: "https://careerpath-nav.nithinram.com/", primary: true },
      { label: "GitHub", href: "https://github.com/nithinramkalava/CareerPath-Navigator" },
    ],
  },
];
