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
      description: 'Gained a strong foundation in computer science principles, software engineering, and programming with a focus on web development, data structures, algorithms, and cryptography.'
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
          <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
          <div className="space-y-4 text-[var(--muted-foreground)]">
            <p>
              I&apos;m a passionate Full Stack Developer and Data Scientist with expertise in building innovative 
              and user-friendly web applications. I specialize in machine learning, data analytics, 
              and post-quantum cryptography with a strong foundation in both front-end and back-end technologies.
            </p>
            <p>
              Detail-oriented and user-focused, I&apos;m committed to creating clean, efficient code that delivers 
              outstanding user experiences while solving complex problems. I enjoy tackling challenging 
              projects that allow me to combine my technical skills with creative problem-solving.
            </p>
            <p>
              Currently pursuing my B.Tech in Computer Science, I&apos;m actively working on projects 
              that push the boundaries of what&apos;s possible in web development and data science.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Interests & Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Software Development</Badge>
              <Badge variant="outline">Data Science</Badge>
              <Badge variant="outline">PC Building</Badge>
              <Badge variant="outline">Cryptography</Badge>
              <Badge variant="outline">Theaters and Films</Badge>
              <Badge variant="outline">Legos</Badge>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Education</h3>
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