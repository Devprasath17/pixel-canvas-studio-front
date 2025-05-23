
import { Monitor, Image, Award, FileText, Presentation, User } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.service-card');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
                el.classList.remove('opacity-0');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: 'UI/UX',
      icon: Monitor,
      description: 'Intuitive user interfaces and seamless user experiences'
    },
    {
      title: 'BANNERS',
      icon: Image,
      description: 'Eye-catching promotional designs and marketing materials'
    },
    {
      title: 'INVITATION CARDS',
      icon: Award,
      description: 'Elegant event invitations and ceremonial designs'
    },
    {
      title: 'CERTIFICATES',
      icon: Award,
      description: 'Professional certificates and achievement recognitions'
    },
    {
      title: 'BROCHURES',
      icon: FileText,
      description: 'Compelling brochures and informational materials'
    },
    {
      title: 'POSTERS',
      icon: Image,
      description: 'Striking poster designs for events and campaigns'
    },
    {
      title: 'RESUME',
      icon: User,
      description: 'Professional resume designs that make an impact'
    },
    {
      title: 'PPT',
      icon: Presentation,
      description: 'Dynamic presentations that engage and inspire'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            SERVICES
          </h2>
          <h3 className="text-3xl font-bold text-blue-400 mb-8 underline decoration-4 underline-offset-8">
            DESIGNING
          </h3>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
        </div>
        
        <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-500/30 p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 group service-card opacity-0"
            >
              <div className="text-center">
                <div className="bg-blue-900/50 w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-blue-700 group-hover:bg-blue-800 group-hover:text-white text-blue-400 transition-all duration-300 rounded-full">
                  <service.icon size={32} />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <button className="bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-700/50">
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
