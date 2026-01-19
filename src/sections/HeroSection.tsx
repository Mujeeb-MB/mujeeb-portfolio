import { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/ui';
import { Toast } from '../components/ui/Toast';
import { heroData } from '../data/hero';
import { socialLinks, contactInfo } from '../data/contact';

export function HeroSection() {
    const [showToast, setShowToast] = useState(false);

    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleEmailClick = async (e: React.MouseEvent) => {
        e.preventDefault();

        try {
            await navigator.clipboard.writeText(contactInfo.email);
            setShowToast(true);

            setTimeout(() => {
                window.location.href = `mailto:${contactInfo.email}`;
            }, 500);
        } catch {
            // Fallback if clipboard API fails
            const textarea = document.createElement('textarea');
            textarea.value = contactInfo.email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setShowToast(true);
        }
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-yellow-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-yellow-950/10" />

            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-yellow-400/20 dark:bg-yellow-600/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-yellow-300/20 dark:bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Image */}
                    <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse-slow" />
                            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl animate-pulse-slow" />

                            {/* Image container */}
                            <div className="relative z-10">
                                <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glass border-4 border-white dark:border-gray-800 shadow-glow-lg">
                                    <img
                                        src="/profile-image.jpg"
                                        alt="Mujeeb"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            const parent = e.currentTarget.parentElement;
                                            if (parent) {
                                                parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                            <span class="text-gray-900 text-8xl font-bold">M</span>
                          </div>
                        `;
                                            }
                                        }}
                                    />
                                </div>

                                {/* Floating badge */}
                                <div className="absolute -bottom-6 -right-6 glass border border-yellow-200 dark:border-yellow-800 px-6 py-3 rounded-2xl shadow-glow animate-float">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            Available for work
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="order-2 lg:order-2">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300 text-sm font-medium mb-6 animate-fade-in">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                            </span>
                            {heroData.availability}
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up leading-tight">
                            Hi, I'm{' '}
                            <span className="gradient-text">
                                {heroData.name}
                            </span>
                        </h1>

                        {/* Tagline */}
                        <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                            {heroData.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            {heroData.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={scrollToProjects}
                                icon={<ArrowRight className="w-5 h-5" />}
                                className="shadow-glow"
                            >
                                View Projects
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                href={heroData.resumeUrl}
                                icon={<Download className="w-5 h-5" />}
                            >
                                Download Resume
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                Connect:
                            </span>
                            {socialLinks.map(link => {
                                const isMailto = link.icon === 'mail';

                                return (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        onClick={isMailto ? handleEmailClick : undefined}
                                        target={isMailto ? '_self' : '_blank'}
                                        rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        aria-label={link.name}
                                        className="p-3 rounded-xl glass border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-yellow-400 dark:hover:border-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400 hover:shadow-glow transition-all group cursor-pointer"
                                    >
                                        {link.icon === 'github' && (
                                            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        )}
                                        {link.icon === 'linkedin' && (
                                            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        )}
                                        {link.icon === 'mail' && (
                                            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        )}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-yellow-400 dark:border-yellow-500 flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-yellow-400 dark:bg-yellow-500 rounded-full animate-pulse" />
                </div>
            </div>

            {/* Toast Notification */}
            {showToast && (
                <Toast
                    message={`Email copied: ${contactInfo.email}`}
                    onClose={() => setShowToast(false)}
                />
            )}
        </section>
    );
}