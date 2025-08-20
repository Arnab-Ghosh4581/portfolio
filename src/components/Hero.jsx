import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";


const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "MERN Stack Developer";

  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, []);

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      /* Hero Content */
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              Hello, I'm
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Arnab Ghosh
            </h1>
            <div className="text-2xl md:text-4xl font-semibold text-primary min-h-[3rem] flex items-center justify-center md:justify-start">
              <span className="border-r-2 border-primary pr-2">
                {displayText}
              </span>
            </div>
          </div>
          {/* <div className="inline-block bg-[url('../../../public/my-dp.jpg')] bg-cover bg-center w-40 h-40 mt-20 rounded-full flex-shrink-0"></div> */}
        </div>
        <div className="inline-block bg-[url('./my-dp.jpg')] bg-cover bg-center w-40 h-40 mt-20 rounded-full flex-shrink-0"></div>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with MongoDB, Express.js, React, and Node.js. 
          Passionate about creating scalable web applications with modern technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
          >
            <a href="https://drive.google.com/uc?export=download&id=1510Coobgs8DP-W6OjlJEO33KMA9rcCwT">Download CV</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-16">
          <a 
            href="https://github.com/Arnab-Ghosh4581" 
            className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/arnab-ghosh-a05162299/" 
            className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:arnab4581@gmail.com" 
            className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="animate-bounce cursor-pointer hover:text-primary transition-colors"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;