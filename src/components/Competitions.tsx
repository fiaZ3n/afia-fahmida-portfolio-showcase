import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Calendar, Users, Target } from "lucide-react";

const Competitions = () => {
  const competitions = [
    {
      name: "ICPC Asia Dhaka Regional",
      year: "2023",
      achievement: "Regional Participant",
      description: "Represented Daffodil International University in the prestigious ICPC regional contest.",
      rank: "Top 100 Teams",
      icon: <Trophy className="h-6 w-6" />,
      type: "Team Contest"
    },
    {
      name: "Codeforces Round #847",
      year: "2023",
      achievement: "Specialist Rank",
      description: "Achieved significant rating improvement in this Division 2 contest.",
      rank: "Top 15%",
      icon: <Medal className="h-6 w-6" />,
      type: "Individual"
    },
    {
      name: "CodeChef Long Challenge",
      year: "2023",
      achievement: "4 Star Rating",
      description: "Consistent performance across multiple long challenges throughout the year.",
      rank: "Global Rank < 1000",
      icon: <Award className="h-6 w-6" />,
      type: "Individual"
    },
    {
      name: "AtCoder Beginner Contest",
      year: "2023",
      achievement: "Regular Participant",
      description: "Active participation in weekly contests, focusing on algorithmic problem solving.",
      rank: "Brown Coder",
      icon: <Target className="h-6 w-6" />,
      type: "Individual"
    },
    {
      name: "DIU Intra University Contest",
      year: "2022",
      achievement: "1st Place",
      description: "Won the university-wide programming contest organized by the CSE department.",
      rank: "Champion",
      icon: <Trophy className="h-6 w-6" />,
      type: "Individual"
    },
    {
      name: "Math Olympiad National",
      year: "2021",
      achievement: "National Finalist",
      description: "Qualified for the national round of the Bangladesh Mathematical Olympiad.",
      rank: "Top 50 Nationally",
      icon: <Medal className="h-6 w-6" />,
      type: "Individual"
    }
  ];

  const stats = [
    {
      label: "Contests Participated",
      value: "150+",
      icon: <Calendar className="h-5 w-5" />
    },
    {
      label: "Problems Solved",
      value: "800+",
      icon: <Target className="h-5 w-5" />
    },
    {
      label: "Team Competitions",
      value: "12",
      icon: <Users className="h-5 w-5" />
    },
    {
      label: "Years Active",
      value: "3+",
      icon: <Award className="h-5 w-5" />
    }
  ];

  return (
    <section id="competitions" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Competitions & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My competitive programming journey through various contests, from local university 
            competitions to international programming contests like ICPC.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center card-hover">
              <CardContent className="p-6">
                <div className="text-accent mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2 gradient-text">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competition Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map((competition, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-accent">
                    {competition.icon}
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs mb-2">
                      {competition.type}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {competition.year}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">{competition.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Badge className="mb-3">
                    {competition.achievement}
                  </Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {competition.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Medal className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-accent">
                      {competition.rank}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto card-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-accent">
                Always Learning, Always Competing
              </h3>
              <p className="text-muted-foreground mb-6">
                Competitive programming has taught me perseverance, analytical thinking, 
                and the importance of continuous learning. Each contest is an opportunity 
                to grow and challenge myself against the best minds in programming.
              </p>
              <div className="flex justify-center gap-4">
                <Badge variant="outline">Problem Solving</Badge>
                <Badge variant="outline">Algorithm Design</Badge>
                <Badge variant="outline">Time Management</Badge>
                <Badge variant="outline">Analytical Thinking</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Competitions;