import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
    image: "🛒",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    features: [
      "User authentication & authorization",
      "Shopping cart & wishlist",
      "Payment processing with Stripe",
      "Admin dashboard",
      "Order tracking"
    ],
    github: "#",
    live: "#",
    status: "Completed"
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "Modern chat application with real-time messaging, file sharing, and group chats. Implements Socket.io for instant communication.",
    image: "💬",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"],
    features: [
      "Real-time messaging",
      "File & image sharing",
      "Group chat functionality",
      "Message encryption",
      "User presence indicators"
    ],
    github: "#",
    live: "#",
    status: "Completed"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative project management tool with drag-and-drop boards, team collaboration, and progress tracking features.",
    image: "📋",
    technologies: ["React", "Express.js", "MongoDB", "Redux", "Material-UI"],
    features: [
      "Drag & drop task boards",
      "Team collaboration",
      "Progress tracking",
      "File attachments",
      "Due date reminders"
    ],
    github: "#",
    live: "#",
    status: "In Progress"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Interactive weather application with location-based forecasts, historical data, and beautiful data visualizations.",
    image: "🌤️",
    technologies: ["React", "Node.js", "OpenWeather API", "Chart.js", "Geolocation"],
    features: [
      "Current weather data",
      "7-day forecast",
      "Interactive charts",
      "Location search",
      "Historical weather data"
    ],
    github: "#",
    live: "#",
    status: "Completed"
  }
];

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = projectsRef.current?.querySelectorAll(".project-card");
    projectCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating proficiency in full-stack 
            development and modern web technologies.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="project-card glass overflow-hidden hover-lift opacity-0 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-glass-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className="mt-1"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-primary/10 border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Features */}
              <div className="p-6">
                <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/20 hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/20 hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;