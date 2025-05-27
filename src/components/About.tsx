
import { useEffect, useRef } from 'react';
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-animation');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const timeline = [
    {
      year: "1985",
      title: "Our Humble Beginnings",
      description: "Founded by master craftsman Antonio Verdi, we started as a small workshop dedicated to quality leather goods."
    },
    {
      year: "1997",
      title: "B2B Expansion",
      description: "Shifted focus to business partnerships, providing premium leather jackets to fashion brands worldwide."
    },
    {
      year: "2008",
      title: "Manufacturing Innovation",
      description: "Invested in cutting-edge technology while preserving traditional hand-craftsmanship techniques."
    },
    {
      year: "2015",
      title: "Sustainable Initiatives",
      description: "Pioneered eco-friendly leather processing and ethical sourcing practices in the industry."
    },
    {
      year: "Today",
      title: "Global Leadership",
      description: "Recognized as the premier B2B leather jacket manufacturer with clients across six continents."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
          <div className="section-subheading">Our Story</div>
          <h2 className="section-heading">A Legacy of Excellence</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crafting exceptional leather jackets since 1985 with unwavering commitment to quality.
          </p>
        </div>
        
        {/* New Apple-inspired story section with full-width images and text grid */}
        <div className="grid grid-cols-1 reveal-animation mb-24">
          <div className="h-[600px] w-full overflow-hidden mb-12">
            <img 
              src="/image.png" 
              alt="Our leather craftsmanship" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-medium mb-4">Our Philosophy</h3>
            </div>
            <div className="md:col-span-2">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                We believe exceptional leather jackets start with exceptional materials. That's why we meticulously source the finest hides and focus on every detail in our manufacturing process.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our dedication to excellence has earned us the trust of the world's most prestigious fashion brands and retailers.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square overflow-hidden">
              <img 
                src="image.png" 
                alt="Master craftsman at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="/materials.jpg" 
                alt="Premium leather materials" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-medium mb-4">Craftsmanship</h3>
            </div>
            <div className="md:col-span-2">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Our master craftspeople combine generations of traditional techniques with modern innovation, creating leather jackets that stand the test of time in both quality and design.
              </p>
              <a href="#partnership" className="text-accent flex items-center group">
                Learn about our B2B partnerships
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Timeline section */}
        <div className="reveal-animation">
          <h3 className="text-2xl font-medium mb-10 text-center">Our Timeline</h3>
          
          <div className="relative mx-auto max-w-5xl">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-px bg-border"></div>
            
            <div className="space-y-24">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse md:flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8 md:pl-0' : 'text-left pl-8'}`}>
                    <Badge variant="secondary" className="mb-3 px-3 py-1 text-xs font-medium bg-accent text-white">
                      {item.year}
                    </Badge>
                    <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full z-10 shadow-md"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
