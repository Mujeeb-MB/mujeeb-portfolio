import { useState } from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { socialLinks, contactInfo } from '../../data/contact';
import { Toast } from '../ui/Toast';

export function Footer() {
    const currentYear = new Date().getFullYear();
    const [showToast, setShowToast] = useState(false);

    const handleEmailClick = async (e: React.MouseEvent) => {
        e.preventDefault();

        try {
            await navigator.clipboard.writeText(contactInfo.email);
            setShowToast(true);

            setTimeout(() => {
                window.location.href = `mailto:${contactInfo.email}`;
            }, 500);
        } catch {
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
        <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-glow">
                                <span className="text-gray-900 font-bold text-xl">MB</span>
                            </div>
                            <h3 className="text-xl font-bold gradient-text font-display">
                                Mujeeb
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Frontend Developer crafting modern web experiences with React and TypeScript.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 font-display">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {['About', 'Projects', 'Experience', 'Contact'].map(link => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 font-display">
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map(link => {
                                const isMailto = link.icon === 'mail';

                                if (isMailto) {
                                    return (
                                        <button
                                            key={link.name}
                                            onClick={handleEmailClick}
                                            aria-label={link.name}
                                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                                        >
                                            <Mail className="w-5 h-5" />
                                        </button>
                                    );
                                }

                                return (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.name}
                                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                                    >
                                        {link.icon === 'github' && <Github className="w-5 h-5" />}
                                        {link.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            © {currentYear} Mohammed Mujeeb. All rights reserved.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
                            Built with <Heart className="w-4 h-4 text-yellow-500 fill-yellow-500" /> using React &
                            Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>

            {/* Toast Notification */}
            {showToast && (
                <Toast
                    message={`Email copied: ${contactInfo.email}`}
                    onClose={() => setShowToast(false)}
                />
            )}
        </footer>
    );
}