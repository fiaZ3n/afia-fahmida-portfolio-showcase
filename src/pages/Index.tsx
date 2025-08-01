import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Competitions from "@/components/Competitions";
import MathClub from "@/components/MathClub";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Competitions />
      <MathClub />
      <Contact />
    </div>
  );
};

export default Index;
