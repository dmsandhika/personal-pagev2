import About from '@/components/About';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Skills from '@/components/Skills';

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <About />
            <Skills />
            {/* 
            <Experience />
            <Education />
            <RealProjects />
            <Portfolio />
            <Contact />
            <Footer /> */}
        </div>
    );
};

export default Index;
