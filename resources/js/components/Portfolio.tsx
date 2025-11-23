import { Button } from '@/components/ui/button';
import { usePage } from '@inertiajs/react';
import { Code2, ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
    const { portfolios } = usePage().props;

    return (
        <section id="portfolio" className="py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center">
                        <div className="mb-4 flex items-center justify-center gap-2">
                            <Code2 className="text-primary h-8 w-8" />
                            <h2 className="text-3xl font-bold md:text-4xl">
                                <span className="gradient-text">Personal Portfolio</span>
                            </h2>
                        </div>
                        <p className="text-muted-foreground mx-auto max-w-2xl">
                            Personal projects and experiments showcasing creativity and technical skills
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {portfolios.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-card border-border hover:border-primary/50 shadow-card hover:shadow-glow overflow-hidden rounded-lg border transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={`/storage/${project.image}`}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="from-card via-card/50 absolute inset-0 bg-gradient-to-t to-transparent opacity-60" />
                                </div>

                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{project.description}</p>

                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.skills.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                                            <a href={project.url_github} target="_blank" rel="noopener noreferrer">
                                                <Github className="h-4 w-4" />
                                                Code
                                            </a>
                                        </Button>
                                        <Button size="sm" className="flex-1 gap-2" asChild>
                                            <a href={project.url_demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4" />
                                                Demo
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
