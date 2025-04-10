"use client";

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  bordered?: boolean;
  children: React.ReactNode;
}

export function Card({
  hoverable = false,
  bordered = false,
  className = '',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`
        bg-[var(--card)] text-[var(--card-foreground)] 
        rounded-lg overflow-hidden 
        ${hoverable ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''} 
        ${bordered ? 'border border-[var(--border)]' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 ${className}`} {...props} />;
}

export function CardTitle({ className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`text-xl font-bold ${className}`} {...props} />;
}

export function CardDescription({ className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`text-sm text-[var(--muted-foreground)] ${className}`} {...props} />;
}

export function CardContent({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
}

export function CardFooter({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-6 pt-0 flex items-center ${className}`} {...props} />;
} 