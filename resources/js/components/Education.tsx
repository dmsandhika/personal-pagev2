import { GraduationCap } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Computer Science',
            school: 'University of Technology',
            period: '2014 - 2018',
            description: 'Focused on software engineering, data structures, and web development. Graduated with honors.',
        },
        {
            degree: 'Professional Web Development',
            school: 'Online Coding Academy',
            period: '2018',
            description: 'Intensive bootcamp covering modern web technologies including React, Node.js, and database management.',
        },
    ];

    return (
        <section id="education" className="bg-secondary/30 py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                        <span className="gradient-text">Education</span>
                    </h2>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="border-primary/30 relative border-l-2 pb-8 pl-8 last:pb-0">
                                <div className="bg-primary shadow-glow absolute top-0 -left-[9px] h-4 w-4 rounded-full" />

                                <div className="bg-card border-border hover:border-primary/50 shadow-card rounded-lg border p-6 transition-all duration-300">
                                    <div className="mb-4 flex items-start gap-4">
                                        <div className="bg-primary/10 rounded-lg p-2">
                                            <GraduationCap className="text-primary h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                            <p className="text-primary font-medium">{edu.school}</p>
                                            <p className="text-muted-foreground text-sm">{edu.period}</p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground">{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
