import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
            <div className="from-background via-background to-secondary/30 absolute inset-0 bg-gradient-to-b" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="animate-fade-in mx-auto max-w-4xl text-center">
                    <div className="mb-6">
                        <span className="text-primary font-mono text-sm md:text-base">Hi, my name is</span>
                    </div>

                    <h1 className="mb-4 text-5xl font-bold md:text-7xl">Dimas Andhika</h1>

                    <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                        <span className="gradient-text">I build things for the web</span>
                    </h2>

                    <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg md:text-xl">
                        I'm a full-stack web developer specializing in building exceptional digital experiences. Currently focused on creating
                        accessible, human-centered products.
                    </p>

                    <div className="mb-12 flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="gap-2">
                            <Mail className="h-4 w-4" />
                            <a href="#contact">Get In Touch</a>
                        </Button>
                        <Button size="lg" variant="secondary" asChild>
                            <a href="#real-projects">View Projects</a>
                        </Button>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com/dmsandhika"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="h-6 w-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dmsandhika/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="mailto:dmsandhika87@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>

            <a
                href="#about"
                className="text-muted-foreground hover:text-primary absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-colors"
            >
                <ArrowDown className="h-6 w-6" />
            </a>
        </section>
    );
};

export default Hero;
