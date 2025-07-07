'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ChatSection } from './chat-section';

export function HeroSection() {
  const [displayedWhoami, setDisplayedWhoami] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [displayedSkills, setDisplayedSkills] = useState('');
  const [displayedSkillsOutput, setDisplayedSkillsOutput] = useState('');
  const [displayedInterests, setDisplayedInterests] = useState('');
  const [displayedInterestsOutput, setDisplayedInterestsOutput] = useState('');
  const [currentAnimation, setCurrentAnimation] = useState(0);

  const whoamiCommand = 'whoami';
  const nameOutput = 'Nithin Ram Kalava';
  const skillsCommand = 'skills';
  const skillsOutput = "[\'Python\', \'Java\', \'Next.js/React\', \'AI/ML (LLMs)\', \'PostgreSQL\', \'PQC Library (NPM)\']";
  const interestsCommand = 'interests';
  const interestsOutput = "[\'Software Development\', \'Data Science\', \'PC Building\', \'Cryptography\', \'Theaters and Films\', \'Legos\']";

  useEffect(() => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    
    const animateText = () => {
      // Animate whoami command
      if (currentAnimation === 0) {
        if (displayedWhoami.length < whoamiCommand.length) {
          timeout = setTimeout(() => {
            setDisplayedWhoami(whoamiCommand.slice(0, displayedWhoami.length + 1));
          }, 100);
        } else {
          setCurrentAnimation(1);
        }
      }
      // Animate name output
      else if (currentAnimation === 1) {
        if (displayedName.length < nameOutput.length) {
          timeout = setTimeout(() => {
            setDisplayedName(nameOutput.slice(0, displayedName.length + 1));
          }, 50);
        } else {
          setTimeout(() => setCurrentAnimation(2), 500);
        }
      }
      // Animate skills command
      else if (currentAnimation === 2) {
        if (displayedSkills.length < skillsCommand.length) {
          timeout = setTimeout(() => {
            setDisplayedSkills(skillsCommand.slice(0, displayedSkills.length + 1));
          }, 100);
        } else {
          setCurrentAnimation(3);
        }
      }
      // Animate skills output
      else if (currentAnimation === 3) {
        if (displayedSkillsOutput.length < skillsOutput.length) {
          timeout = setTimeout(() => {
            setDisplayedSkillsOutput(skillsOutput.slice(0, displayedSkillsOutput.length + 1));
          }, 10);
        } else {
          setTimeout(() => setCurrentAnimation(4), 500);
        }
      }
      // Animate interests command
      else if (currentAnimation === 4) {
        if (displayedInterests.length < interestsCommand.length) {
          timeout = setTimeout(() => {
            setDisplayedInterests(interestsCommand.slice(0, displayedInterests.length + 1));
          }, 100);
        } else {
          setCurrentAnimation(5);
        }
      }
      // Animate interests output
      else if (currentAnimation === 5) {
        if (displayedInterestsOutput.length < interestsOutput.length) {
          timeout = setTimeout(() => {
            setDisplayedInterestsOutput(interestsOutput.slice(0, displayedInterestsOutput.length + 1));
          }, 10);
        }
      }
    };
    
    animateText();
    
    return () => clearTimeout(timeout);
  }, [displayedWhoami, displayedName, displayedSkills, displayedSkillsOutput, displayedInterests, displayedInterestsOutput, currentAnimation]);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid opacity-[0.02] z-0"></div>
        <div className="absolute inset-0 noise z-0"></div>
        
        {/* Gradient blob */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--primary)]/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--secondary)]/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <span className="text-[var(--primary)] font-medium mb-4">
                Software Engineer | AI/ML Developer | Full Stack Builder
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I&apos;m <span className="text-gradient">Nithin Ram Kalava</span>
              </h1>
              <p className="text-xl mb-8 text-[var(--muted-foreground)] max-w-2xl">
                Crafting intelligent, scalable software from advanced AI applications and full-stack web platforms to impactful cryptographic libraries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="#projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                >
                  <Button variant="primary" size="lg">
                    View My Work
                  </Button>
                </Link>
                <a href="/files/Nithin_Ram_s_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    Download Resume
                  </Button>
                </a>
              </div>
              
              <div className="flex mt-12 gap-6">
                <a 
                  href="https://github.com/nithinramkalava" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/nithinramkalava" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-[var(--primary)]/10 rounded-3xl transform rotate-3 animate-float"></div>
                <div className="relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-[var(--muted-foreground)]">terminal</div>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <p><span className="text-[var(--primary)]">$</span> {displayedWhoami}<span className={currentAnimation === 0 ? "animate-pulse" : "opacity-0"}>_</span></p>
                    {displayedWhoami === whoamiCommand && (
                      <p>{displayedName}<span className={currentAnimation === 1 ? "animate-pulse" : "opacity-0"}>_</span></p>
                    )}
                    {displayedName === nameOutput && (
                      <p><span className="text-[var(--primary)]">$</span> {displayedSkills}<span className={currentAnimation === 2 ? "animate-pulse" : "opacity-0"}>_</span></p>
                    )}
                    {displayedSkills === skillsCommand && (
                      <p className="whitespace-pre-wrap">
                        {displayedSkillsOutput}<span className={currentAnimation === 3 ? "animate-pulse" : "opacity-0"}>_</span>
                      </p>
                    )}
                    {displayedSkillsOutput === skillsOutput && (
                      <p><span className="text-[var(--primary)]">$</span> {displayedInterests}<span className={currentAnimation === 4 ? "animate-pulse" : "opacity-0"}>_</span></p>
                    )}
                    {displayedInterests === interestsCommand && (
                      <p className="whitespace-pre-wrap">
                        {displayedInterestsOutput}<span className={currentAnimation === 5 ? "animate-pulse" : "opacity-0"}>_</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Add the Chat Section */}
      <ChatSection />
    </>
  );
} 