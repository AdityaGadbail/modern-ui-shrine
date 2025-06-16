
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const skills = [
    { name: "Frontend Development", icon: Code, level: 90, color: "from-violet-500 to-purple-600" },
    { name: "UI/UX Design", icon: Palette, level: 85, color: "from-pink-500 to-rose-600" },
    { name: "Mobile Development", icon: Smartphone, level: 80, color: "from-orange-500 to-amber-600" },
    { name: "Backend Development", icon: Code, level: 75, color: "from-emerald-500 to-cyan-600" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      live: "#",
      gradient: "from-orange-500 to-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-cyan-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-violet-200/50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-cyan-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">About</a>
              <a href="#skills" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">Skills</a>
              <a href="#projects" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">Projects</a>
              <a href="#contact" className="text-slate-700 hover:text-violet-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-violet-400 via-cyan-500 to-pink-500 p-1 animate-pulse shadow-xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">JD</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-700 via-cyan-700 to-pink-700 bg-clip-text text-transparent animate-fade-in">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-8 animate-fade-in font-semibold">
            Full Stack Developer & UI/UX Designer
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed">
            I create beautiful, functional, and user-centered digital experiences that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-violet-500 via-cyan-600 to-pink-600 hover:from-violet-600 hover:via-cyan-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white shadow-md hover:shadow-lg transition-all">
              Download CV
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <a href="#" className="text-slate-500 hover:text-violet-600 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="text-slate-500 hover:text-pink-600 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-slate-500 hover:text-orange-600 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-slate-400" size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/70">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 via-cyan-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Passionate Developer with 5+ Years Experience
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I'm a full-stack developer with a passion for creating innovative digital solutions. 
                My journey began 5 years ago, and since then, I've worked with startups and 
                established companies to bring their visions to life.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                I specialize in modern web technologies and have a keen eye for design. 
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or enjoying a good cup of coffee.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "Python", "AWS", "MongoDB"].map((tech, index) => {
                  const colors = [
                    "bg-violet-100 text-violet-700 border-violet-200",
                    "bg-cyan-100 text-cyan-700 border-cyan-200",
                    "bg-pink-100 text-pink-700 border-pink-200",
                    "bg-orange-100 text-orange-700 border-orange-200",
                    "bg-emerald-100 text-emerald-700 border-emerald-200",
                    "bg-rose-100 text-rose-700 border-rose-200"
                  ];
                  return (
                    <span key={tech} className={`px-3 py-1 rounded-full text-sm border font-medium ${colors[index % colors.length]}`}>
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-violet-100 via-cyan-100 to-pink-100 backdrop-blur-sm border border-violet-200 p-8 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-slate-600 font-medium">Your photo here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 via-cyan-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-white/90 border-violet-200 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-slate-800">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-slate-600 text-sm font-medium">{skill.level}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/70">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 via-cyan-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/95 border-violet-200 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => {
                      const tagColors = [
                        "bg-violet-100 text-violet-700 border-violet-200",
                        "bg-pink-100 text-pink-700 border-pink-200",
                        "bg-orange-100 text-orange-700 border-orange-200",
                        "bg-cyan-100 text-cyan-700 border-cyan-200"
                      ];
                      return (
                        <span key={tag} className={`px-2 py-1 rounded text-xs border font-medium ${tagColors[tagIndex % tagColors.length]}`}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 shadow-md text-white`}>
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 via-cyan-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Let's work together
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center">
                    <Mail className="text-white" size={16} />
                  </div>
                  <span className="text-slate-600">john.doe@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center">
                    <Github className="text-white" size={16} />
                  </div>
                  <span className="text-slate-600">github.com/johndoe</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 flex items-center justify-center">
                    <Linkedin className="text-white" size={16} />
                  </div>
                  <span className="text-slate-600">linkedin.com/in/johndoe</span>
                </div>
              </div>
            </div>
            <Card className="bg-white/95 border-violet-200 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-slate-800">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 font-medium">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-medium">Message</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full min-h-[120px] bg-white border border-slate-300 rounded-md px-3 py-2 text-slate-800 placeholder:text-slate-500 resize-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-violet-500 via-cyan-600 to-pink-600 hover:from-violet-600 hover:via-cyan-700 hover:to-pink-700 shadow-md hover:shadow-lg transition-all text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-violet-200 bg-white/80">
        <div className="container mx-auto text-center">
          <p className="text-slate-600">
            © 2024 John Doe. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
