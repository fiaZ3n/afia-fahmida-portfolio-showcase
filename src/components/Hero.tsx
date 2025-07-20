import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ChevronDown, Calendar, Code2, Trophy } from "lucide-react";
import profilePhoto from "/lovable-uploads/835dd473-2cc9-4a44-9e07-0e2fb202b35e.png";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { icon: Code2, label: "Problems Solved", value: "800+" },
    { icon: Trophy, label: "Contests", value: "150+" },
    { icon: Calendar, label: "Years Active", value: "3+" }
  ];

  return (
    <section id="home" className="min-h-screen bg-background relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 border-2 border-primary/10 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-primary/20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Typography Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span className="text-muted-foreground uppercase tracking-wider text-sm">
                  Computer Science Student
                </span>
              </div>
              
              <h1 className="hero-title text-primary leading-none">
                AFIA
                <br />
                <span className="text-accent">FAHMIDA</span>
              </h1>
              
              <h2 className="text-2xl lg:text-4xl font-bold text-foreground/80 mb-6">
                COMPETITIVE PROGRAMMER
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Passionate about algorithmic problem solving, mathematics, and building 
              innovative solutions. President of DIU Mathematical Society.
            </p>

            {/* Stats */}
            <div className="flex gap-8 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-accent mb-2">
                    <stat.icon className="h-6 w-6 mx-auto" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
          </div>

          {/* Profile Photo Section */}
          <div className="lg:justify-self-end relative">
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -inset-8 bg-accent/10 rounded-full"></div>
              
              {/* Main Photo */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Afia Fahmida"
                  className="w-full h-full object-cover scale-150 object-center transform translate-x-1"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4">
                <Badge className="bg-accent text-accent-foreground">
                  DIU Student
                </Badge>
              </div>
              
              <div className="absolute -bottom-4 -left-4">
                <Badge variant="outline" className="bg-background">
                  ICPC Participant
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-smooth animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;