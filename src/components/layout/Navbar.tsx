import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className={`rounded-2xl px-6 py-4 shadow-soft-lg transition-all duration-500 ${isScrolled
                        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-glow'
                        : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-white/30 dark:border-gray-800/30'
                        }`}
                >
                    {/* Rest of the navbar code stays the same */}
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="#hero"
                            onClick={e => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="flex items-center gap-2 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-glow transition-transform group-hover:scale-110">
                                <span className="text-gray-900 font-bold text-xl">MB</span>
                            </div>
                            <span className="text-xl font-display font-bold gradient-text hidden sm:block">
                                Mujeeb
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={e => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                    className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all font-medium"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                            <Button
                                variant="primary"
                                size="sm"
                                href="#contact"
                                onClick={e => {
                                    e.preventDefault();
                                    scrollToSection('#contact');
                                }}
                                className="hidden md:inline-flex"
                            >
                                Hire Me
                            </Button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 animate-slide-down">
                            <div className="flex flex-col gap-2">
                                {navLinks.map(link => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={e => {
                                            e.preventDefault();
                                            scrollToSection(link.href);
                                        }}
                                        className="px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all font-medium"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <Button
                                    variant="primary"
                                    size="sm"
                                    href="#contact"
                                    onClick={e => {
                                        e.preventDefault();
                                        scrollToSection('#contact');
                                    }}
                                    className="w-full mt-2"
                                >
                                    Hire Me
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}