import { Card } from "@/components/ui/card";
import {
  SiJavascript,
  SiReact,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiGit,
  SiIntellijidea,
  SiPostman,
} from "react-icons/si";
import { Database, Code2, FileSpreadsheet } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "#000000" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Java", icon: Code2, color: "#007396" },
  { name: "OOPs", icon: Database, color: "#0078D4" },
  { name: "Excel", icon: FileSpreadsheet, color: "#217346" },
];

const additionalSkills = [
  "Problem Solving",
  "Clean Code",
  "Debugging",
  "RESTful APIs",
  "Responsive Design",
  "Version Control",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center" data-testid="text-skills-heading">
          Skills & Technologies
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable web applications
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="p-6 flex flex-col items-center justify-center gap-3 hover-elevate active-elevate-2 transition-all cursor-default"
              data-testid={`card-skill-${index}`}
            >
              <skill.icon
                className="w-12 h-12"
                style={{ color: skill.color }}
              />
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </Card>
          ))}
        </div>

        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-4" data-testid="text-additional-skills-heading">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                data-testid={`badge-skill-${index}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
