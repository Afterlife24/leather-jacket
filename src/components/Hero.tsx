
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !textRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - (scrollPosition * 0.003);
      const translateY = scrollPosition * 0.5;
      
      textRef.current.style.opacity = Math.max(opacity, 0).toString();
      textRef.current.style.transform = `translateY(${translateY * 0.3}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('products');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/leather-production.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="/leather-hero.jpg" 
            alt="Leather jacket production" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        <div 
          className="absolute inset-0 bg-black/50"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
      </div>
      
      <div 
        ref={textRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up"
      >
        <div className="section-subheading text-white/80">
          Business to Business Custom Leather Jackets
        </div>
        <h1 className="section-heading text-white mb-8">
          Crafting Premium Leather <br className="hidden md:block" />
          <span className="italic">Beyond Expectations</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Partner with the industry leader in custom leather jacket manufacturing. 
          Unmatched quality, endless customization, and timely delivery.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a 
            href="#customization" 
            className="px-8 py-4 bg-accent text-white rounded-md transition-all duration-500 button-hover-effect"
          >
            Explore Customization
          </a>
          <a 
            href="#partnership" 
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-md hover:bg-white/20 transition-all duration-500"
          >
            B2B Partnership
          </a>
        </div>
      </div>

      {/* Image gallery floating in the background */}
      <div className="absolute bottom-40 -left-10 w-64 h-40 opacity-80 rotate-6 z-[5] hidden md:block animate-float">
        <img 
          src="/image.png"
          alt="Leather jacket detail"
          className="w-full h-full object-cover rounded-lg shadow-premium"
        />
      </div>
      
      <div className="absolute top-40 -right-10 w-64 h-40 opacity-80 -rotate-6 z-[5] hidden md:block animate-float" style={{animationDelay: "1s"}}>
        <img 
          src="/image.png"
          alt="Leather jacket detail"
          className="w-full h-full object-cover rounded-lg shadow-premium"
        />
      </div>

      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce transition-opacity duration-300 hover:opacity-80"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  );
};

export default Hero;
