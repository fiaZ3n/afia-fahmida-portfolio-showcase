import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Trophy, BookOpen, Target, Lightbulb, ExternalLink } from "lucide-react";

const MathClub = () => {
  const achievements = [
    {
      title: "Founded DIU Mathematical Society",
      description: "Established the first mathematical society at Daffodil International University",
      year: "2022",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Organized 5+ Events",
      description: "Successfully conducted workshops, competitions, and seminars",
      year: "2022-2023",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "100+ Active Members",
      description: "Built a thriving community of mathematics enthusiasts",
      year: "Current",
      icon: <Target className="h-6 w-6" />
    }
  ];

  const activities = [
    {
      title: "Weekly Problem Solving Sessions",
      description: "Regular meetings focused on solving challenging mathematical problems and competitive programming challenges.",
      icon: <BookOpen className="h-5 w-5" />,
      frequency: "Every Thursday"
    },
    {
      title: "Math Olympiad Training",
      description: "Specialized training sessions for students preparing for national and international mathematics olympiads.",
      icon: <Trophy className="h-5 w-5" />,
      frequency: "Bi-weekly"
    },
    {
      title: "Guest Lectures",
      description: "Inviting renowned mathematicians and researchers to share insights on advanced mathematical concepts.",
      icon: <Lightbulb className="h-5 w-5" />,
      frequency: "Monthly"
    },
    {
      title: "Inter-University Competitions",
      description: "Organizing and participating in mathematical competitions with other universities across Bangladesh.",
      icon: <Users className="h-5 w-5" />,
      frequency: "Quarterly"
    }
  ];

  const goals = [
    "Foster a love for mathematics among university students",
    "Bridge the gap between theoretical mathematics and practical applications",
    "Prepare students for national and international mathematics competitions",
    "Create a supportive community for mathematical learning and research",
    "Organize workshops on advanced mathematical topics",
    "Collaborate with industry professionals on mathematical modeling projects"
  ];

  return (
    <section id="math-club" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text">DIU Mathematical Society</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the mathematical community at Daffodil International University, 
            fostering excellence in mathematics and problem-solving among students.
          </p>
        </div>

        {/* Leadership Journey */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-accent">
                My Leadership Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-accent mb-4 flex justify-center">
                      {achievement.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {achievement.description}
                    </p>
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activities and Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-accent">
            Activities & Events
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-accent mt-1">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{activity.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        {activity.description}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {activity.frequency}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Goals and Vision */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Our Goals</h3>
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-accent mt-1">
                    <Target className="h-4 w-4" />
                  </div>
                  <p className="text-muted-foreground">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Impact & Vision</h3>
            <Card className="card-hover">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  The DIU Mathematical Society has become a cornerstone of mathematical 
                  excellence at our university. Through our initiatives, we've created 
                  an environment where students can explore the beauty of mathematics 
                  beyond the classroom.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our vision is to establish DIU as a recognized center for mathematical 
                  talent in Bangladesh, producing students who excel in both theoretical 
                  understanding and practical problem-solving skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Leadership</Badge>
                  <Badge variant="outline">Community Building</Badge>
                  <Badge variant="outline">Educational Excellence</Badge>
                  <Badge variant="outline">Problem Solving</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-accent">
                Join Our Mathematical Community
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in mathematics, problem-solving, or competitive programming? 
                Join the DIU Mathematical Society and be part of our growing community 
                of mathematical enthusiasts.
              </p>
              <Button size="lg">
                <ExternalLink className="h-5 w-5 mr-2" />
                Learn More About DIU Math Society
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MathClub;