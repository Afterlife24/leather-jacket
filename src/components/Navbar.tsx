
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Customization", href: "#customization" },
    { label: "Our Story", href: "#about" },
    { label: "Partnership", href: "#partnership" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="relative z-50">
          <h1 className="text-2xl font-sans tracking-tight">
            <span className="font-light">Leather</span>
            <span className="font-medium">Verse</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-md transition-all duration-300 hover:bg-accent/90 button-hover-effect"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-50" 
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-current" />
          ) : (
            <Menu className="h-6 w-6 text-current" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transform transition-transform duration-500 md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-xl font-medium transition-colors duration-300 hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mt-4 px-8 py-3 bg-accent text-white text-base font-medium rounded-md transition-all duration-300 hover:bg-accent/90 button-hover-effect"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
