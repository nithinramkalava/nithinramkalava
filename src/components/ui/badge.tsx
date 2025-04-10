"use client";

import React from 'react';

type BadgeVariant = 'default' | 'outline' | 'primary' | 'secondary' | 'accent';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export function Badge({
  variant = 'default',
  className = '',
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-[var(--muted)] text-[var(--muted-foreground)]',
    outline: 'border border-[var(--border)] bg-transparent',
    primary: 'bg-[var(--primary)] text-[var(--primary-foreground)]',
    secondary: 'bg-[var(--secondary)] text-[var(--secondary-foreground)]',
    accent: 'bg-[var(--accent)] text-[var(--accent-foreground)]',
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
} 