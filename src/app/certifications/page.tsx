import Link from "next/link";

export const metadata = {
  title: "Certifications - Nithin Ram Kalava",
  description: "Explore the professional certifications and credentials of Nithin Ram Kalava, showcasing expertise in Machine Learning, AI, Data Analytics, and more.",
};

// Define the type for certification
interface Certification {
  title: string;
  organization: string;
  period: string;
  achievements: string[];
  skills: string[];
}

export default function CertificationsPage() {
  const certifications: Certification[] = [
    {
      title: "Deep Learning Specialization",
      organization: "DeepLearning.AI",
      period: "December 2024",
      achievements: [
        "Mastered CNN, RNN architectures and optimization algorithms",
        "Implemented production-grade deep learning solutions"
      ],
      skills: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch", "Computer Vision"]
    },
    {
      title: "Natural Language Processing Specialization",
      organization: "DeepLearning.AI",
      period: "December 2024",
      achievements: [
        "Developed advanced NLP models and transformer architectures",
        "Built practical applications using modern NLP techniques"
      ],
      skills: ["NLP", "Transformers", "Sentiment Analysis", "Language Models", "Text Classification"]
    },
    {
      title: "TensorFlow: Advanced Techniques Specialization",
      organization: "DeepLearning.AI",
      period: "April 2024",
      achievements: [
        "Custom training loops, advanced computer vision models",
        "Advanced model deployment and optimization"
      ],
      skills: ["TensorFlow", "Custom Models", "Model Optimization", "Deployment", "Computer Vision"]
    },
    {
      title: "Google Advanced Data Analytics Professional Certificate",
      organization: "Google",
      period: "July 2023",
      achievements: [
        "Advanced statistical analysis and predictive modeling",
        "Led multiple end-to-end machine learning projects"
      ],
      skills: ["Data Analytics", "Statistical Analysis", "Python", "Machine Learning", "Data Visualization"]
    },
    {
      title: "Google Business Intelligence Professional Certificate",
      organization: "Google",
      period: "July 2023",
      achievements: [
        "Developed ETL pipelines and data modeling solutions",
        "Created interactive dashboards and KPI tracking systems"
      ],
      skills: ["Business Intelligence", "ETL", "Data Modeling", "Dashboards", "Data Visualization"]
    },
    {
      title: "IBM Data Science Professional Certificate",
      organization: "IBM",
      period: "June 2024",
      achievements: [
        "Machine learning model development and deployment",
        "Advanced data visualization and statistical analysis"
      ],
      skills: ["Data Science", "Machine Learning", "Python", "SQL", "Data Visualization"]
    }
  ];

  // Timeline component with proper type definitions
  const CertificationItem = ({ certification, isLast }: { certification: Certification; isLast: boolean }) => (
    <div className="relative pb-12">
      {!isLast && (
        <div className="absolute left-6 top-5 h-full w-0.5 bg-primary/30" aria-hidden="true"></div>
      )}
      <div className="flex items-start">
        <div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723a3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="ml-6 w-full">
          <div className="card w-full">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{certification.title}</h3>
                <p className="text-lg mb-3">{certification.organization}</p>
              </div>
              <div className="md:text-right">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block">
                  {certification.period}
                </span>
              </div>
            </div>
            
            <h4 className="font-bold mb-2">Key Achievements:</h4>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              {certification.achievements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            
            <h4 className="font-bold mb-2">Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill, idx) => (
                <span key={idx} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Certifications</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              My professional certifications showcase my expertise in Machine Learning, AI, 
              Data Analytics, and other technical domains.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Timeline Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="pl-6">
              {certifications.map((cert, index) => (
                <CertificationItem 
                  key={index} 
                  certification={cert}
                  isLast={index === certifications.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Specialized technical certifications and skills that enhance my professional capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
            <div className="card w-full">
              <h3 className="text-xl font-bold mb-3">Google Cybersecurity Professional Certificate</h3>
              <p className="text-lg mb-1">Google</p>
              <p className="text-secondary mb-2">June 2024</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Security information and event management (SIEM) tools</li>
                <li>Network security and incident response</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Cybersecurity</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">SIEM</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Network Security</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Incident Response</span>
              </div>
            </div>

            <div className="card w-full">
              <h3 className="text-xl font-bold mb-3">Back End Development and APIs</h3>
              <p className="text-lg mb-1">freeCodeCamp</p>
              <p className="text-secondary mb-2">February 2024</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Built RESTful APIs and microservices</li>
                <li>Database integration and server-side development</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Express</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">RESTful APIs</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Expertise Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Cloud Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">
            <div className="card w-full">
              <h3 className="text-xl font-bold mb-3">Google Cloud Platform</h3>
              <p className="text-secondary mb-4">
                Areas of Expertise: Machine Learning on GCP, Data Engineering, Cloud Architecture.
                Completed 50+ hands-on labs demonstrating practical cloud implementation skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">GCP</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">ML on Cloud</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Data Engineering</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Cloud Architecture</span>
              </div>
            </div>

            <div className="card w-full">
              <h3 className="text-xl font-bold mb-3">AWS Cloud Platform</h3>
              <p className="text-secondary mb-4">
                Completed AWS AIML Virtual Internship and AWS Cloud Virtual Internship,
                gaining hands-on experience with AWS services and cloud deployment.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">AWS</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">AIML</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Cloud Computing</span>
                <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Virtual Internship</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Activities & Interests */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Activities & Interests</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="font-bold mb-2">Theaters and Films</h3>
              <p className="text-secondary">
                Passionate about cinema and storytelling through visual media.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 4.5A2.5 2.5 0 014.5 2h11A2.5 2.5 0 0118 4.5v11a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 15.5v-11zM4.5 4a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11z" clipRule="evenodd" />
                  <path d="M6 7.5A1.5 1.5 0 017.5 6h5A1.5 1.5 0 0114 7.5v5A1.5 1.5 0 0112.5 14h-5A1.5 1.5 0 016 12.5v-5z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">PC Building</h3>
              <p className="text-secondary">
                Enjoy building custom PCs and keeping up with hardware trends.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Legos</h3>
              <p className="text-secondary">
                Creative building and design through Lego construction projects.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 001 1h12a1 1 0 001-1V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Open Source</h3>
              <p className="text-secondary">
                Contributing to open source projects and the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Collaborate?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white">
            I&apos;m always looking for exciting opportunities to apply my skills and experience. 
            Let&apos;s discuss how I can contribute to your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-gray-800 hover:bg-gray-200 hover:text-black">
              Get In Touch
            </Link>
            <Link 
              href="/Nithin Ram Kalava Resume.pdf" 
              target="_blank"
              className="btn bg-transparent border-2 border-white text-white hover:bg-white/20"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}