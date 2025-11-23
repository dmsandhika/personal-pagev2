import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Senior Web Developer',
            company: 'Tech Company Inc.',
            period: '2022 - Present',
            description:
                'Lead development of modern web applications using React, TypeScript, and Node.js. Mentored junior developers and implemented best practices.',
        },
        {
            title: 'Full Stack Developer',
            company: 'Digital Agency Co.',
            period: '2020 - 2022',
            description:
                'Built responsive websites and web applications for various clients. Worked with cross-functional teams to deliver high-quality projects.',
        },
        {
            title: 'Junior Developer',
            company: 'Startup Labs',
            period: '2018 - 2020',
            description:
                'Developed frontend features and contributed to the design system. Learned modern web development practices and agile methodology.',
        },
    ];

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                        <span className="gradient-text">Experience</span>
                    </h2>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="border-primary/30 relative border-l-2 pb-8 pl-8 last:pb-0">
                                <div className="bg-primary shadow-glow absolute top-0 -left-[9px] h-4 w-4 rounded-full" />

                                <div className="bg-card border-border hover:border-primary/50 shadow-card rounded-lg border p-6 transition-all duration-300">
                                    <div className="mb-4 flex items-start gap-4">
                                        <div className="bg-primary/10 rounded-lg p-2">
                                            <Briefcase className="text-primary h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                                            <p className="text-primary font-medium">{exp.company}</p>
                                            <p className="text-muted-foreground text-sm">{exp.period}</p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
