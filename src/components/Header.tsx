
import { useState } from 'react';
import { Menu, X, Linkedin, Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT US', href: '#contact' },
  ];

  const socialIcons = [
    { Icon: Linkedin, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Facebook, href: '#' },
    { Icon: Youtube, href: '#' },
    { Icon: Mail, href: '#' },
  ];

  return (
    <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-sm border-b border-blue-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="border-2 border-blue-500 px-6 py-2 bg-slate-900 inline-block">
              <span className="text-xl font-bold text-white">BPES</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-800 bg-slate-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 font-medium hover:bg-slate-800 hover:text-white rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex space-x-4 px-3 py-2">
                {socialIcons.map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
