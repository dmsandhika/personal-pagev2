import { Code2, Database, Rocket } from 'lucide-react';

const About = () => {
    const skills = [
        {
            icon: <Code2 className="text-primary h-8 w-8" />,
            title: 'Clean Code & Best Practices',
            description: 'Writing reusable, maintainable, and scalable code with modern standards',
        },
        {
            icon: <Rocket className="text-primary h-8 w-8" />,
            title: 'Performance Optimization',
            description: 'Improving app speed, reducing load time, and enhancing overall efficiency',
        },
        {
            icon: <Database className="text-primary h-8 w-8" />,
            title: 'Backend & API Development',
            description: 'Building secure, reliable REST APIs and server-side logic',
        },
    ];

    return (
        <section id="about" className="bg-secondary/30 py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                        <span className="gradient-text">About Me</span>
                    </h2>

                    <div className="bg-card border-border shadow-card mb-12 rounded-lg border p-8">
                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                            Hello! I'm a passionate web developer with expertise in modern web technologies. I enjoy creating things that live on the
                            internet, whether that be websites, applications, or anything in between.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            My goal is to always build products that provide pixel-perfect, performant experiences. I focus on writing clean, elegant
                            code and building delightful user interfaces.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-card border-border hover:border-primary/50 shadow-card hover:shadow-glow rounded-lg border p-6 transition-all duration-300"
                            >
                                <div className="mb-4">{skill.icon}</div>
                                <h3 className="mb-2 text-xl font-semibold">{skill.title}</h3>
                                <p className="text-muted-foreground">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
