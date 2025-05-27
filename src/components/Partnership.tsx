
import { useEffect, useRef } from 'react';
import { CheckCircle, Users, BarChart, Clock, Mail } from 'lucide-react';

const Partnership = () => {
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

  const benefits = [
    "Exclusive designs tailored to your brand",
    "Consistent quality across large production runs",
    "Flexible minimum order quantities",
    "Competitive pricing with volume discounts",
    "Dedicated account manager for your business",
    "Rapid sampling and prototyping",
    "On-time delivery guaranteed",
    "Comprehensive quality control"
  ];

  return (
    <section id="partnership" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
          <div className="section-subheading">Business Partnership</div>
          <h2 className="section-heading">Growth Through Collaboration</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Partner with us to elevate your brand with premium leather jackets that your customers will love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="reveal-animation order-2 lg:order-1">
            <h3 className="text-2xl font-serif mb-6">Why Partner With Us</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our B2B partnerships are built on mutual success. We provide the expertise, quality, and flexibility you need to offer exceptional leather products to your customers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-leather-700 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal-animation order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl h-[500px]">
              <img 
                src="/image.png" 
                alt="Business partnership" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-leather-800 rounded-2xl overflow-hidden reveal-animation">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-12">
              <h3 className="text-2xl text-black font-serif mb-6">Partnership Process</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-black/10 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-black text-lg font-medium mb-1">Initial Consultation</h4>
                    <p className="text-black/80">We discuss your brand, requirements, target market, and vision.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black/10 p-3 rounded-full mr-4">
                    <BarChart className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-black text-lg font-medium mb-1">Proposal & Sampling</h4>
                    <p className="text-black/80">We create detailed proposals and produce samples for your approval.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-black text-lg font-medium mb-1">Production Timeline</h4>
                    <p className="text-black/80">We establish realistic timelines and keep you informed throughout.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-black text-lg font-medium mb-1">Ongoing Support</h4>
                    <p className="text-black/80">We provide continuous assistance and adapt to your evolving needs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 lg:p-12">
              <h3 className="text-2xl font-serif mb-6">Contact Our B2B Team</h3>
              <form id="contact" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-leather-500 focus:border-leather-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-leather-500 focus:border-leather-500"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Requirements</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-leather-500 focus:border-leather-500"
                    placeholder="Tell us about your business and what you're looking for..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-leather-800 text-white rounded-md transition-all duration-300 hover:bg-leather-700 button-hover-effect"
                >
                  Request Partnership Information
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
