import Hero from "./components/Hero";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Section Preview */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                I&apos;m an enthusiastic Data Scientist and Full-Stack Developer with a passionate focus on machine learning, 
                crafting robust data pipelines, and developing intelligent technological solutions. Committed to 
                leveraging cutting-edge technologies to transform raw data into meaningful insights while maintaining 
                the highest standards of data privacy and security.
              </p>
              <p className="text-lg mb-6">
                With a B.Tech in Computer Science and a variety of professional certifications, 
                I approach problems with analytical thinking and creative solutions.
              </p>
              <Link href="/about" className="btn">
                Learn More About Me
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[413px] h-[531px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about.jpg"
                  alt="Nithin Ram Kalava coding"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 413px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </div>

          <div className="grid">
            {/* CareerPath Navigator */}
            <div className="card">
              <h3 className="text-xl font-bold mb-3">CareerPath Navigator</h3>
              <p className="text-secondary mb-4">
                A digital platform designed to empower rural students by providing comprehensive 
                career exploration tools and educational pathway visualizations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Next.js</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">TypeScript</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Tailwind CSS</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Framer Motion</span>
              </div>
              <Link href="/projects#career-path-navigator" className="text-primary hover:underline">
                Learn more →
              </Link>
            </div>

            {/* PQC-Vizz */}
            <div className="card">
              <h3 className="text-xl font-bold mb-3">PQC-Vizz</h3>
              <p className="text-secondary mb-4">
                An interactive visualization platform for post-quantum cryptographic algorithms, 
                making complex cryptographic concepts accessible and understandable.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">React</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">D3.js</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">TypeScript</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Web Crypto API</span>
              </div>
              <Link href="/projects#pqc-vizz" className="text-primary hover:underline">
                Learn more →
              </Link>
            </div>

            {/* Post-Quantum Cryptography */}
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Post-Quantum Cryptography Package</h3>
              <p className="text-secondary mb-4">
                An npm package implementing post-quantum cryptographic algorithms for 
                secure communication in a quantum computing era.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Cryptography</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">npm</span>
              </div>
              <Link href="/projects#post-quantum" className="text-primary hover:underline">
                Learn more →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="btn">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto">
              I have expertise in various technologies and tools across the development stack.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {/* Frontend */}
            <div className="text-center group/skill hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-primary/10 p-6 rounded-lg mb-4 flex items-center justify-center group-hover/skill:bg-primary/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.126l-.654 7.03L12 18.178z"/>
                  <path d="M3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434 12 19.894l5.51-1.46L18.812 4H5.188z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Frontend</h3>
              <p className="text-gray-500 dark:text-gray-500 text-sm">HTML5, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Excel Macros</p>
            </div>

            {/* Backend */}
            <div className="text-center group/skill hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-primary/10 p-6 rounded-lg mb-4 flex items-center justify-center group-hover/skill:bg-primary/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.998 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75-4.374-9.75-9.75-9.75zm3.866 13.5h-7.746c-.24 0-.414-.214-.366-.45.13-.642.3-1.233.51-1.755.262-.654.742-.782 1.272-.588.646.24 1.31.366 1.994.366s1.35-.126 1.994-.366c.53-.197 1.01-.066 1.272.588.21.522.382 1.113.51 1.755.046.236-.126.45-.366.45h.076zm-3.866-4.5c-1.658 0-3-1.342-3-3s1.342-3 3-3 3 1.342 3 3-1.342 3-3 3z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Backend</h3>
              <p className="text-gray-500 dark:text-gray-500 text-sm">Node.js, Express.js, Python, Django, GraphQL, RESTful APIs, .NET C#, C</p>
            </div>

            {/* Database */}
            <div className="text-center group/skill hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-primary/10 p-6 rounded-lg mb-4 flex items-center justify-center group-hover/skill:bg-primary/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2v-6zm0 8h2v2h-2v-2z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Database</h3>
              <p className="text-gray-500 dark:text-gray-500 text-sm">PostgreSQL, MongoDB, MySQL, Firebase, Oracle, PL/SQL</p>
            </div>

            {/* Tools */}
            <div className="text-center group/skill hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-primary/10 p-6 rounded-lg mb-4 flex items-center justify-center group-hover/skill:bg-primary/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.34 9.76h1.32v1.32h-1.32V9.76zm0 2.63h1.32v1.32h-1.32v-1.32zm-2.63 0h1.32v1.32H8.71v-1.32zm0-2.63h1.32v1.32H8.71V9.76zm-2.63 0h1.32v1.32H6.08V9.76zm0 2.63h1.32v1.32H6.08v-1.32zm13.16-6.57v14.4c0 .73-.6 1.32-1.32 1.32H6.08c-.73 0-1.32-.6-1.32-1.32V5.82c0-.73.6-1.32 1.32-1.32h11.84c.73 0 1.32.6 1.32 1.32zm-2.63 0H6.08v14.4h11.84V5.82h-1.31zm-3.95 2.63h1.32v1.32h-1.32V8.45zm0 2.63h1.32v1.32h-1.32v-1.32zm0 2.63h1.32v1.32h-1.32v-1.32z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Tools & Cloud</h3>
              <p className="text-gray-500 dark:text-gray-500 text-sm">Git/GitHub, Docker, AWS, Google Cloud, Tableau, Jupyter, Pandas/NumPy</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/skills" className="btn">
              Explore My Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let&apos;s Work Together</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white">
            I&apos;m currently available for freelance work and exciting opportunities. 
            If you have a project that needs my expertise, feel free to reach out.
          </p>
          <Link 
            href="/contact" 
            className="btn bg-white text-gray-800 hover:bg-gray-200 hover:text-black"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
