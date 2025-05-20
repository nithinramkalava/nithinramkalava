import React from 'react';
import { Section } from '../ui/section';
import { Badge } from '../ui/badge';

export function AboutSection() {
  const educationItems = [
    {
      degree: 'B.TECH. in COMPUTER SCIENCE',
      institution: 'VVIT, GUNTUR, ANDHRA PRADESH',
      period: '2021-2025',
      gpa: '8.28/10',
      description: 'My college journey where I not only mastered the CS fundamentals but also developed a passion for AI/ML and web development. Spent countless sleepless nights building projects that I actually cared about!'
    },
    {
      degree: 'CLASS 12',
      institution: 'SRI CHAITANYA JUNIOR College, GUNTUR',
      period: '2021',
      gpa: '94.7%',
      description: 'Those two intense years where I juggled PCM subjects and discovered my love for coding. Made some great friends and gained the discipline that still helps me today.'
    },
    {
      degree: 'SSC - CLASS 10',
      institution: 'BHASHYAM HIGH SCHOOL, GUNTUR',
      period: '2019',
      gpa: '9.8/10',
      description: 'Where it all began! Got my first taste of programming here and never looked back. Those were simpler times, but they laid the foundation for everything that followed.'
    }
  ];

  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="A little backstory on who I am and what makes me tick."
      subtitleAlignment="left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 border-b border-[var(--border)] pb-2">Who I Am</h3>
          <div className="space-y-4 text-[var(--muted-foreground)]">
            <p>
              Hey there! I&apos;m a software engineer who loves diving into diverse tech challenges. I&apos;ve spent the last few years getting my hands dirty with everything from full-stack web apps to AI systems and cryptography. I work primarily with Python, Java, and TypeScript, but I&apos;m always eager to pick up new languages and frameworks when the project calls for it.
            </p>
            <p>
              I just wrapped up my B.Tech degree in Computer Science this spring (2025), but I&apos;ve been building real-world apps throughout my studies. I&apos;m particularly proud of my PC Builder platform that uses AI to help people choose compatible components, and my JavaScript post-quantum crypto library that&apos;s been downloaded over 1,000 times on NPM. Those projects weren&apos;t just academic exercises—they solved actual problems I cared about.
            </p>
            <p>
              What gets me excited? Learning complex concepts quickly and turning them into something useful. I&apos;m not just interested in writing code that works; I want to create solutions that make a difference. Whether I&apos;m tweaking database performance with custom PL/pgSQL functions or designing intuitive UIs, I always keep the end user in mind.
            </p>
            <p>
              When I&apos;m not at the keyboard, you&apos;ll find me building custom PCs (yes, the GPU shortage!), tinkering with Linux distros, or catching the latest sci-fi film. I&apos;m also passionate about making tech knowledge more accessible—we all start somewhere, right?
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