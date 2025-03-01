"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  const phrases = [
    "Full Stack Developer",
    "Post-Quantum Cryptography Specialist",
    "Web Application Engineer",
    "Data Analytics Enthusiast",
    "UI/UX Designer",
    "Problem Solver"
  ];
  
  const typingSpeed = 72; // Slightly slower typing
  const erasingSpeed = 40; // Slightly slower erasing
  const pauseDelay = 1600; // Slightly longer pause

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    const currentPhrase = phrases[currentPhraseIndex];
    
    const typeText = () => {
      if (text.length < currentPhrase.length) {
        setText(currentPhrase.substring(0, text.length + 1));
        timer = setTimeout(typeText, typingSpeed);
      } else {
        setIsTyping(false);
        timer = setTimeout(eraseText, pauseDelay);
      }
    };

    const eraseText = () => {
      if (text.length > 0) {
        setText(text.substring(0, text.length - 1));
        timer = setTimeout(eraseText, erasingSpeed);
      } else {
        setIsTyping(true);
        // Move to next phrase
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        timer = setTimeout(typeText, pauseDelay / 2);
      }
    };

    if (isTyping) {
      timer = setTimeout(typeText, typingSpeed);
    } else {
      timer = setTimeout(eraseText, erasingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isTyping, currentPhraseIndex, phrases]);

  return (
    <section className="h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 animate-[fadeIn_1s_ease-in]">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-[fadeIn_1.5s_ease-in]">
            Nithin Ram Kalava
          </h1>
          <div className="h-16 mb-8">
            <h2 className="text-xl md:text-2xl flex justify-center items-center min-h-[4rem]">
              <span>{text}</span>
              <span className={`inline-block w-1 h-6 bg-primary ml-1 ${isTyping ? 'animate-blink' : ''}`}></span>
            </h2>
          </div>
          <p className="text-lg text-secondary mb-10 max-w-xl mx-auto animate-[fadeIn_2s_ease-in]">
            I build responsive, performant web applications and specialize in implementing
            future-proof cryptographic solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-[fadeIn_2.5s_ease-in]">
            <Link href="/projects" className="btn">
              View My Work
            </Link>
            <Link 
              href="/contact" 
              className="btn bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Get In Touch
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="opacity-80">
              <svg 
                className="w-7 h-7 text-primary animate-[scrollArrow_2s_ease-in-out_infinite]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollArrow {
          0% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(8px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.8; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}