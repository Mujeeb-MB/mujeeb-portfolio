import { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { SectionHeader, Card, IconLink } from '../components/ui';
import { Toast } from '../components/ui/Toast';
import { socialLinks, contactInfo } from '../data/contact';

export function ContactSection() {
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
        <section id="contact" className="section-container bg-gray-50 dark:bg-gray-900/50">
            <SectionHeader
                title="Get In Touch"
                subtitle="I'm always open to discussing new projects, opportunities, or collaborations"
            />

            <div className="mt-16 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <Card className="hover:shadow-glow-lg transition-all duration-300">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                            Contact Information
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                                    <button
                                        onClick={handleEmailClick}
                                        className="text-gray-900 dark:text-white hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors font-medium text-left"
                                    >
                                        {contactInfo.email}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                                    <p className="text-gray-900 dark:text-white font-medium">{contactInfo.location}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Timezone</p>
                                    <p className="text-gray-900 dark:text-white font-medium">{contactInfo.timezone}</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                Connect with me
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map(link => {
                                    const isMailto = link.icon === 'mail';

                                    if (isMailto) {
                                        return (
                                            <button
                                                key={link.name}
                                                onClick={handleEmailClick}
                                                aria-label={link.name}
                                                className="p-3 inline-flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
                                            >
                                                <Mail className="w-6 h-6" />
                                            </button>
                                        );
                                    }

                                    return (
                                        <IconLink
                                            key={link.name}
                                            href={link.url}
                                            icon={link.icon}
                                            label={link.name}
                                            size="lg"
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </Card>

                    {/* Quick Message */}
                    <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700 text-white border-none shadow-glow-lg">
                        <h3 className="text-2xl font-bold mb-4 font-display">Let's Work Together</h3>
                        <p className="text-yellow-50 mb-6 leading-relaxed">
                            {contactInfo.availability}
                        </p>
                        <p className="text-yellow-50 mb-8">
                            Whether you have a project in mind, need help with your existing
                            application, or just want to connect, I'd love to hear from you.
                        </p>
                        <button
                            onClick={handleEmailClick}
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-yellow-600 rounded-xl font-semibold hover:bg-yellow-50 transition-colors shadow-lg"
                        >
                            Send an Email
                        </button>
                    </Card>
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