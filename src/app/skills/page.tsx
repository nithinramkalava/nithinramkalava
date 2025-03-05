import Link from "next/link";

// Define the Skill interface
interface Skill {
  name: string;
  description: string;
}

export default function SkillsPage() {
  // Define the skills object with categories and their respective skills
  const skills: {
    frontend: Skill[];
    backend: Skill[];
    database: Skill[];
    devops: Skill[];
    dataAnalytics: Skill[];
    specialization: Skill[];
  } = {
    frontend: [
      { name: "HTML5", description: "Crafting semantic and accessible web pages." },
      { name: "CSS", description: "Designing responsive and visually appealing interfaces." },
      { name: "JavaScript", description: "Building dynamic and interactive web applications." },
      { name: "TypeScript", description: "Ensuring type safety and scalability in large projects." },
      { name: "React.js", description: "Developing component-based user interfaces." },
      { name: "Next.js", description: "Optimizing server-side rendering and static site generation." },
      { name: "Redux", description: "Managing complex application state efficiently." },
      { name: "Tailwind CSS", description: "Rapidly styling components with utility-first CSS." },
    ],
    backend: [
      { name: "Node.js", description: "Creating scalable server-side applications." },
      { name: "Express.js", description: "Building RESTful APIs with ease." },
      { name: "Python", description: "Automating tasks and data processing." },
      { name: "Django", description: "Developing robust web applications quickly." },
      { name: "GraphQL", description: "Implementing flexible data fetching solutions." },
      { name: "RESTful APIs", description: "Designing and consuming RESTful services." },
      { name: "Authentication/Security", description: "Ensuring secure user authentication and data protection." },
    ],
    database: [
      { name: "MongoDB", description: "A NoSQL database for storing and managing data." },
      { name: "PostgreSQL", description: "A powerful open-source relational database." },
      { name: "MySQL", description: "A widely used open-source relational database management system." },
      { name: "Firebase", description: "A mobile and web application development platform." },
      { name: "Redis", description: "An in-memory data structure store used as a database, cache, and message broker." },
    ],
    devops: [
      { name: "Git/GitHub", description: "A version control system for tracking changes in code." },
      { name: "Docker", description: "A platform for developing, shipping, and running applications." },
      { name: "AWS", description: "A secure cloud services platform for building, deploying, and managing applications." },
      { name: "Google Cloud", description: "A platform for building, deploying, and managing applications." },
    ],
    dataAnalytics: [
      { name: "Tableau", description: "A data visualization tool for creating interactive dashboards." },
      { name: "Data Visualization", description: "The process of translating data into a visual format." },
      { name: "Data Processing", description: "The process of converting raw data into information." },
      { name: "Jupyter Notebook", description: "An interactive computational environment for data analysis." },
      { name: "Pandas/NumPy", description: "Python libraries for data manipulation and analysis." },
    ],
    specialization: [
      { name: "Post-Quantum Cryptography", description: "Cryptography that is secure against quantum computers." },
      { name: "Cryptographic Algorithms", description: "Mathematical functions used in cryptography." },
      { name: "Android Development", description: "Developing applications for the Android operating system." },
      { name: "Java", description: "A programming language used for developing applications." },
      { name: "Problem Solving", description: "The process of identifying and solving problems." },
    ],
  };

  // SkillCard component with hover effects isolated to the card
  const SkillCard = ({ name, description }: Skill) => (
    <div className="group p-4 rounded-lg transition-all duration-300 hover:bg-primary/5 transform hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-primary/20">
      <h3 className="font-bold text-xl mb-2 transition-colors duration-300 group-hover:text-primary">{name}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  );

  return (
    <div className="pt-20">
      {/* Hero Section with Enhanced Visual Appeal */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            {/* Heading with Animation */}
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary text-shadow">
                My Skills
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-8"></div>
            </div>
            {/* Description with Delayed Animation */}
            <p className="animate-fade-in-delay text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              With expertise across the entire development stack, I bring a comprehensive 
              skill set to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Frontend */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-800/20">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="bg-primary/10 p-3 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.126l-.654 7.03L12 18.178z"/>
                    </svg>
                  </span>
                  <span>Frontend Development</span>
                </h2>
                <div className="space-y-4">
                  {skills.frontend.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} description={skill.description} />
                  ))}
                </div>
              </div>
            </div>

            {/* Backend */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-800/20">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="bg-primary/10 p-3 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.998 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75-4.374-9.75-9.75-9.75zm3.866 13.5h-7.746c-.24 0-.414-.214-.366-.45.13-.642.3-1.233.51-1.755.262-.654.742-.782 1.272-.588.646.24 1.31.366 1.994.366s1.35-.126 1.994-.366c.53-.197 1.01-.066 1.272.588.21.522.382 1.113.51 1.755.046.236-.126.45-.366.45h.076zm-3.866-4.5c-1.658 0-3-1.342-3-3s1.342-3 3-3 3 1.342 3 3-1.342 3-3 3z"/>
                    </svg>
                  </span>
                  <span>Backend Development</span>
                </h2>
                <div className="space-y-4">
                  {skills.backend.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} description={skill.description} />
                  ))}
                </div>
              </div>
            </div>

            {/* Database */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-800/20">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="bg-primary/10 p-3 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2v-6zm0 8h2v2h-2v-2z"/>
                    </svg>
                  </span>
                  <span>Database & Storage</span>
                </h2>
                <div className="space-y-4">
                  {skills.database.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} description={skill.description} />
                  ))}
                </div>
              </div>
            </div>

            {/* DevOps */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-800/20">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="bg-primary/10 p-3 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.34 9.76h1.32v1.32h-1.32V9.76zm0 2.63h1.32v1.32h-1.32v-1.32zm-2.63 0h1.32v1.32H8.71v-1.32zm0-2.63h1.32v1.32H8.71V9.76zm-2.63 0h1.32v1.32H6.08V9.76zm0 2.63h1.32v1.32H6.08v-1.32zm13.16-6.57v14.4c0 .73-.6 1.32-1.32 1.32H6.08c-.73 0-1.32-.6-1.32-1.32V5.82c0-.73.6-1.32 1.32-1.32h11.84c.73 0 1.32.6 1.32 1.32zm-2.63 0H6.08v14.4h11.84V5.82h-1.31zm-3.95 2.63h1.32v1.32h-1.32V8.45zm0 2.63h1.32v1.32h-1.32v-1.32zm0 2.63h1.32v1.32h-1.32v-1.32z"/>
                    </svg>
                  </span>
                  <span>DevOps & Deployment</span>
                </h2>
                <div className="space-y-4">
                  {skills.devops.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} description={skill.description} />
                  ))}
                </div>
              </div>
            </div>

            {/* Data Analytics */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-800/20">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="bg-primary/10 p-3 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h2v7H3v-7zm4-7h2v14H7V6zm4 3h2v11h-2V9zm4 4h2v7h-2v-7zm4-8h2v15h-2V5z"/>
                    </svg>
                  </span>
                  <span>Data Analytics</span>
                </h2>
                <div className="space-y-4">
                  {skills.dataAnalytics.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} description={skill.description} />
                  ))}
                </div>
              </div>
            </div>

            {/* Specialization */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 dark:border-gray-800/20">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="bg-primary/10 p-3 rounded-xl mr-4">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4c1.86 0 3.41 1.28 3.86 3H8.14c.45-1.72 2-3 3.86-3zm-4 6.6V9h8v2.6c0 4.18-3.42 7.6-4 7.6s-4-3.42-4-7.6z"/>
                    </svg>
                  </span>
                  <span>Specializations</span>
                </h2>
                <div className="space-y-4">
                  {skills.specialization.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} description={skill.description} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Soft Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Technical expertise is only part of the equation. These interpersonal skills 
              enable me to work effectively in any team environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Communication</h3>
              <p className="text-secondary">
                Clear and effective communication with team members, stakeholders, and clients.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Team Collaboration</h3>
              <p className="text-secondary">
                Working effectively in cross-functional teams to achieve shared goals.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Problem Solving</h3>
              <p className="text-secondary">
                Analytical approach to identifying and resolving complex technical challenges.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Adaptability</h3>
              <p className="text-secondary">
                Quickly adapting to new technologies, workflows, and project requirements.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Attention to Detail</h3>
              <p className="text-secondary">
                Ensuring high-quality code and products through meticulous review and testing.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Project Management</h3>
              <p className="text-secondary">
                Effectively managing projects from concept to deployment, meeting deadlines and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Something Amazing?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white">
            Now that you know what I can do, let's discuss how my skills can benefit your project.
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