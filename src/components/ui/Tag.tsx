import { type ReactNode } from 'react';

interface TagProps {
    children: ReactNode;
    variant?: 'default' | 'primary' | 'accent';
    size?: 'sm' | 'md';
    className?: string;
}

export function Tag({
    children,
    variant = 'default',
    size = 'md',
    className = '',
}: TagProps) {
    const baseStyles = 'inline-flex items-center rounded-full font-medium';

    const variants = {
        default:
            'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700',
        primary:
            'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800',
        accent:
            'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800',
    };

    const sizes = {
        sm: 'px-2.5 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm',
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
            {children}
        </span>
    );
}