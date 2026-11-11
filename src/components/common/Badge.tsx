import React from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'success' | 'outline' | 'neutral';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'secondary',
  size = 'sm',
  icon,
  className = '',
}) => {
  const variantClasses: Record<BadgeVariant, string> = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    success: 'badge-success',
    outline: 'badge-outline',
    neutral: 'badge-neutral',
  };

  const sizeClass = size === 'sm' ? 'badge-sm' : 'badge-md';

  return (
    <span className={`badge ${variantClasses[variant]} ${sizeClass} ${className}`}>
      {icon && <span className="badge-icon">{icon}</span>}
      {children}
    </span>
  );
};

