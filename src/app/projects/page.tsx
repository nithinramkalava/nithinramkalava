import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

export const metadata = {
  title: "Projects - Nithin Ram Kalava",
  description: "Explore the portfolio of projects by Nithin Ram Kalava, including web applications, software tools, and innovative solutions.",
};

// Define the Project interface
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  keyFeatures: string[];
  image: string;
  demoLink: string | null;
  codeLink: string;
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: "pc-building",
      title: "PC Building Assistant Platform",
      description: "A full-stack web application that helps users build compatible PC configurations with real-time compatibility checks and recommendations based on budget and performance needs.",
      longDescription: "This comprehensive platform enables users to create PC configurations with confidence by providing real-time compatibility validation and performance metrics. The application offers personalized recommendations based on user budget and intended use case, ensuring optimal component selection. The system leverages a database of thousands of components with detailed specifications to deliver accurate guidance. Users can save and share their builds, compare alternative configurations, and receive price alerts when component prices drop.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "RESTful API", "JWT Authentication", "Redux"],
      keyFeatures: [
        "Real-time compatibility checking between PC components",
        "Budget-based component recommendations",
        "Performance benchmarking and comparison",
        "User accounts with saved builds",
        "Price tracking and notifications",
        "Community sharing of builds"
      ],
      image: "/images/projects/pc-building.png",
      demoLink: "https://pc-assistant.netlify.app",
      codeLink: "https://github.com/nithinkalava/pc-building-assistant"
    },
    {
      id: "post-quantum",
      title: "Post-Quantum Cryptography Implementation",
      description: "An npm package implementing post-quantum cryptographic algorithms for secure communication in a quantum computing era, with focus on lattice-based cryptography.",
      longDescription: "This project delivers a JavaScript implementation of several NIST-approved post-quantum cryptographic algorithms, designed to provide security against both classical and quantum computing threats. The package emphasizes ease of integration with existing applications while maintaining strong security guarantees. I focused particularly on lattice-based cryptography methods including CRYSTALS-Kyber and CRYSTALS-Dilithium, implementing them with optimizations for JavaScript environments. The library includes comprehensive documentation and example implementations to facilitate adoption by developers.",
      technologies: ["JavaScript", "Node.js", "Cryptography", "npm", "WebAssembly", "Mathematical Algorithms"],
      keyFeatures: [
        "Implementation of NIST-approved post-quantum algorithms",
        "Key encapsulation mechanisms (KEMs)",
        "Digital signature schemes",
        "Hybrid classical/post-quantum modes",
        "Comprehensive documentation and examples",
        "Performance optimizations for JavaScript environments"
      ],
      image: "/images/projects/post-quantum.png",
      demoLink: null,
      codeLink: "https://github.com/nithinkalava/post-quantum-crypto"
    },
    {
      id: "math-minute",
      title: "Math Minute",
      description: "An Android application designed for educational purposes, helping users improve their mathematical skills with timed exercises and personalized learning paths.",
      longDescription: "Math Minute is an educational Android application designed to make learning mathematics engaging and effective. The app presents users with timed math exercises across various difficulty levels, adapting to the user's proficiency. It tracks performance metrics to identify areas for improvement and customizes future exercises accordingly. The app incorporates gamification elements like achievements, streaks, and leaderboards to maintain user engagement. With a clean, intuitive interface, Math Minute makes mathematics practice accessible to learners of all ages.",
      technologies: ["Java", "Android SDK", "SQLite", "UI/UX Design", "Educational Technology"],
      keyFeatures: [
        "Adaptive difficulty based on user performance",
        "Multiple mathematics operation modes (addition, subtraction, multiplication, division)",
        "Timed challenge modes",
        "Performance tracking and analytics",
        "Offline functionality",
        "Gamification elements for engagement"
      ],
      image: "/images/projects/math-minute.png",
      demoLink: "https://play.google.com/store/apps/mathminute",
      codeLink: "https://github.com/nithinkalava/math-minute"
    },
    {
      id: "london-bus",
      title: "London Bus Safety Analysis",
      description: "A data analysis project that examines safety patterns in London's bus network, utilizing Tableau for visualization and Python for data processing.",
      longDescription: "This project analyzes safety incidents across London's bus network to identify patterns, risk factors, and potential areas for improvement. I processed and cleaned extensive transport data using Python, then created interactive visualizations with Tableau to communicate findings effectively. The analysis revealed correlations between incident rates and factors such as time of day, route characteristics, and weather conditions. The project includes recommendations for targeted safety improvements based on data insights, with potential impact on policy decisions for Transport for London.",
      technologies: ["Python", "Pandas", "NumPy", "Tableau", "Data Cleaning", "Statistical Analysis"],
      keyFeatures: [
        "Comprehensive analysis of bus safety incident data",
        "Geospatial visualization of incident hotspots",
        "Temporal pattern identification",
        "Correlation analysis with external factors",
        "Interactive dashboard for exploration",
        "Evidence-based safety improvement recommendations"
      ],
      image: "/images/projects/london-bus.png",
      demoLink: "https://public.tableau.com/londonbussafety",
      codeLink: "https://github.com/nithinkalava/london-bus-safety"
    }
  ];

  // Project component with type definition
  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="card flex flex-col h-full">
      <div className="relative w-full h-56 mb-4 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-secondary mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech, index) => (
          <span key={index} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="bg-secondary/10 text-secondary text-sm px-3 py-1 rounded-full">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
      <div className="mt-auto pt-4 flex items-center gap-4">
        <Link href={`/projects#${project.id}`} className="text-primary hover:underline">
          View Details
        </Link>
        {project.demoLink && (
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors"
          >
            Live Demo
          </a>
        )}
        {project.codeLink && (
          <a 
            href={project.codeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );

  // Project Detail component with type definition
  const ProjectDetail = ({ project }: { project: Project }) => {
    // Special handling for Math Minute image with proper typing
    const imageStyle: CSSProperties = project.id === "math-minute" 
      ? { 
          objectFit: "cover" as const, 
          objectPosition: "center",
          width: '100%',
          height: '100%',
          maxHeight: '450px'
        } 
      : { 
          width: 'auto', 
          height: 'auto', 
          maxWidth: '100%', 
          maxHeight: '450px' 
        };
    
    const imageClass = project.id === "math-minute" 
      ? "object-cover" 
      : "object-contain mx-auto";
    
    return (
      <div id={project.id} className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full rounded-lg overflow-hidden shadow-xl" style={{ maxHeight: '450px' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className={imageClass}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  style={imageStyle}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
              <p className="mb-6">{project.longDescription}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    View Live Demo
                  </a>
                )}
                {project.codeLink && (
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Here are some of the projects I&apos;ve worked on. Each project showcases different 
              skills and technologies from my toolkit.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Sections */}
      {projects.map((project, index) => (
        <section 
          key={index} 
          className={index % 2 === 0 ? "bg-background/50" : "bg-background"}
        >
          <ProjectDetail project={project} />
        </section>
      ))}

      {/* Contact CTA */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Interested in Working Together?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white">
            I&apos;m always open to discussing product design work or partnership opportunities.
          </p>
          <Link 
            href="/contact" 
            className="btn bg-white text-gray-800 hover:bg-gray-200 hover:text-black"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}