import { type ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
    children,
    className = '',
    hover = false,
    glass = false,
    padding = 'md',
}: CardProps) {
    const baseStyles =
        'rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300';

    const hoverStyles = hover
        ? 'hover:shadow-soft-lg hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer'
        : '';

    const glassStyles = glass
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md'
        : 'bg-white dark:bg-gray-900';

    const paddingStyles = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    return (
        <div
            className={`${baseStyles} ${glassStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`}
        >
            {children}
        </div>
    );
}