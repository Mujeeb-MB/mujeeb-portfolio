import { SectionHeader, Card } from '../components/ui';
import { skillCategories } from '../data/skills';
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiMui,
    SiRedux,
    SiGraphql,
    SiGit,
    SiGithub,
    SiVite,
    SiNodedotjs,
    SiAmazon,
    SiJest,
    SiFigma,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import type { IconType } from 'react-icons';

// Map skill names to icons
const skillIcons: Record<string, IconType> = {
    'React.js': SiReact,
    'React': SiReact,
    'TypeScript': SiTypescript,
    'JavaScript (ES6+)': SiJavascript,
    'JavaScript': SiJavascript,
    'Tailwind CSS': SiTailwindcss,
    'HTML5': SiHtml5,
    'CSS3': SiCss3,
    'Material UI': SiMui,
    'Redux Toolkit': SiRedux,
    'Redux': SiRedux,
    'Zustand': SiReact,
    'GraphQL Basics': SiGraphql,
    'GraphQL': SiGraphql,
    'REST APIs': TbApi,
    'Git/GitHub': SiGit,
    'Git': SiGit,
    'GitHub': SiGithub,
    'Vite': SiVite,
    'Node.js Basics': SiNodedotjs,
    'Node.js': SiNodedotjs,
    'AWS Lambda': SiAmazon,
    'AWS S3': SiAmazon,
    'AWS': SiAmazon,
    'DynamoDB': SiAmazon,
    'Jest': SiJest,
    'Figma Basics': SiFigma,
    'Figma': SiFigma,
};

const getSkillIcon = (skillName: string): IconType => {
    return skillIcons[skillName] || TbApi;
};

export function SkillsSection() {
    return (
        <section id="skills" className="section-container relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

            <SectionHeader
                title="Skills & Technologies"
                subtitle="Tools and technologies I use to bring ideas to life"
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {skillCategories.map((category, index) => (
                    <Card
                        key={category.title}
                        hover
                        className="group relative overflow-hidden"
                    >
                        {/* Hover gradient effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-500/0 group-hover:from-yellow-400/10 group-hover:to-yellow-500/10 transition-all duration-500 rounded-2xl" style={{ animationDelay: `${index * 100}ms` }} />

                        <div className="relative">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-glow transition-shadow">
                                    {category.title.charAt(0)}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills with icons */}
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => {
                                    const Icon = getSkillIcon(skill);
                                    return (
                                        <div
                                            key={skill}
                                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all group/skill"
                                            style={{
                                                animationDelay: `${(index * 100) + (skillIndex * 50)}ms`,
                                            }}
                                        >
                                            <Icon className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 group-hover/skill:scale-125 transition-transform" />
                                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                                                {skill}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Animated tech stack showcase */}
            <div className="mt-16 glass-strong p-8 rounded-3xl shadow-glow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-yellow-500/10 to-yellow-600/10 animate-pulse-slow" />
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-center mb-6 gradient-text font-display">
                        Primary Tech Stack
                    </h3>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {['React', 'JavaScript', 'TypeScript', 'Material UI', 'Tailwind CSS', 'TanStack Query', 'Zustand'].map(
                            (tech) => {
                                const Icon = getSkillIcon(tech);
                                return (
                                    <div
                                        key={tech}
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-yellow-200 dark:border-yellow-800 hover:shadow-glow transition-all group"
                                    >
                                        <Icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400 group-hover:scale-125 transition-transform" />
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            {tech}
                                        </span>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}