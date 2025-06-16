
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
    { name: "Frontend Development", icon: Code, level: 90 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Mobile Development", icon: Smartphone, level: 80 },
    { name: "Backend Development", icon: Code, level: 75 }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-1 animate-pulse shadow-lg">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-800">JD</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent animate-fade-in">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-700 mb-8 animate-fade-in font-semibold">
            Full Stack Developer & UI/UX Designer
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed">
            I create beautiful, functional, and user-centered digital experiences that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg hover:shadow-xl transition-all">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white shadow-md hover:shadow-lg transition-all">
              Download CV
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-gray-400" size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Passionate Developer with 5+ Years Experience
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a full-stack developer with a passion for creating innovative digital solutions. 
                My journey began 5 years ago, and since then, I've worked with startups and 
                established companies to bring their visions to life.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I specialize in modern web technologies and have a keen eye for design. 
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or enjoying a good cup of coffee.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "Python", "AWS", "MongoDB"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm border border-blue-200 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 backdrop-blur-sm border border-blue-200 p-8 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-gray-600 font-medium">Your photo here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-white/80 border-gray-200 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <skill.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle className="text-gray-800">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-gray-600 text-sm font-medium">{skill.level}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/90 border-gray-200 backdrop-blur-sm hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-gray-800">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs border border-blue-200 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md">
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Let's work together
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-gray-600">john.doe@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="text-blue-600" size={20} />
                  <span className="text-gray-600">github.com/johndoe</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="text-blue-600" size={20} />
                  <span className="text-gray-600">linkedin.com/in/johndoe</span>
                </div>
              </div>
            </div>
            <Card className="bg-white/90 border-gray-200 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-800">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full min-h-[120px] bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-800 placeholder:text-gray-500 resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-white/80">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            © 2024 John Doe. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
