import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative">
      {/* Smooth scroll container */}
      <div className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
      {/* Floating navigation dots */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          {[
            { href: "#hero", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" }
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative w-3 h-3 rounded-full border-2 border-primary/30 hover:border-primary transition-all duration-300"
              title={item.label}
            >
              <div className="absolute inset-0 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform duration-300" />
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-glass px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Background decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Index;