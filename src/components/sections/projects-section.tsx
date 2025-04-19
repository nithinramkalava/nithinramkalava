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
      title: "CareerPath Navigator",
      description: "A digital platform designed to empower rural students by providing comprehensive career exploration tools, educational pathway visualizations, and personalized assessments.",
      image: "/images/projects/career-path-navigator.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Icons", "Vercel"],
      demoUrl: "https://careerpath-nav.vercel.app/",
      githubUrl: "https://github.com/nithinramkalava/CareerPath-Navigator",
      featured: true,
      keyFeatures: [
        "Comprehensive career exploration system with 100+ career options",
        "Interactive educational pathway visualizations",
        "Personalized career assessment tool",
        "Engaging animations for complex information visualization",
        "Responsive design for all device sizes",
        "Optimized performance for low-bandwidth environments"
      ]
    },
    {
      title: "PQC-Vizz",
      description: "An interactive visualization platform for post-quantum cryptographic algorithms, making complex cryptographic concepts accessible and understandable.",
      image: "/images/projects/pqc-vizz.png",
      technologies: ["Next.js", "TypeScript", "pqc", "Tailwind CSS", "Vercel"],
      demoUrl: "https://pqc-vizz.vercel.app/",
      githubUrl: "https://github.com/nithinramkalava/pqc-vizz",
      featured: true,
      keyFeatures: [
        "Interactive visualizations of post-quantum algorithms",
        "Step-by-step algorithm execution demonstrations",
        "Comparative analysis between different PQC approaches",
        "Educational resources and explanations",
        "Performance metrics and security level illustrations",
        "Mobile-responsive design for learning on any device"
      ]
    },
    {
      title: "Post-Quantum Cryptography Implementation",
      description: "An npm package implementing post-quantum cryptographic algorithms for secure communication in a quantum computing era, with focus on lattice-based cryptography.",
      image: "/images/projects/post-quantum.png",
      technologies: ["JavaScript", "Node.js", "Cryptography", "npm", "Mathematical Algorithms"],
      githubUrl: "https://github.com/nithinkalava/post-quantum-crypto",
      featured: true,
      keyFeatures: [
        "Implementation of NIST-approved post-quantum algorithms",
        "Key encapsulation mechanisms (KEMs)",
        "Digital signature schemes",
        "Hybrid classical/post-quantum modes",
        "Comprehensive documentation and examples",
        "Performance optimizations for JavaScript environments"
      ]
    },
    {
      title: "Math Minute",
      description: "An Android application designed for educational purposes, helping users improve their mathematical skills with timed exercises and personalized learning paths.",
      image: "/images/projects/math-minute.png",
      technologies: ["Java", "Android SDK", "SQLite", "UI/UX Design", "Educational Technology"],
      demoUrl: "https://github.com/nithinramkalava/Math-Minute/releases/tag/debug-releases",
      githubUrl: "https://github.com/nithinramkalava/Math-Minute",
      keyFeatures: [
        "Adaptive difficulty based on user performance",
        "Multiple mathematics operation modes",
        "Timed challenge modes",
        "Performance tracking and analytics",
        "Offline functionality",
        "Gamification elements for engagement"
      ]
    },
    {
      title: "PC Building Assistant Platform",
      description: "A full-stack web application that helps users build compatible PC configurations with real-time compatibility checks and recommendations based on budget and performance needs.",
      image: "/images/projects/pc-building.png",
      technologies: ["PostgreSQL", "Next.js", "Node.js", "Python", "RESTful API"],
      demoUrl: "https://pcbuilder-ai.vercel.app/",
      githubUrl: "https://github.com/nithinramkalava/build-your-pc",
      keyFeatures: [
        "Real-time compatibility checking between PC components",
        "Budget-based component recommendations",
        "Performance benchmarking and comparison",
        "User accounts with saved builds",
        "Price tracking and notifications",
        "Community sharing of builds"
      ]
    },
    {
      title: "London Bus Safety Analysis",
      description: "A data analysis project that examines safety patterns in London's bus network, utilizing Tableau for visualization and Python for data processing.",
      image: "/images/projects/london-bus.png",
      technologies: ["Python", "Pandas", "NumPy", "Tableau", "Data Cleaning", "Statistical Analysis"],
      demoUrl: "https://public.tableau.com/app/profile/nithinramkalava/viz/LondonBusSafety_16839704914760/Dashboard",
      githubUrl: "https://public.tableau.com/app/profile/nithinramkalava/vizzes",
      keyFeatures: [
        "Comprehensive analysis of bus safety incident data",
        "Geospatial visualization of incident hotspots",
        "Temporal pattern identification",
        "Correlation analysis with external factors",
        "Interactive dashboard for exploration",
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
                      GitHub
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