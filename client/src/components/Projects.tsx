import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Music Application",
    description: "A personal music-sharing platform where users can upload, like, and manage their favorite tracks. Features trending music suggestions and interactive controls for a smooth listening experience.",
    technologies: ["Node.js", "React.js", "MongoDB"],
    features: [
      "Upload and delete personal tracks",
      "Like/unlike songs and explore trending music",
      "Responsive design for desktop and mobile",
      "Simple, user-friendly interface",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Chat Application",
    description: "A real-time messaging platform enabling secure and instant communication between users with persistent chat history and online status indicators.",
    technologies: ["React.js", "Node.js", "Socket.io", "Spring Boot", "MySQL"],
    features: [
      "One-to-one real-time messaging",
      "Online/offline user status indicators",
      "Persistent chat history in MySQL",
      "Responsive, intuitive interface",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Resume Assist",
    description: "An AI-powered tool that helps users extract and organize information from uploaded PDF resumes to generate structured professional profiles instantly.",
    technologies: ["React.js", "pdf.js"],
    features: [
      "Upload PDF resumes and auto-extract details",
      "Extract name, email, experience automatically",
      "Preview extracted data instantly",
      "Simple and clean interface",
    ],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center" data-testid="text-projects-heading">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing my passion for building functional, user-centered applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 flex flex-col hover-elevate transition-all"
              data-testid={`card-project-${index}`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      data-testid={`badge-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4 flex-1">
                <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span data-testid={`text-feature-${index}-${featureIndex}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 mt-auto pt-4 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  asChild
                  data-testid={`button-github-${index}`}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1"
                  asChild
                  data-testid={`button-demo-${index}`}
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
