"use client";

import React, { useState } from 'react';
import { Section } from '../ui/section';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';

type ProjectType = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  keyFeatures?: string[];
};

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects: ProjectType[] = [
    {
      title: "PC Building Assistant Platform",
      description: "An intelligent platform that simplifies PC component selection through hybrid AI-powered recommendations and compatibility verification. Combines conversational interfaces (LLM) with traditional builder UI, backed by machine learning rankings, a comprehensive data pipeline (ETL), and a robust PostgreSQL database with embedded PL/pgSQL logic.",
      image: "/images/projects/pc-building.png",
      technologies: ["PostgreSQL", "Next.js", "Node.js", "Python", "TypeScript", "Scikit-learn", "Ollama", "Tailwind CSS", "Pandas"],
      demoUrl: "https://pc.nithinram.me/",
      githubUrl: "https://github.com/nithinramkalava/build-your-pc",
      featured: true,
      keyFeatures: [
        "Database-centric compatibility enforcement via PL/pgSQL stored functions",
        "ML-based component ranking using Gradient Boosting regression models",
        "Dynamic budget allocation algorithm optimizing component distribution",
        "Conversational UI powered by Ollama (Qwen 2.5 14B model)",
        "End-to-end data pipeline from web scraping to PostgreSQL database",
        "Dual interface for both novice and expert users"
      ]
    },
    {
      title: "Post-Quantum Cryptography Implementation",
      description: "A pure JavaScript library implementing NIST-approved post-quantum cryptographic standards (ML-KEM, ML-DSA, SLH-DSA). Designed for web developer accessibility and high performance in JS environments.",
      image: "/images/projects/post-quantum.png",
      technologies: ["JavaScript (ESM)", "NPM", "Algorithms", "Cryptography", "Performance Optimization"],
      githubUrl: "https://www.npmjs.com/package/pqc",
      featured: true,
      keyFeatures: [
        "Full implementation of NIST FIPS 203, 204, 205",
        "High-performance: >2300 ML-KEM keygens/sec in JS",
        "NPM package with **1900+ downloads** (peak 331/week)",
        "Comprehensive documentation and research paper",
        "Pure JavaScript, no native dependencies"
      ]
    },
    {
      title: "PQC-Vizz",
      description: "An interactive visualization platform for post-quantum cryptographic algorithms, making complex cryptographic concepts accessible and understandable through dynamic visual representations and step-by-step execution flows.",
      image: "/images/projects/pqc-vizz.png",
      technologies: ["Next.js", "TypeScript", "SVG", "React Hooks", "Tailwind CSS", "Vercel", "pqc library"],
      demoUrl: "https://pqc.nithinram.me/",
      githubUrl: "https://github.com/nithinramkalava/pqc-vizz",
      featured: true,
      keyFeatures: [
        "Live in-browser execution of PQC algorithms from the 'pqc' library",
        "Step-by-step visualization of cryptographic operations",
        "Comparative analysis of PQC approaches",
        "Educational resource for developers & researchers"
      ]
    },
    {
      title: "CareerPath Navigator",
      description: "A user-centric digital platform empowering rural students with comprehensive career exploration tools, educational pathway visualizations, and personalized assessments, optimized for low-bandwidth environments.",
      image: "/images/projects/career-path-navigator.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hooks", "Vercel"],
      demoUrl: "https://career.nithinram.me/",
      githubUrl: "https://github.com/nithinramkalava/CareerPath-Navigator",
      featured: true,
      keyFeatures: [
        "Mobile-first, responsive & accessible design",
        "Interactive career pathway & assessment tools",
        "Performance optimized for constrained devices/networks",
        "CI/CD deployment via Vercel",
        "Accessible UI with simplified language and intuitive navigation",
        "Modular component architecture with atomic design principles"
      ]
    },
    {
      title: "Math Minute",
      description: "An educational Android application helping users improve mathematical skills through adaptive difficulty levels, timed exercises, and comprehensive performance tracking using Java and SQLite.",
      image: "/images/projects/math-minute.png",
      technologies: ["Java", "Android SDK", "SQLite", "UI/UX Design", "Educational Technology"],
      demoUrl: "https://github.com/nithinramkalava/Math-Minute/releases/tag/debug-releases",
      githubUrl: "https://github.com/nithinramkalava/Math-Minute",
      keyFeatures: [
        "Adaptive difficulty adjustment based on user performance metrics",
        "Multiple operation modes targeting different mathematical skills",
        "Offline functionality with local data persistence",
        "Performance analytics and progress visualization",
        "Gamification elements for increased engagement",
        "OOP principles demonstrated through modular code architecture"
      ]
    },
    {
      title: "London Bus Safety Analysis",
      description: "A data analysis project that examines safety patterns in London's bus network, utilizing Python for data processing and Tableau for interactive visualizations to identify incident hotspots and temporal patterns.",
      image: "/images/projects/london-bus.png",
      technologies: ["Python", "Pandas", "NumPy", "Tableau", "Data Cleaning", "Statistical Analysis"],
      demoUrl: "https://public.tableau.com/app/profile/nithinramkalava/viz/LondonBusSafety_16839704914760/Dashboard",
      githubUrl: "https://public.tableau.com/app/profile/nithinramkalava/vizzes",
      keyFeatures: [
        "Comprehensive analysis of bus safety incident data",
        "Geospatial visualization of incident hotspots",
        "Temporal pattern identification and trend analysis",
        "Correlation analysis with external factors",
        "Interactive dashboard for exploration and filtering",
        "Evidence-based safety improvement recommendations"
      ]
    }
  ];

  // Featured projects at the top
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  const allProjects = [...featuredProjects, ...otherProjects];

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Here are some of the projects I've worked on that showcase my skills and interests."
      centered
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, index) => (
          <Card 
            key={index} 
            className="flex flex-col h-full border border-[var(--border)] hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
            
            <div className="relative h-64 w-full overflow-hidden">
              {project.featured && (
                <div className="absolute top-2 right-2 z-10">
                  <Badge variant="secondary">Featured</Badge>
                </div>
              )}
              <div className="h-full w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${project.image}`);
                    e.currentTarget.src = "/images/placeholder-project.png";
                  }}
                />
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-start p-4">
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="primary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs text-white border-white">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {project.keyFeatures && (
                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                  <ul className="text-xs text-[var(--muted-foreground)] list-disc pl-4 space-y-1">
                    {project.keyFeatures.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
            
            <CardFooter className="pt-4 border-t border-[var(--border)]">
              <div className="flex gap-2 w-full">
                {project.demoUrl && (
                  <Link href={project.demoUrl} className="flex-1" target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm" fullWidth>
                      View Demo
                    </Button>
                  </Link>
                )}
                {project.githubUrl && (
                  <Link href={project.githubUrl} className="flex-1" target="_blank" rel="noopener noreferrer">
                    <Button variant={project.demoUrl ? "outline" : "primary"} size="sm" fullWidth>
                      {project.title === "Post-Quantum Cryptography Implementation" ? "NPM Package" : "GitHub"}
                    </Button>
                  </Link>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}