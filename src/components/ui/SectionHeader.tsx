interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    className?: string;
}

export function SectionHeader({
    title,
    subtitle,
    align = 'center',
    className = '',
}: SectionHeaderProps) {
    const alignStyles = align === 'center' ? 'text-center mx-auto' : 'text-left';

    return (
        <div className={`max-w-3xl ${alignStyles} ${className}`}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {title}
            </h2>

            {subtitle && (
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}