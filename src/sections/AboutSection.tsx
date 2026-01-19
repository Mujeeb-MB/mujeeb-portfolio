import { SectionHeader, Card } from '../components/ui';
import { aboutData } from '../data/about';

export function AboutSection() {
    return (
        <section id="about" className="section-container">
            <SectionHeader title={aboutData.heading} />

            <div className="mt-16 max-w-3xl mx-auto">
                <Card className="hover:shadow-glow-lg transition-all duration-300">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {aboutData.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-gray-600 dark:text-gray-400 mb-6 last:mb-0 leading-relaxed text-lg"
                            >
                                {paragraph}
                            </p>
                        ))}

                        {aboutData.callToAction && (
                            <div className="mt-8 pt-6 border-t border-yellow-200 dark:border-yellow-800">
                                <p className="text-yellow-600 dark:text-yellow-400 font-semibold text-center text-lg">
                                    {aboutData.callToAction}
                                </p>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </section>
    );
}