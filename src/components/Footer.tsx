
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-apple-900 text-white/80">
      <div className="container mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-sans text-white mb-6">
              <span className="font-light">Leather</span>
              <span className="font-medium">Verse</span>
            </h2>
            <p className="mb-6">
              Premium leather jacket manufacturing for businesses worldwide. Craftsmanship, quality, and customization without compromise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="hover:text-white transition-colors duration-300">Our Products</a>
              </li>
              <li>
                <a href="#customization" className="hover:text-white transition-colors duration-300">Customization</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#partnership" className="hover:text-white transition-colors duration-300">B2B Partnership</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Custom Manufacturing</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Design Consultation</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Material Sourcing</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Quality Assurance</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">Global Shipping</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>123 Craftsman Way, Leather District, Milan, Italy</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>business@leatherverse.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} LeatherVerse. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-sm hover:text-white transition-colors duration-300">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
