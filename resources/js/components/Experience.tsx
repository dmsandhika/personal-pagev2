import { usePage } from '@inertiajs/react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const { experiences } = usePage().props;
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
                                        <div className="bg-primary/10 flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg p-3">
                                            {exp.logo ? (
                                                <img src={`/storage/${exp.logo}`} alt={exp.company} className="h-10 w-10 object-contain" />
                                            ) : (
                                                <Briefcase className="text-primary h-7 w-7" />
                                            )}
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
