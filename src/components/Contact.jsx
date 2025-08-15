import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arnab4581@gmail.com",
      href: "mailto:arnab4581@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9749287377",
      href: "tel:+919749287377"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dankuni, West Bengal",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Arnab-Ghosh4581",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arnab-ghosh-a05162299/",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/arnab____ghosh/",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a friendly chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass p-6">
              <h3 className="text-xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass p-6">
              <h3 className="text-xl font-bold text-primary mb-6">
                Follow Me
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`p-3 rounded-full glass hover:scale-110 transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <h3 className="text-xl font-bold text-primary">
                  Available for Work
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently available for freelance projects,Internship and full-time opportunities. 
                Let's build something amazing together!
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-glass-border focus:border-primary"
                      placeholder="Arnab Ghosh"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-glass-border focus:border-primary"
                      placeholder="xyz@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-background/50 border-glass-border focus:border-primary"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-glass-border focus:border-primary resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;