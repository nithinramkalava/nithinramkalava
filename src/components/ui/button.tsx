"use client";

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/80',
    secondary: 'bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]/80',
    outline: 'bg-transparent border border-[var(--border)] hover:bg-[var(--muted)] text-[var(--foreground)] hover:text-[var(--foreground)]',
    ghost: 'bg-transparent hover:bg-[var(--muted)] text-[var(--foreground)] hover:text-[var(--foreground)]',
    link: 'bg-transparent underline-offset-4 hover:underline text-[var(--primary)]',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-medium rounded-md transition-colors
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]
        disabled:opacity-50 disabled:pointer-events-none
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
} 