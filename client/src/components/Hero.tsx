import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@assets/profile phto_1759730713276.jpg";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <img
            src={profilePhoto}
            alt="Jyothi Kumari"
            className="w-48 h-48 rounded-full object-cover ring-4 ring-primary/20 shadow-xl mx-auto"
            data-testid="img-profile"
          />
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold mb-4" data-testid="text-name">
          Hi, I'm Jyothi 👋
        </h1>

        <p className="text-2xl lg:text-3xl font-semibold text-primary mb-6" data-testid="text-title">
          Full Stack Developer
        </p>

        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" data-testid="text-tagline">
          An Information Science student and enthusiastic developer building sleek, 
          user-friendly web applications using React, Bootstrap, and Spring Boot. 
          Creating impactful digital solutions that combine great design with smooth functionality.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Button
            size="lg"
            onClick={() => scrollToSection("#projects")}
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#contact")}
            data-testid="button-contact"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            asChild
            data-testid="link-github"
          >
            <a href="https://github.com/iqra-jyothi" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            asChild
            data-testid="link-linkedin"
          >
            <a href="https://in.linkedin.com/in/jyothi-kumari-04a80a2a5" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            asChild
            data-testid="link-email"
          >
            <a href="mailto:ranidaviranidavi4@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            asChild
            data-testid="link-phone"
          >
            <a href="tel:+918088712634">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
