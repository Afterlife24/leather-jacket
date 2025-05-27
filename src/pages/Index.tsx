
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Customization from '@/components/Customization';
import About from '@/components/About';
import Partnership from '@/components/Partnership';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Preload images and video for smoother experience
    const preloadAssets = () => {
      // Preload video
      const video = new Audio('/leather-production.mp4');
      video.preload = 'auto';
      
      // Preload important images
      const imagesToPreload = [
        '/leather-hero.jpg',
        '/workshop-wide.jpg',
        '/craftsman.jpg',
        '/materials.jpg',
        '/jacket-detail-1.jpg',
        '/jacket-detail-2.jpg'
      ];
      
      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadAssets();
    
    // Reveal animations on scroll
    const handleRevealElements = () => {
      const elements = document.querySelectorAll('.reveal-animation');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach((element) => {
        observer.observe(element);
      });
      
      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    };
    
    handleRevealElements();
    
    // Smooth scroll to sections when clicking on links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Customization />
      <About />
      <Partnership />
      <Footer />
    </div>
  );
};

export default Index;
