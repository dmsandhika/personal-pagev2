import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, Database, GitBranch, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

const About = () => {
    const [gitlabContributions, setGitlabContributions] = useState<Record<string, number>>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/gitlab-contributions')
            .then((res) => res.json())
            .then((data) => {
                setGitlabContributions(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching GitLab contributions:', err);
                setLoading(false);
            });
    }, []);

    const renderGitLabChart = () => {
        const today = new Date();
        const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

        // Adjust to start on Sunday
        const startDay = oneYearAgo.getDay();
        oneYearAgo.setDate(oneYearAgo.getDate() - startDay);

        const weeks: Array<Array<{ date: string; count: number; level: number; day: number; month: number }>> = [];
        const monthLabels: Array<{ label: string; weekIndex: number }> = [];

        let currentDate = new Date(oneYearAgo);
        let week: Array<{ date: string; count: number; level: number; day: number; month: number }> = [];
        let weekIndex = 0;
        let lastMonth = -1;

        while (currentDate <= today) {
            const dateStr = currentDate.toISOString().split('T')[0];
            const count = gitlabContributions[dateStr] || 0;
            const day = currentDate.getDay();
            const month = currentDate.getMonth();

            let level = 0;
            if (count > 0 && count <= 3) level = 1;
            else if (count > 3 && count <= 6) level = 2;
            else if (count > 6 && count <= 9) level = 3;
            else if (count > 9) level = 4;

            week.push({ date: dateStr, count, level, day, month });

            // Track month changes for labels
            if (month !== lastMonth && day === 0) {
                const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                monthLabels.push({ label: monthNames[month], weekIndex });
                lastMonth = month;
            }

            if (day === 6) {
                weeks.push([...week]);
                week = [];
                weekIndex++;
            }

            currentDate.setDate(currentDate.getDate() + 1);
        }

        if (week.length > 0) {
            weeks.push([...week]);
        }

        const colors = ['bg-gray-800/50', 'bg-orange-900/60', 'bg-orange-700/80', 'bg-orange-500', 'bg-orange-400'];

        const dayLabels = ['Mon', 'Wed', 'Fri'];

        return (
            <div className="inline-block overflow-x-auto rounded-lg bg-gray-900/50 p-6">
                {/* Month labels */}
                <div className="relative mb-3 ml-8 flex h-4">
                    {monthLabels.map((item, idx) => (
                        <span
                            key={idx}
                            className="absolute text-xs text-gray-400"
                            style={{
                                left: `${item.weekIndex * 14}px`,
                            }}
                        >
                            {item.label}
                        </span>
                    ))}
                </div>

                <div className="flex">
                    {/* Day labels */}
                    <div className="mr-2 flex flex-col justify-between pr-2 text-xs text-gray-400" style={{ height: '91px' }}>
                        <div className="h-[11px] leading-[11px]">Mon</div>
                        <div className="h-[11px] leading-[11px]">Wed</div>
                        <div className="h-[11px] leading-[11px]">Fri</div>
                    </div>

                    {/* Contribution grid */}
                    <div className="flex gap-[3px]">
                        {weeks.map((week, weekIdx) => (
                            <div key={weekIdx} className="flex flex-col gap-[3px]">
                                {[0, 1, 2, 3, 4, 5, 6].map((dayOfWeek) => {
                                    const dayData = week.find((d) => d.day === dayOfWeek);
                                    return (
                                        <div
                                            key={dayOfWeek}
                                            className={`h-[11px] w-[11px] rounded-sm border border-gray-800/50 ${dayData ? colors[dayData.level] : 'bg-gray-800/30'}`}
                                            title={dayData ? `${dayData.date}: ${dayData.count} contributions` : ''}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

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

                    {/* Git Contributor Section */}
                    <div className="mt-12">
                        <div className="mb-6 flex items-center justify-center gap-2">
                            <GitBranch className="text-primary h-7 w-7" />
                            <h3 className="text-2xl font-bold md:text-3xl">
                                <span className="gradient-text">Git Contributor</span>
                            </h3>
                        </div>

                        <Tabs defaultValue="github" className="w-full">
                            <TabsList className="mx-auto grid w-full max-w-md grid-cols-2">
                                <TabsTrigger value="github">GitHub</TabsTrigger>
                                <TabsTrigger value="gitlab">GitLab</TabsTrigger>
                            </TabsList>

                            <TabsContent value="github" className="mt-6">
                                <div className="bg-card border-border shadow-card rounded-lg border p-8">
                                    <div className="text-center">
                                        <h4 className="mb-4 text-lg font-semibold">GitHub Contributions</h4>
                                        <div className="flex flex-wrap justify-center gap-4">
                                            <img
                                                src="https://ghchart.rshah.org/2ea44f/dmsandhika"
                                                alt="GitHub Contributions"
                                                loading="lazy"
                                                className="h-auto w-full max-w-full rounded-lg bg-gray-900/50 p-4 brightness-90"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="gitlab" className="mt-6">
                                <div className="bg-card border-border shadow-card rounded-lg border p-8">
                                    <div className="text-center">
                                        <h4 className="mb-4 text-lg font-semibold">GitLab Contributions</h4>
                                        <div className="flex flex-wrap justify-center gap-4">
                                            {loading ? <div className="text-muted-foreground">Loading...</div> : renderGitLabChart()}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
