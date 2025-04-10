"use client";

import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  subtitleAlignment?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

export function Section({
  id,
  title,
  subtitle,
  centered = false,
  subtitleAlignment,
  className = '',
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        py-16 md:py-24
        ${className}
      `}
      {...props}
    >
      <div className="container px-4 mx-auto">
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg text-[var(--muted-foreground)] max-w-3xl ${subtitleAlignment === 'left' ? '' : subtitleAlignment === 'right' ? 'ml-auto' : centered ? 'mx-auto' : ''}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
} 