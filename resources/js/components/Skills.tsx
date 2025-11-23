import DefaultImage from '@/assets/default.jpg';

const Skills = () => {
    const skills = [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'Tailwind CSS',
        'Docker',
        'Git',
        'MongoDB',
        'PostgreSQL',
        'Express',
        'GraphQL',
        'AWS',
        'Vercel',
    ];

    return (
        <section id="skills" className="bg-background py-20">
            <div className="container mx-auto px-4">
                <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                    <span className="gradient-text">Tech Stack</span>
                </h2>
                <p className="text-muted-foreground mb-10 text-center">Technologies and tools I use to build modern web applications</p>

                <div className="relative overflow-hidden">
                    <div className="animate-marquee flex w-max gap-10">
                        {[...skills, ...skills].map((skill, i) => (
                            <div key={i} className="flex min-w-[120px] flex-col items-center justify-center transition-all hover:-translate-y-1">
                                <img
                                    src={DefaultImage}
                                    alt={skill}
                                    className="h-10 w-10 rounded-md object-cover opacity-80 transition hover:opacity-100"
                                />

                                <span className="text-muted-foreground mt-2 text-center text-sm">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
