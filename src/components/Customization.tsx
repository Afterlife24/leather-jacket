
import { useEffect, useRef, useState } from 'react';
import { Palette, Scissors, Ruler, PenTool } from 'lucide-react';

const CustomizationOption = ({ 
  icon, 
  title, 
  description,
  isActive,
  onClick
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div 
      className={`cursor-pointer transition-all duration-500 premium-card p-6 ${
        isActive ? 'border-leather-500 bg-leather-50' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-full ${isActive ? 'bg-leather-500 text-white' : 'bg-leather-100 text-leather-700'}`}>
          {icon}
        </div>
        <h3 className="text-lg font-medium ml-4">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Customization = () => {
  const [activeOption, setActiveOption] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
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

  useEffect(() => {
    // Simple animation for image change
    if (imageRef.current) {
      imageRef.current.classList.remove('animate-scale-up');
      void imageRef.current.offsetWidth; // Trigger reflow
      imageRef.current.classList.add('animate-scale-up');
    }
  }, [activeOption]);
  
  const customizationOptions = [
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Material Selection",
      description: "Choose from premium full-grain, top-grain, or specialized leather types to match your exact requirements.",
      image: "/image.png"
    },
    {
      icon: <Scissors className="h-5 w-5" />,
      title: "Style Customization",
      description: "Select from classic biker, bomber, café racer, or design your own signature style from scratch.",
      image: "/leather-style.jpg"
    },
    {
      icon: <Ruler className="h-5 w-5" />,
      title: "Size & Fit",
      description: "Custom sizing options ensure perfect fit for your customers, with standard or tailored measurements.",
      image: "/leather-sizing.jpg"
    },
    {
      icon: <PenTool className="h-5 w-5" />,
      title: "Branding & Details",
      description: "Add your logo, custom hardware, unique linings, and special finishes to make the products truly yours.",
      image: "/leather-details.jpg"
    }
  ];

  return (
    <section id="customization" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
          <div className="section-subheading">Endless Possibilities</div>
          <h2 className="section-heading">Customization Without Limits</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our flexible manufacturing process allows for complete customization of every aspect of your leather jackets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 reveal-animation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {customizationOptions.map((option, index) => (
                <CustomizationOption 
                  key={index}
                  icon={option.icon}
                  title={option.title}
                  description={option.description}
                  isActive={activeOption === index}
                  onClick={() => setActiveOption(index)}
                />
              ))}
            </div>
            
            <div className="mt-8 p-6 premium-card">
              <h3 className="text-xl font-medium mb-4">Ready to create your custom collection?</h3>
              <p className="text-muted-foreground mb-6">
                Our design team will work with you from concept to production, ensuring your vision becomes reality.
              </p>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-leather-800 text-white rounded-md transition-all duration-300 hover:bg-leather-700 button-hover-effect"
              >
                Start Your Custom Project
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 reveal-animation h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
            <img
              ref={imageRef}
              src={customizationOptions[activeOption].image}
              alt={customizationOptions[activeOption].title}
              className="w-full h-full object-cover animate-scale-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
