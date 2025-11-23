import Image from '@/assets/default.jpg';
import { Button } from '@/components/ui/button';
import { Building2, ExternalLink } from 'lucide-react';

const RealProjects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            client: 'TechMart Inc.',
            description: 'Complete e-commerce solution with payment gateway integration, inventory management, and real-time order tracking system.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: Image,
            demo: 'https://demo.com',
            year: '2024',
        },
        {
            title: 'Corporate Website',
            client: 'Business Solutions Ltd.',
            description: 'Professional corporate website with CMS integration, multi-language support, and SEO optimization for international reach.',
            tags: ['Next.js', 'TypeScript', 'Sanity CMS'],
            image: Image,
            demo: 'https://demo.com',
            year: '2023',
        },
        {
            title: 'Restaurant Booking System',
            client: 'Gourmet Restaurant',
            description: 'Online reservation platform with table management, menu display, and automated booking confirmation system.',
            tags: ['React', 'Firebase', 'Tailwind'],
            image: Image,
            demo: 'https://demo.com',
            year: '2023',
        },
    ];

    return (
        <section id="real-projects" className="bg-secondary/30 py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center">
                        <div className="mb-4 flex items-center justify-center gap-2">
                            <Building2 className="text-primary h-8 w-8" />
                            <h2 className="text-3xl font-bold md:text-4xl">
                                <span className="gradient-text">Real Projects</span>
                            </h2>
                        </div>
                        <p className="text-muted-foreground mx-auto max-w-2xl">Production-ready applications built for real clients and businesses</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-card border-border hover:border-primary/50 shadow-card hover:shadow-glow overflow-hidden rounded-lg border transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="from-card via-card/50 absolute inset-0 bg-gradient-to-t to-transparent opacity-60" />
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-primary/90 text-primary-foreground rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                                            {project.year}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="mb-1 text-xl font-semibold">{project.title}</h3>
                                    <p className="text-primary mb-3 text-sm">{project.client}</p>
                                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{project.description}</p>

                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="h-4 w-4" />
                                            View Project
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealProjects;
