import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center" data-testid="text-about-heading">
          About Me
        </h2>

        <Card className="p-8 lg:p-12">
          <div className="max-w-4xl mx-auto space-y-6 text-base lg:text-lg leading-relaxed">
            <p data-testid="text-about-intro">
              Hi, I'm <span className="font-semibold">Jyothi</span>, a passionate Full-Stack Developer currently 
              pursuing my studies at <span className="font-semibold">City Engineering College</span>.
            </p>

            <p data-testid="text-about-journey">
              My journey into technology began with a deep curiosity about how websites and applications come to life. 
              What started as exploring basic web pages soon turned into a genuine passion for building dynamic, 
              user-centered applications that solve real problems.
            </p>

            <p data-testid="text-about-skills">
              Throughout my learning path, I've developed solid skills in <span className="font-semibold">React, 
              JavaScript, HTML, CSS, Spring Boot, and MySQL</span>, which allow me to build complete web solutions — 
              from beautiful interfaces to powerful backends. I love blending design and logic to create seamless 
              digital experiences.
            </p>

            <p data-testid="text-about-projects">
              I've worked on several exciting projects that helped me grow as a developer, including:
            </p>

            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">🎵</span>
                <span><span className="font-semibold">Music Application</span> – an interactive platform that allows users to upload, explore, and manage their favorite tracks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">💬</span>
                <span><span className="font-semibold">Chat Application</span> – a real-time communication app with secure message storage and a clean user experience.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">📄</span>
                <span><span className="font-semibold">Resume Assist</span> – a smart resume helper that extracts and organizes information to help users create professional profiles easily.</span>
              </li>
            </ul>

            <p data-testid="text-about-growth">
              Each project has strengthened my ability to think critically, write clean code, and deliver complete, 
              functional solutions.
            </p>

            <p data-testid="text-about-passion">
              Beyond coding, I'm passionate about learning new technologies, improving user interfaces, and turning 
              creative ideas into meaningful digital products. I believe that every line of code should make someone's 
              experience smoother, faster, and more enjoyable.
            </p>

            <p data-testid="text-about-future">
              In the future, I aspire to become a skilled full-stack engineer contributing to innovative web applications 
              that make a real impact. Technology is always evolving, and I'm excited to grow alongside it — learning, 
              building, and sharing along the way.
            </p>

            <p data-testid="text-about-personal" className="text-muted-foreground">
              When I'm not coding, you'll find me exploring new design ideas, staying up-to-date with the latest in 
              web trends, or simply brainstorming my next project.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
