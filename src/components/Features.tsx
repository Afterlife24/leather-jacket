import { Shield, Award, Zap, RefreshCw } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
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
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Shield className="h-10 w-10 text-accent" />,
      image: "/image.png", // This points to public/image.png
      title: "Premium Quality",
      description: "We source only the finest full-grain leather for unmatched durability and a luxurious feel that improves with age."
    },
    {
      icon: <Award className="h-10 w-10 text-accent" />,
      title: "Master Craftsmanship",
      image: "/image.png", // Changed from 'image' to the public path
      description: "Every jacket is handcrafted by skilled artisans with decades of experience, ensuring exceptional attention to detail."
    },
    {
      icon: <Zap className="h-10 w-10 text-accent" />,
      title: "Fast Production",
      description: "Our streamlined manufacturing process ensures quick turnaround times without compromising on quality."
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-accent" />,
      title: "Sustainable Practices",
      description: "Environmentally conscious production methods and ethical sourcing are at the core of our business values."
    }
  ];

  return (
    <section id="products" ref={featuresRef} className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
          <div className="section-subheading">Our Products</div>
          <h2 className="section-heading">Exceptional Leather Jackets for Your Business</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We craft premium leather jackets that reflect your brand's uniqueness and meet your customers' expectations for quality and style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="premium-card p-8 flex flex-col items-center text-center reveal-animation"
            >
              <div className="mb-6 p-4 rounded-full bg-apple-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              {/* If you want to display the image, add this: */}
              {/* {feature.image && (
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="mt-4 w-full h-auto rounded-lg"
                />
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;