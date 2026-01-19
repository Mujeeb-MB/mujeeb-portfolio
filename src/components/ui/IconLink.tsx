import {
    Github,
    Linkedin,
    Mail,
    Twitter,
    ExternalLink,
    type LucideIcon,
} from 'lucide-react';

interface IconLinkProps {
    href: string;
    icon: string;
    label: string;
    size?: 'sm' | 'md' | 'lg';
}

const iconMap: Record<string, LucideIcon> = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
    twitter: Twitter,
    external: ExternalLink,
};

export function IconLink({ href, icon, label, size = 'md' }: IconLinkProps) {
    const Icon = iconMap[icon.toLowerCase()] || ExternalLink;

    const sizes = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
    };

    const paddingSizes = {
        sm: 'p-2',
        md: 'p-2.5',
        lg: 'p-3',
    };

    return (
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className={`${paddingSizes[size]} inline-flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
        >
            <Icon className={sizes[size]} />
        </a>
    );
}