import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Coffee, Code } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "5+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
    //{ icon: Calendar, label: "Years Experience", value: "5+" },
    { icon: Award, label: "Certifications", value: "3" }
  ];

  const journey = [
    {
      year: "2022 - 2026",
      title: "Studing Bachelor of Technology(B.Tech)",
      company: "College Of Engineering & Management, Kolaghat",
      description: "I am currently pursuing my Bachelor of Technology in Computer Science & Engineering from CEMK, with a CGPA of 7.9 up to the 6th semester. Over the past three years, I have built a strong foundation in core subjects, while also exploring modern technologies and practical applications through projects, internships, and personal learning."
    },
    {
      year: "2021",
      title: "Passed Higher secondary Examination",
      company: "Garalgacha High School(H.S)",
      description: "Passed Higher Secondary Examination with 75.4% in Science Stream (PCMB) from West Bengal Council of Higher Secondary Education(WBCHSE)"
    },
    {
      year: "2019",
      title: "Passed Seecondary Examination",
      company: "R.K.A.N High School(H.S)",
      description: "Passed secondary examination with 81.85% from West Bengal Board of Secondary Education(WBBSE)."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative web solutions 
            and bringing ideas to life through code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card className="glass p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Arnab, a passionate MERN stack developer currently studing bachelor of technology. 
                  My journey into web development started during my initials days in college  when I 
                  built my first website for my own interest on this fild.
                </p>
                <p>
                  What excites me most about development is the ability to transform ideas 
                  into functional, beautiful applications that solve real-world problems. 
                  I believe in writing clean, maintainable code and staying up-to-date 
                  with the latest technologies.
                </p>
                <p>
                  When I'm not coding, I’m usually playing cricket, football and having fun with my friends, playing e-football esports or attending class in college.
                </p>
              </div>
            </Card>

            {/* What I Do */}
            <Card className="glass p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Frontend Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating responsive, interactive user interfaces with React and modern CSS frameworks like tailwind and bootstrap.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Backend Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Building scalable server-side applications with Node.js, Express, and MongoDB.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Full-Stack Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      Delivering complete web applications from concept to deployment.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Stats & Timeline */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="glass p-6 text-center hover-lift">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>

            {/* Timeline */}
            <Card className="glass p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">My Journey</h3>
              <div className="space-y-6">
                {journey.map((item, index) => (
                  <div key={index} className="relative">
                    {index !== journey.length - 1 && (
                      <div className="absolute left-6 top-12 w-px h-16 bg-gradient-primary opacity-30" />
                    )}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <Badge className="bg-gradient-primary">
                          {item.year}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-sm text-primary font-medium">
                          {item.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;