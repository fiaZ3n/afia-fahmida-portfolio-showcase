import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Trophy, Users, BookOpen } from "lucide-react";

const About = () => {
  const platforms = [
    {
      name: "Codeforces",
      username: "Darb",
      url: "https://codeforces.com/profile/Darb",
      description: "Regular participant in contests and practice sessions"
    },
    {
      name: "CodeChef",
      username: "fiaz3n",
      url: "https://www.codechef.com/users/fiaz3n",
      description: "Long and short challenge competitions"
    },
    {
      name: "AtCoder",
      username: "fiaZ3n",
      url: "https://atcoder.jp/users/fiaZ3n",
      description: "Japanese competitive programming platform"
    },
    {
      name: "VJudge",
      username: "afia007",
      url: "https://vjudge.net/user/afia007",
      description: "Virtual judge for problem solving practice"
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "ICPC Participant",
      description: "Competed in the International Collegiate Programming Contest"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "DIU Math Society President",
      description: "Founded and currently leading the mathematical society"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Physics Enthusiast",
      description: "Strong interest in mathematical physics and problem solving"
    }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in competitive programming started with curiosity and has evolved 
            into a passion for algorithmic problem solving and mathematical exploration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Currently pursuing Computer Science and Engineering at Daffodil International 
                University, I've been passionate about competitive programming since my early 
                academic years. The thrill of solving complex algorithmic challenges and the 
                satisfaction of optimizing solutions drives my continuous learning.
              </p>
              <p>
                My interest extends beyond just coding - I'm deeply fascinated by the 
                mathematical foundations that underpin computer science, particularly in 
                areas where physics and mathematics intersect with computational thinking.
              </p>
              <p>
                As the founder and president of the DIU Mathematical Society, I've organized 
                numerous events, workshops, and competitions to foster a community of 
                problem solvers and mathematical thinkers.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="text-accent mt-1">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{achievement.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-accent">
            Competitive Programming Platforms
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{platform.name}</h4>
                  <p className="text-accent font-medium mb-3">@{platform.username}</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {platform.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full"
                  >
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;