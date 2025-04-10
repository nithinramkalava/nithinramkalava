"use client";

import React, { useState } from 'react';
import { Section } from '../ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

type Skill = {
  name: string;
  icon: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  // --- MODIFIED skillCategories ARRAY ---
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "RESTful APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Auth/Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg" },
      ],
    },
    {
      title: "Database & Storage",
      skills: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      ],
    },
    {
      title: "Data Analytics",
      skills: [
        { name: "Tableau", icon: "https://static.cdnlogo.com/logos/t/16/tableau.svg" },
        { name: "Data Visualization", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktY2xpcGJvYXJkMi1kYXRhIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogIDxwYXRoIGQ9Ik05LjUgMGEuNS41IDAgMCAxIC41LjUuNS41IDAgMCAwIC41LjUuNS41IDAgMCAxIC41LjVWMmEuNS41IDAgMCAxLS41LjVoLTVBLjUuNSAwIDAgMSA1IDJ2LS41YS41LjUgMCAwIDEgLjUtLjUuNS41IDAgMCAwIC41LS41LjUuNSAwIDAgMSAuNS0uNXoiLz4KICA8cGF0aCBkPSJNMyAyLjVhLjUuNSAwIDAgMSAuNS0uNUg0YS41LjUgMCAwIDAgMC0xaC0uNUExLjUgMS41IDAgMCAwIDIgMi41djEyQTEuNSAxLjUgMCAwIDAgMy41IDE2aDlhMS41IDEuNSAwIDAgMCAxLjUtMS41di0xMkExLjUgMS41IDAgMCAwIDEyLjUgMUgxMmEuNS41IDAgMCAwIDAgMWguNWEuNS41IDAgMCAxIC41LjV2MTJhLjUuNSAwIDAgMS0uNS41aC05YS41LjUgMCAwIDEtLjUtLjV6Ii8+CiAgPHBhdGggZD0iTTEwIDdhMSAxIDAgMSAxIDIgMHY1YTEgMSAwIDEgMS0yIDB6bS02IDRhMSAxIDAgMSAxIDIgMHYxYTEgMSAwIDEgMS0yIDB6bTQtM2ExIDEgMCAwIDAtMSAxdjNhMSAxIDAgMSAwIDIgMFY5YTEgMSAwIDAgMC0xLTEiLz4KPC9zdmc+" },
        { name: "Data Processing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }, // Pandas is good for processing
        { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "Pandas/NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" }, // NumPy icon covers part of it
      ],
    },
    {
      title: "Specializations",
      skills: [
         // Consider specific icons if available, e.g., a quantum or lock icon
        { name: "Post-Quantum Cryptography", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
        { name: "Cryptographic Algorithms", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }, 
        { name: "Android Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
         // Consider a puzzle or brain icon
        { name: "Problem Solving", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      ],
    },
    {
      title: "DevOps & Deployment",
      skills: [
        { name: "Git/GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      ],
    },
  ];
  // --- END OF MODIFIED skillCategories ---

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="I've acquired a wide range of skills throughout my journey as a developer and data scientist."
      centered
    >
      <div className="w-full mx-auto">
        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                ${activeCategory === index
                  ? 'bg-[var(--primary)] text-[var(--primary-foreground)]'
                  : 'bg-[var(--card)] text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]'}
              `}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="relative bg-[var(--card)] rounded-xl border border-[var(--border)] p-8 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 text-center">{skillCategories[activeCategory].title}</h3>

            {/* Using flex wrap and justify-center for centered items */}
            <div className="flex flex-wrap justify-center gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div
                  key={`${activeCategory}-${index}`}
                  // Consistent width for better centering alignment
                  className="group flex flex-col items-center justify-center bg-[var(--background)] border border-[var(--border)] rounded-lg p-4 transition-all duration-300
                  hover:shadow-lg hover:-translate-y-1 hover:border-[var(--primary)] w-36" // Adjust width as needed
                >
                  {/* Added explicit width/height to the container div for better SVG scaling */}
                  <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-lg p-2 overflow-hidden">
                    <img
                      key={`img-${activeCategory}-${index}`}
                      src={skill.icon}
                      alt={skill.name}
                      // Ensure object-contain and dimensions for good display
                      className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
                      // Improved error handling for icons
                      onError={(e) => {
                        console.error(`Failed to load icon: ${skill.icon}`);
                        e.currentTarget.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                      }}
                      loading="eager"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section (Unchanged) */}
       <div className="mt-20" id="certifications">
         <h3 className="text-2xl font-bold text-center mb-8">Professional Certifications</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <CertificationCard
             title="Deep Learning Specialization"
             organization="DeepLearning.AI"
             date="December 2024"
             skills={["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch", "Computer Vision"]}
           />
           <CertificationCard
             title="Natural Language Processing Specialization"
             organization="DeepLearning.AI"
             date="December 2024"
             skills={["NLP", "Transformers", "Sentiment Analysis", "Language Models", "Text Classification"]}
           />
           <CertificationCard
             title="TensorFlow: Advanced Techniques Specialization"
             organization="DeepLearning.AI"
             date="April 2024"
             skills={["TensorFlow", "Custom Models", "Model Optimization", "Deployment", "Computer Vision"]}
           />
           <CertificationCard
             title="Google Advanced Data Analytics Professional Certificate"
             organization="Google"
             date="July 2023"
             skills={["Data Analytics", "Statistical Analysis", "Python", "Machine Learning", "Data Visualization"]}
           />
           <CertificationCard
             title="Google Business Intelligence Professional Certificate"
             organization="Google"
             date="July 2023"
             skills={["Business Intelligence", "ETL", "Data Modeling", "Dashboards", "Data Visualization"]}
           />
           <CertificationCard
             title="IBM Data Science Professional Certificate"
             organization="IBM"
             date="June 2024"
             skills={["Data Science", "Machine Learning", "Python", "SQL", "Data Visualization"]}
           />
           <CertificationCard
             title="Google Cybersecurity Professional Certificate"
             organization="Google"
             date="June 2024"
             skills={["Cybersecurity", "SIEM", "Network Security", "Incident Response"]}
           />
           <CertificationCard
             title="Google IT Support & Automation"
             organization="Google"
             date="November 2024"
             skills={["IT Support", "Python Automation", "Troubleshooting", "System Administration"]}
           />
           <CertificationCard
             title="Back End Development and APIs"
             organization="freeCodeCamp"
             date="February 2024"
             skills={["Node.js", "Express", "RESTful APIs", "MongoDB"]}
           />
         </div>
       </div>

       {/* Cloud Platform Experience Section (Unchanged) */}
       <div className="mt-20 relative">
         <div className="absolute inset-0 bg-[var(--primary)]/5 rounded-xl -z-10"></div>
         <div className="relative z-10 py-12 px-8">
           <h3 className="text-2xl font-bold text-center mb-6">Cloud Platform Experience</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-[var(--card)] border border-[var(--border)] rounded-lg flex items-center justify-center mb-4">
                 <img
                   key="google-cloud-icon"
                   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                   alt="Google Cloud"
                   className="w-10 h-10"
                   loading="eager"
                   onError={(e) => {
                     console.error("Failed to load Google Cloud icon");
                     e.currentTarget.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                   }}
                 />
               </div>
               <h4 className="text-lg font-semibold mb-2">Google Cloud Platform</h4>
               <p className="text-center text-[var(--muted-foreground)]">
                 Completed 50+ hands-on labs covering Machine Learning, Data Engineering, and Cloud Architecture
               </p>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 bg-[var(--card)] border border-[var(--border)] rounded-lg flex items-center justify-center mb-4">
                 <img
                   key="aws-icon"
                   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                   alt="AWS"
                   className="w-10 h-10"
                   loading="eager"
                   onError={(e) => {
                     console.error("Failed to load AWS icon");
                     e.currentTarget.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                   }}
                 />
               </div>
               <h4 className="text-lg font-semibold mb-2">AWS Cloud Platform</h4>
               <p className="text-center text-[var(--muted-foreground)]">
                 Completed AWS AIML Virtual Internship and AWS Cloud Virtual Internships
               </p>
             </div>
           </div>
         </div>
       </div>
    </Section>
  );
}

// CertificationCard component remains the same
interface CertificationCardProps {
  title: string;
  organization: string;
  date: string;
  skills: string[];
}

function CertificationCard({ title, organization, date, skills }: CertificationCardProps) {
  return (
    <Card className="border border-[var(--border)] hover:shadow-md transition-all group relative overflow-hidden">
      <div className="absolute inset-x-0 h-1 top-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
      <CardHeader className="border-b border-[var(--border)]">
        <CardTitle className="text-lg">{title}</CardTitle>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-medium">{organization}</span>
          <span className="text-xs text-[var(--muted-foreground)]">{date}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-[var(--muted)] text-[var(--muted-foreground)] rounded-full px-2 py-1 text-xs transition-colors duration-300 hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}