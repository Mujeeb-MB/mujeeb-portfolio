import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { SectionHeader, Card, Tag } from '../components/ui';
import { experience } from '../data/experience';

export function ExperienceSection() {
    return (
        <section id="experience" className="section-container">
            <SectionHeader
                title="Work Experience"
                subtitle="My professional journey building modern web applications"
            />

            <div className="mt-16 max-w-4xl mx-auto space-y-8">
                {experience.map((exp, index) => (
                    <Card
                        key={exp.id}
                        className="relative hover:shadow-glow-lg transition-all duration-300"
                    >
                        {/* Timeline indicator */}
                        {index !== experience.length - 1 && (
                            <div className="hidden md:block absolute left-12 top-24 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-transparent dark:from-yellow-600" />
                        )}

                        <div className="flex flex-col md:flex-row gap-6" style={{ animationDelay: `${index * 150}ms` }}>
                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-glow">
                                    <Briefcase className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg text-yellow-600 dark:text-yellow-400 font-semibold">
                                            {exp.company}
                                        </p>
                                    </div>
                                    {exp.type && (
                                        <Tag variant="primary" className="mt-2 md:mt-0">
                                            {exp.type}
                                        </Tag>
                                    )}
                                </div>

                                {/* Meta info */}
                                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                                        <span>{exp.period}</span>
                                    </div>
                                    {exp.location && (
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                                            <span>{exp.location}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                {exp.description && (
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {exp.description}
                                    </p>
                                )}

                                {/* Achievements */}
                                <ul className="space-y-2 mb-4">
                                    {exp.achievements.map((achievement, i) => (
                                        <li
                                            key={i}
                                            className="text-gray-600 dark:text-gray-400 flex items-start gap-2"
                                        >
                                            <span className="text-yellow-600 dark:text-yellow-400 mt-1.5 flex-shrink-0">
                                                ▸
                                            </span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.techStack.map(tech => (
                                        <Tag key={tech} size="sm">
                                            {tech}
                                        </Tag>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}