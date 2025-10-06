import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center" data-testid="text-experience-heading">
          Work Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Building real-world applications and gaining hands-on experience
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <Card className="p-8 md:ml-20 relative" data-testid="card-experience-0">
            <div className="absolute left-[-52px] top-8 w-8 h-8 rounded-full bg-primary border-4 border-background hidden md:block"></div>

            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1" data-testid="text-job-title">
                  Full Stack Developer Intern
                </h3>
                <p className="text-primary font-medium mb-2" data-testid="text-company">
                  EY Foundation
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span data-testid="text-duration">December 2024 - January 2025</span>
                </div>

                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span data-testid="text-responsibility-0">
                      Worked as a Full Stack Developer Intern, contributing to the design and development 
                      of interactive web applications that improved overall performance and user engagement
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span data-testid="text-responsibility-1">
                      Built and maintained responsive user interfaces using React.js and integrated 
                      RESTful APIs for dynamic data handling
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span data-testid="text-responsibility-2">
                      Optimized page load speed by 30% and enhanced UI responsiveness across different devices
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span data-testid="text-responsibility-3">
                      Implemented reusable React components to ensure cleaner, maintainable code and 
                      improve productivity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
