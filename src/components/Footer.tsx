
import { Linkedin, Instagram, Facebook, Youtube, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialIcons = [
    { Icon: Linkedin, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Facebook, href: '#' },
    { Icon: Youtube, href: '#' },
    { Icon: Mail, href: '#' },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and info */}
          <div className="space-y-4">
            <div className="border-2 border-blue-500 px-6 py-2 bg-slate-900 inline-block">
              <span className="text-xl font-bold text-white">BPES</span>
            </div>
            <p className="text-gray-400">
              Pushing the boundaries of digital design and gaming experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="bg-slate-800 p-3 rounded-full text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 BlackPearl Explore Studios. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 mt-4 md:mt-0"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
