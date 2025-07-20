import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Algorithm Visualizer",
      description: "Interactive web application for visualizing sorting and graph algorithms with step-by-step execution and complexity analysis.",
      technologies: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
      github: "https://github.com/afia-fahmida/algorithm-visualizer",
      demo: "https://algo-viz-afia.netlify.app",
      category: "Web Development"
    },
    {
      title: "Competitive Programming Library",
      description: "Comprehensive C++ template library containing optimized implementations of common algorithms and data structures for competitive programming.",
      technologies: ["C++", "STL", "Graph Algorithms", "Dynamic Programming"],
      github: "https://github.com/afia-fahmida/cp-library",
      category: "Competitive Programming"
    },
    {
      title: "Physics Simulation Engine",
      description: "2D physics engine built from scratch implementing rigid body dynamics, collision detection, and constraint solving for educational purposes.",
      technologies: ["Python", "Pygame", "NumPy", "OpenGL"],
      github: "https://github.com/afia-fahmida/physics-engine",
      demo: "https://physics-sim-afia.herokuapp.com",
      category: "Physics & Simulation"
    },
    {
      title: "DIU Mathematical Society Website",
      description: "Official website for the DIU Mathematical Society featuring event management, member registration, and mathematical problem archives.",
      technologies: ["Next.js", "MongoDB", "Express.js", "Node.js"],
      github: "https://github.com/afia-fahmida/diu-math-society",
      demo: "https://diumathsociety.org",
      category: "Web Development"
    },
    {
      title: "Contest Problem Setter Tool",
      description: "Automated tool for generating competitive programming problems with test cases, validator, and checker programs for contest organizers.",
      technologies: ["Python", "Flask", "SQLite", "Polygon API"],
      github: "https://github.com/afia-fahmida/contest-tool",
      category: "Competitive Programming"
    },
    {
      title: "Mathematical Formula Parser",
      description: "LaTeX to symbolic math expression parser with step-by-step solution generator for algebra and calculus problems.",
      technologies: ["Python", "SymPy", "Flask", "MathJax"],
      github: "https://github.com/afia-fahmida/math-parser",
      category: "Mathematics"
    }
  ];

  const categories = ["All", "Web Development", "Competitive Programming", "Physics & Simulation", "Mathematics"];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my skills in competitive programming, 
            web development, and mathematical problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Code2 className="h-8 w-8 text-accent" />
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  {project.demo && (
                    <Button
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/afia-fahmida"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;