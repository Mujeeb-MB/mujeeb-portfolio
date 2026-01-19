import { ExternalLink, Github, } from 'lucide-react';
import { SectionHeader, Card, Button } from '../components/ui';
import { projects } from '../data/projects';

export function ProjectsSection() {
    return (
        <section id="projects" className="section-container bg-gray-50 dark:bg-gray-900/50">
            <SectionHeader
                title="Featured Projects"
                subtitle="A showcase of my work and the problems I've solved"
            />

            <div className="mt-16 max-w-6xl mx-auto space-y-8">
                {projects.map((project, index) => (
                    <div key={project.id} style={{
                        animationDelay: `${index * 150}ms`,
                    }}>
                        <Card
                            key={project.id}
                            hover
                            padding="none"
                            className="overflow-hidden group"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                {/* Project Image - Left Side */}
                                <div className="relative overflow-hidden bg-gradient-to-br from-yellow-400 to-yellow-500 dark:from-yellow-600 dark:to-yellow-700 h-64 md:h-full">
                                    {project.imageUrl ? (
                                        <>
                                            <img
                                                src={project.imageUrl}
                                                alt={`${project.name} preview`}
                                                className="w-full h-full object-cover  group-hover:scale-100 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                        </>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-white text-7xl font-bold opacity-20">
                                                {project.name.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                    {/* Number badge */}
                                    {/* <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm flex items-center justify-center font-bold text-lg text-yellow-600 dark:text-yellow-400 shadow-lg z-10">
                                        {String(index + 1).padStart(2, '0')}
                                    </div> */}
                                </div>

                                {/* Project Content - Right Side */}
                                <div className="p-6 md:p-8 flex flex-col">
                                    <div className="mb-4">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 font-display">
                                            {project.name}
                                        </h3>
                                        <p className="text-yellow-600 dark:text-yellow-400 font-medium">
                                            {project.tagline}
                                        </p>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Highlights - Compact */}
                                    <ul className="mb-4 space-y-2">
                                        {project.highlights.slice(0, 3).map((highlight, i) => (
                                            <li
                                                key={i}
                                                className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                                            >
                                                <span className="text-yellow-600 dark:text-yellow-400 mt-0.5">•</span>
                                                <span className="line-clamp-2">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Stack - Compact */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.techStack.slice(0, 5).map(tech => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 5 && (
                                            <span className="px-2.5 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                                                +{project.techStack.length - 5} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3 mt-auto">
                                        {project.liveUrl && (
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                href={project.liveUrl}
                                                icon={<ExternalLink className="w-4 h-4" />}
                                            >
                                                Live Demo
                                            </Button>
                                        )}
                                        {project.githubUrl && (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                href={project.githubUrl}
                                                icon={<Github className="w-4 h-4" />}
                                            >
                                                Code
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}