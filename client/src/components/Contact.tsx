import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center" data-testid="text-contact-heading">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or just say hi!"
                    rows={6}
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:ranidaviranidavi4@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 p-3 rounded-md transition-all"
                  data-testid="link-contact-email"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm">ranidaviranidavi4@gmail.com</span>
                </a>

                <a
                  href="tel:+918088712634"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 p-3 rounded-md transition-all"
                  data-testid="link-contact-phone"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm">+91 8088712634</span>
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Social Media</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/iqra-jyothi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 p-3 rounded-md transition-all"
                  data-testid="link-contact-github"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="text-sm">GitHub</span>
                </a>

                <a
                  href="https://in.linkedin.com/in/jyothi-kumari-04a80a2a5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 p-3 rounded-md transition-all"
                  data-testid="link-contact-linkedin"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
