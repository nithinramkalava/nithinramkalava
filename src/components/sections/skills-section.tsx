"use client";

import React, { useState } from 'react';
import { Section } from '../ui/section';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

type Skill = {
  name: string;
  icon?: string;
  prominent?: boolean;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
  additionalSkills?: string[];
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", prominent: true },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", prominent: true },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", prominent: true },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", prominent: true },
      ],
      additionalSkills: ["SQL", "HTML5", "CSS3", "Bash", "C"]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", prominent: true },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", prominent: true },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", prominent: true },
        { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", prominent: true },
      ],
      additionalSkills: ["React Hooks", "Responsive Design", "UI/UX Design", "Accessibility", "Material UI"]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", prominent: true },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", prominent: true },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", prominent: true },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", prominent: true },
      ],
      additionalSkills: ["PL/pgSQL", "SQLite", "REST API Design", "API Integration", "Server-Side Logic"]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", prominent: true },
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", prominent: true },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", prominent: true },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", prominent: true },
      ],
      additionalSkills: ["NumPy", "LLM Integration", "Gradient Boosting", "RAG Implementation", "Feature Engineering", "Model Evaluation"]
    },
    {
      title: "Data Science & Engineering",
      skills: [
        { name: "Data Analytics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", prominent: true },
        { name: "Data Modeling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", prominent: true },
        { name: "ETL Processes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", prominent: true },
        { name: "Tableau", icon: "https://static.cdnlogo.com/logos/t/16/tableau.svg", prominent: true },
      ],
      additionalSkills: ["Web Scraping", "Matplotlib", "Seaborn", "Alteryx", "Data Visualization", "Statistical Analysis"]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", prominent: true },
        { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", prominent: true },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", prominent: true },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", prominent: true },
      ],
      additionalSkills: ["CI/CD", "Vercel", "Linux", "Version Control", "Deployment Strategies"]
    },
    {
      title: "Specialized Knowledge",
      skills: [
        { name: "Post-Quantum Cryptography", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", prominent: true },
        { name: "Android Development", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", prominent: true },
        { name: "OOP Principles", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", prominent: true },
        { name: "Data Structures", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", prominent: true },
      ],
      additionalSkills: ["NIST PQC Standards", "Algorithms", "Networking", "Problem Solving", "Software Architecture"]
    },
  ];

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="I've acquired a wide range of skills throughout my journey as a software engineer and AI/ML developer."
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

            {/* Prominent Skills with Icons */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {skillCategories[activeCategory].skills
                .filter(skill => skill.prominent)
                .map((skill, index) => (
                <div
                  key={`${activeCategory}-${index}`}
                  className="group flex flex-col items-center justify-center bg-[var(--background)] border border-[var(--border)] rounded-lg p-4 transition-all duration-300
                  hover:shadow-lg hover:-translate-y-1 hover:border-[var(--primary)] w-36"
                >
                  <div className="w-16 h-16 mb-3 flex items-center justify-center bg-white rounded-lg p-2 overflow-hidden">
                    <img
                      key={`img-${activeCategory}-${index}`}
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
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

            {/* Additional Skills as Text */}
            {skillCategories[activeCategory].additionalSkills && (
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-3 text-center">Additional Skills</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {skillCategories[activeCategory].additionalSkills?.map((skill, index) => (
                    <Badge 
                      key={`additional-${index}`}
                      variant="outline"
                      className="px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Certifications Section */}
       <div className="mt-20" id="certifications">
         <h3 className="text-2xl font-bold text-center mb-8">Professional Certifications</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <CertificationCard
             title="AWS Academy Graduate"
             organization="Amazon Web Services"
             date="2024"
             skills={["Cloud Foundations", "Cloud Architecting", "ML Foundations", "Data Engineering"]}
           />
           <CertificationCard
             title="Google Cloud Certifications"
             organization="Google"
             date="2024"
             skills={["Cloud Computing Foundations", "Vertex AI", "Prompt Design", "Gemini + Multimodal RAG"]}
           />
           <CertificationCard
             title="Deep Learning Specialization"
             organization="DeepLearning.AI"
             date="2024"
             skills={["Neural Networks", "TensorFlow", "Computer Vision", "NLP", "Sequence Models"]}
           />
           <CertificationCard
             title="Machine Learning Specialization"
             organization="DeepLearning.AI"
             date="2024"
             skills={["ML Algorithms", "Supervised Learning", "Unsupervised Learning", "Recommender Systems"]}
           />
           <CertificationCard
             title="Google Professional Certificates"
             organization="Google"
             date="2024"
             skills={["Data Analytics", "Business Intelligence", "Advanced Data Analytics", "AI Essentials"]}
           />
           <CertificationCard
             title="Google IT Professional Certificates"
             organization="Google"
             date="2024"
             skills={["IT Support", "IT Automation with Python", "Cybersecurity", "Project Management"]}
           />
           <CertificationCard
             title="IBM Data Science Professional Certificate"
             organization="IBM"
             date="2024"
             skills={["Data Science", "Machine Learning", "Python", "SQL", "Data Visualization"]}
           />
           <CertificationCard
             title="Meta Front-End Developer Certificate"
             organization="Meta"
             date="2024"
             skills={["React.js", "JavaScript", "Web Development", "UI/UX", "Responsive Design"]}
           />
           <CertificationCard
             title="Alteryx & Celonis Certifications"
             organization="Alteryx & Celonis"
             date="2024"
             skills={["Designer Core", "Data Manipulation", "Process Mining", "Data Transformation"]}
           />
         </div>
         <div className="mt-8 text-center">
           <a 
             href="https://www.linkedin.com/in/nithinramkalava"
             target="_blank"
             rel="noopener noreferrer"
             className="text-[var(--primary)] hover:underline"
           >
             View all certifications on LinkedIn →
           </a>
         </div>
       </div>

       {/* Cloud Platform Experience Section */}
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
                 Completed 50+ hands-on labs covering Machine Learning with Vertex AI, Gemini integration, 
                 data engineering, and cloud architecture
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
               <h4 className="text-lg font-semibold mb-2">Amazon Web Services</h4>
               <p className="text-center text-[var(--muted-foreground)]">
                 AWS Academy Graduate with expertise in EC2, S3, RDS, IAM and core services. Completed
                 four Academy courses including ML Foundations and Data Engineering
               </p>
             </div>
           </div>
         </div>
       </div>
    </Section>
  );
}

interface CertificationCardProps {
  title: string;
  organization: string;
  date: string;
  skills: string[];
}

function CertificationCard({ title, organization, date, skills }: CertificationCardProps) {
  return (
    <Card className="border border-[var(--border)] h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <div className="flex justify-between items-center">
          <p className="text-sm text-[var(--muted-foreground)]">{organization}</p>
          <p className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] rounded-full px-2 py-1">{date}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, idx) => (
            <span 
              key={idx} 
              className="text-xs bg-[var(--muted)] rounded-full px-2 py-1 text-[var(--muted-foreground)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}