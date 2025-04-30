import React from 'react';
import { Section } from '../ui/section';
import { Badge } from '../ui/badge';

export function AboutSection() {
  const educationItems = [
    {
      degree: 'B.TECH. in COMPUTER SCIENCE',
      institution: 'VVIT, GUNTUR, ANDHRA PRADESH',
      period: '2021-2025',
      gpa: '8.26/10',
      description: 'Gained a strong foundation in computer science fundamentals, data structures, algorithms, OOP, database management, and specialized knowledge in AI, ML, web technologies, and cryptography.'
    },
    {
      degree: 'CLASS 12',
      institution: 'SRI CHAITANYA JUNIOR College, GUNTUR',
      period: '2021',
      gpa: '94.7%',
      description: 'Completed high school education with a focus on Mathematics, Physics, and Chemistry.'
    },
    {
      degree: 'SSC – CLASS 10',
      institution: 'BHASHYAM HIGH SCHOOL, GUNTUR',
      period: '2019',
      gpa: '9.8/10',
      description: 'Completed secondary education with excellent academic performance.'
    }
  ];

  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Get to know more about me, my background, and what drives me."
      subtitleAlignment="left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 border-b border-[var(--border)] pb-2">Who I Am</h3>
          <div className="space-y-4 text-[var(--muted-foreground)]">
            <p>
              A passionate software engineer specializing in full-stack development, AI/ML implementation, and cryptographic security. 
              My expertise spans Python, Java, TypeScript, React, and Next.js, with a strong foundation in database design, 
              data engineering, and cloud technologies. As a B.Tech Computer Science student, I&apos;ve focused on creating robust 
              applications that solve real-world problems, from AI-powered PC building platforms to post-quantum cryptography 
              libraries with nearly 1,000 downloads.
            </p>
            <p>
              What sets me apart is my ability to quickly master complex technical domains and deliver tangible results. 
              Whether implementing machine learning algorithms, optimizing database performance with PL/pgSQL, or creating 
              educational tools for underserved communities, I approach each project with curiosity, dedication, and a focus 
              on user experience. Explore my portfolio to see live demonstrations of my projects and skills in action.
            </p>
            <p>
              Outside of coding, I enjoy building custom PCs, exploring Linux environments, and contributing to educational 
              initiatives that make technical knowledge more accessible.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 border-b border-[var(--border)] pb-2">Interests & Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Software Development</Badge>
              <Badge variant="outline">Data Science</Badge>
              <Badge variant="outline">PC Building</Badge>
              <Badge variant="outline">Cryptography</Badge>
              <Badge variant="outline">Linux Systems</Badge>
              <Badge variant="outline">Theaters and Films</Badge>
              <Badge variant="outline">Legos</Badge>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 border-b border-[var(--border)] pb-2">Education</h3>
          <div className="space-y-6">
            {educationItems.map((item, index) => (
              <div key={index} className="p-4 bg-[var(--card)] border border-[var(--border)] rounded-lg">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold">{item.degree}</h4>
                  <Badge variant="primary">{item.period}</Badge>
                </div>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">{item.institution}</p>
                <p className="mt-2 font-medium">GPA: {item.gpa}</p>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
} 