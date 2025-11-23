const Skills = () => {
    const skills = [
        { name: 'React', category: 'Frontend' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'JavaScript', category: 'Language' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Next.js', category: 'Framework' },
        { name: 'Vue.js', category: 'Frontend' },
        { name: 'Express', category: 'Backend' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'Git', category: 'Tools' },
        { name: 'Docker', category: 'DevOps' },
        { name: 'REST API', category: 'Backend' },
        { name: 'GraphQL', category: 'Backend' },
        { name: 'AWS', category: 'Cloud' },
        { name: 'Vercel', category: 'Deployment' },
    ];

    // const categories = ['Frontend', 'Backend', 'Language', 'Database', 'Styling', 'Tools', 'DevOps', 'Cloud', 'Framework', 'Deployment'];

    return (
        <section id="skills" className="bg-background py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                        <span className="gradient-text">Tech Stack</span>
                    </h2>
                    <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
                        Technologies and tools I use to build modern web applications
                    </p>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group bg-card border-border hover:border-primary/50 shadow-card hover:shadow-glow flex flex-col items-center justify-center rounded-lg border p-6 text-center transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="bg-primary/10 group-hover:bg-primary/20 mb-3 flex h-12 w-12 items-center justify-center rounded-lg transition-colors">
                                    <span className="text-primary text-2xl font-bold">{skill.name.charAt(0)}</span>
                                </div>
                                <h3 className="text-foreground mb-1 font-semibold">{skill.name}</h3>
                                <span className="text-muted-foreground text-xs">{skill.category}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
