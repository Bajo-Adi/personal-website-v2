'use client'
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { 
  User, 
  Code, 
  FolderOpen, 
  Mail,
  Github,
  Linkedin,
  Briefcase,
  FileText
} from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`) as HTMLElement;
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToProjects = (toggleValue: string) => {
    const element = document.querySelector(`#projects`) as HTMLElement;
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      // Dispatch custom event to toggle the projects switch
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('toggleProjects', { detail: toggleValue }));
      }, 500);
    }
  };

  const navigationItems = [
    {
      title: "About Me",
      icon: <User className="h-7 w-7 text-white" />,
      onClick: () => scrollToSection("about-me"),
      isInternal: true,
    },
    {
      title: "Skills",
      icon: <Code className="h-7 w-7 text-white" />,
      onClick: () => scrollToSection("skills"),
      isInternal: true,
    },
    {
      title: "Resume",
      icon: <FileText className="h-7 w-7 text-white" />,
      onClick: () => scrollToSection("resume"),
      isInternal: true,
    },
    {
      title: "Projects",
      icon: <FolderOpen className="h-7 w-7 text-white" />,
      onClick: () => scrollToProjects("0"),
      isInternal: true,
    },
    {
      title: "Experiences",
      icon: <Briefcase className="h-7 w-7 text-white" />,
      onClick: () => scrollToProjects("1"),
      isInternal: true,
    },
    {
      title: "Contact Me",
      icon: <Mail className="h-7 w-7 text-white" />,
      onClick: () => scrollToSection("contact"),
      isInternal: true,
    },
    {
      title: "GitHub",
      icon: <Github className="h-7 w-7 text-white" />,
      onClick: () => window.open("https://github.com/Bajo-Adi", "_blank"),
      isInternal: false,
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-7 w-7 text-white" />,
      onClick: () => window.open("https://www.linkedin.com/in/abajoria04/", "_blank"),
      isInternal: false,
    },
  ];

  return (
    <div className="z-20 w-full sticky top-0 flex items-center justify-center px-5 h-20 font-header bg-neutral-950/80 backdrop-blur-sm shadow-lg border-b border-white/10">
      <Dock className="items-center">
        {navigationItems.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full transition-colors"
            onClick={item.onClick}
          >
            <DockLabel alwaysVisible={true}>
              {item.title}
            </DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
};

export default Header;
