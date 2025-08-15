import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 90, icon: "🎨" },
      { name: "Tailwind CSS", level: 88, icon: "💨"},
      {name: "Bootstrap", level: 60, icon: "🅱️"}
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 92, icon: "💚" },
      { name: "Express.js", level: 88, icon: "⚡" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "RESTful APIs", level: 90, icon: "🔗" }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", level: 90, icon: "📝" },
      { name: "AWS", level: 70, icon: "☁️" },
      {name: "Java Core", level: 90, icon: "♨️"},
      {name: "DSA", level: 90, icon: "👨🏻‍💻"}
    ]
  }
];

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillCards = skillsRef.current?.querySelectorAll(".skill-card");
    skillCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My expertise spans across the full MERN stack, with additional experience 
            in modern development tools problem solving.
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <Card 
              key={skillCategory.category}
              className="skill-card glass p-8 hover-lift opacity-0"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {skillCategory.category}
                </h3>
                <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
              </div>

              <div className="space-y-6">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {tech.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${tech.level}%`,
                          transitionDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;