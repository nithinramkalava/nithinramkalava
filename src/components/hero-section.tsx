"use client";

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
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
              Full Stack Developer & Data Scientist
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I&apos;m <span className="text-gradient">Nithin Ram Kalava</span>
            </h1>
            <p className="text-xl mb-8 text-[var(--muted-foreground)] max-w-2xl">
              I build innovative and user-friendly web applications, specializing in machine learning, 
              data analytics, and post-quantum cryptography.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#projects">
                <Button variant="primary" size="lg">
                  View My Work
                </Button>
              </Link>
              <a href="/files/Nithin Ram Kalava.pdf" download>
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
            <div className="relative">
              {/* Terminal window */}
              <div className="relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 shadow-lg max-w-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-[var(--muted-foreground)]">terminal</div>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p><span className="text-[var(--primary)]">$</span> whoami</p>
                  <p>Nithin Ram Kalava</p>
                  <p><span className="text-[var(--primary)]">$</span> skills</p>
                  <p className="whitespace-pre-wrap overflow-hidden">
                    [&apos;NextJS&apos;, &apos;React&apos;, &apos;TypeScript&apos;, &apos;Python&apos;, &apos;Data Science&apos;, &apos;Machine Learning&apos;, &apos;Cryptography&apos;]
                  </p>
                  <p><span className="text-[var(--primary)]">$</span> interests</p>
                  <p className="whitespace-pre-wrap overflow-hidden">
                    [&apos;Software Development&apos;, &apos;Data Science&apos;, &apos;PC Building&apos;, &apos;Cryptography&apos;, &apos;Theaters and Films&apos;, &apos;Legos&apos;]
                  </p>
                  <p className="animate-pulse">_</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 