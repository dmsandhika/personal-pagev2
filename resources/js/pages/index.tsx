import About from '@/components/About';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import RealProjects from '@/components/RealProject';
import Skills from '@/components/Skills';

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <RealProjects />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;
