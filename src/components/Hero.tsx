import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Afia Fahmida"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-xl -z-10"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I'm{" "}
              <span className="text-accent">
                Afia Fahmida
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-white/90 mb-6">
              Competitive Programmer & CSE Student
            </h2>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Computer Science and Engineering student at Daffodil International University, 
              passionate about competitive programming, algorithm optimization, and physics. 
              President of DIU Mathematical Society, dedicated to fostering mathematical 
              excellence and problem-solving skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Github className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="text-white/60 hover:text-white transition-smooth animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;