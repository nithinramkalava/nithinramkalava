import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About - Nithin Ram Kalava",
  description: "Learn more about Nithin Ram Kalava, a Full Stack Developer specializing in web application development and post-quantum cryptography.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Get to know more about my background, skills, and what drives me as a developer.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <p className="mb-4">
                I'm Nithin Ram Kalava, a Full Stack Developer with a passion for building innovative and user-friendly web applications. My journey in tech began during my Computer Science studies, where I discovered my love for creating solutions that solve real-world problems.
              </p>
              <p className="mb-4">
                With a strong foundation in both front-end and back-end technologies, I specialize in building complete web applications from the ground up. My expertise extends to data analytics and post-quantum cryptography, fields that I find particularly fascinating.
              </p>
              <p className="mb-4">
                My approach to development is detail-oriented and user-focused. I believe in creating clean, efficient code that delivers outstanding user experiences while solving complex problems.
              </p>
              
              <div className="flex flex-wrap gap-6 mt-8">
                <div>
                  <h3 className="font-bold text-2xl text-primary mb-1">4+</h3>
                  <p className="text-secondary">Years of Experience</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-primary mb-1">20+</h3>
                  <p className="text-secondary">Projects Completed</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-primary mb-1">10+</h3>
                  <p className="text-secondary">Technologies</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 mb-10 md:mb-0">
              <div className="relative w-full max-w-md h-96 mx-auto rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about-full.jpg"
                  alt="Nithin Ram Kalava"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold mb-2 md:mb-0">B.TECH. in COMPUTER SCIENCE</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block">2021-2025</span>
              </div>
              <p className="text-lg mb-2">VVIT, GUNTUR, ANDHRA PRADESH</p>
              <p className="text-secondary">GPA: 8.26/10</p>
              <p className="mt-4">
                During my time at VVIT, I gained a strong foundation in computer science principles, 
                software engineering practices, and programming skills. I focused my studies on web development, 
                data structures, algorithms, and cryptography.
              </p>
            </div>

            <div className="card">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold mb-2 md:mb-0">CLASS 12</h3>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block">2021</span>
              </div>
              <p className="text-lg mb-2">SRI CHAITANYA JUNIOR College, GUNTUR, ANDHRA PRADESH</p>
              <p className="text-secondary">Percentage: 94.7%</p>
              <p className="mt-4">
                I completed my high school education with a focus on Mathematics, Physics, and Chemistry, 
                achieving a high score that laid the groundwork for my technical education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              I continuously enhance my skills through professional certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Advanced Machine Learning & AI</h3>
              <p className="text-secondary mb-4">
                Comprehensive training in machine learning models, neural networks, 
                and practical AI applications.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3">Data Analytics & Engineering</h3>
              <p className="text-secondary mb-4">
                Specialized training in data processing, visualization, and analytics 
                using industry-standard tools.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-3">Technical Expertise</h3>
              <p className="text-secondary mb-4">
                Advanced training in full-stack development, cloud technologies, 
                and software architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Activities & Interests</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Continuous Learning</h3>
              <p className="text-secondary">
                Always exploring new technologies and keeping up with the latest developments in tech.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Open Source</h3>
              <p className="text-secondary">
                Contributing to open source projects and collaborating with the developer community.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Tech Meetups</h3>
              <p className="text-secondary">
                Attending and sometimes speaking at local tech meetups and conferences.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Blogging</h3>
              <p className="text-secondary">
                Writing technical articles and tutorials to share knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Interested in working together?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/projects" className="btn bg-white text-gray-800 hover:bg-gray-200 hover:text-black">
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="btn bg-transparent border-2 border-white text-white hover:bg-white/20"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}