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
  FileText,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const previous = document.body.style.overflow;
      document.body.style.overflow = isMobileMenuOpen ? 'hidden' : previous || '';
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [isMobileMenuOpen]);
  
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
      icon: <User className="h-6 w-6 text-white" />,
      onClick: () => scrollToSection("about-me"),
      isInternal: true,
    },
    {
      title: "Resume",
      icon: <FileText className="h-6 w-6 text-white" />,
      onClick: () => scrollToSection("resume"),
      isInternal: true,
    },
    {
      title: "Skills",
      icon: <Code className="h-6 w-6 text-white" />,
      onClick: () => scrollToSection("skills"),
      isInternal: true,
    },
    {
      title: "Projects",
      icon: <FolderOpen className="h-6 w-6 text-white" />,
      onClick: () => scrollToProjects("0"),
      isInternal: true,
    },
    {
      title: "Experiences",
      icon: <Briefcase className="h-6 w-6 text-white" />,
      onClick: () => scrollToProjects("1"),
      isInternal: true,
    },
    {
      title: "Contact Me",
      icon: <Mail className="h-6 w-6 text-white" />,
      onClick: () => scrollToSection("contact"),
      isInternal: true,
    },
    {
      title: "GitHub",
      icon: <Github className="h-6 w-6 text-white" />,
      onClick: () => window.open("https://github.com/Bajo-Adi", "_blank"),
      isInternal: false,
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-6 w-6 text-white" />,
      onClick: () => window.open("https://www.linkedin.com/in/abajoria04/", "_blank"),
      isInternal: false,
    },
  ];

  return (
    <>
      <div className="z-20 w-full sticky top-0 flex items-center justify-between px-5 h-16 sm:h-18 lg:h-20 font-header bg-neutral-950/80 backdrop-blur-sm shadow-lg border-b border-white/10">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1">
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

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <div className="text-white font-bold text-lg">Portfolio</div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Outside header container */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-neutral-950 z-[9999] overflow-y-auto">
          {/* Close button inside overlay */}
          <button
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute right-4 top-4 p-2 text-white hover:bg-white/10 rounded-lg"
          >
            <X size={24} />
          </button>
          <div className="grid place-items-center min-h-[100dvh] p-6">
            <div className="w-full max-w-sm flex flex-col items-stretch gap-4">
              {navigationItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    item.onClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-3 text-white hover:text-blue-400 transition-colors text-xl py-4 border border-white/10 rounded-xl"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
