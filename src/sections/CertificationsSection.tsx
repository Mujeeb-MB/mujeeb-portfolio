import { Award, ExternalLink } from 'lucide-react';
import { SectionHeader, Card, Button } from '../components/ui';
import { certifications } from '../data/certifications';

export function CertificationsSection() {
    if (certifications.length === 0) return null;

    return (
        <section id="certifications" className="section-container bg-gray-50 dark:bg-gray-900/50">
            <SectionHeader
                title="Certifications & Achievements"
                subtitle="Continuous learning and professional development"
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {certifications.map((cert) => (
                    <Card
                        key={cert.id}
                        hover
                        className="group hover:shadow-glow-lg transition-all duration-300"
                    >
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all">
                                    <Award className="w-7 h-7 text-white" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 font-display">
                                    {cert.name}
                                </h3>
                                <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-2">
                                    {cert.issuer}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    {cert.date}
                                </p>
                                {cert.description && (
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                        {cert.description}
                                    </p>
                                )}
                                {cert.credentialUrl && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        href={cert.credentialUrl}
                                        icon={<ExternalLink className="w-4 h-4" />}
                                    >
                                        View Credential
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}