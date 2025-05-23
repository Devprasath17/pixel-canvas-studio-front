
import { useEffect, useRef } from 'react';

const About = () => {
  const elementsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = elementsRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      animatedElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={elementsRef}>
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
            ABOUT BPES
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-on-scroll opacity-0" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-blue-400 mb-6">
              Crafting Digital Experiences That Matter
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              BlackPearl Explore Studios stands at the forefront of digital innovation, blending cutting-edge technology with artistic vision. Our multidisciplinary team specializes in creating immersive gaming environments and compelling visual narratives.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From concept to completion, we transform ideas into interactive realities. Our studio combines years of industry experience with fresh creative perspectives to deliver projects that captivate audiences and exceed expectations.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center animate-on-scroll opacity-0" style={{ transitionDelay: '0.4s' }}>
                <div className="text-4xl font-black text-blue-400">50+</div>
                <div className="text-gray-300 font-semibold">Projects Completed</div>
              </div>
              <div className="text-center animate-on-scroll opacity-0" style={{ transitionDelay: '0.6s' }}>
                <div className="text-4xl font-black text-blue-400">15+</div>
                <div className="text-gray-300 font-semibold">Team Members</div>
              </div>
            </div>
          </div>
          
          {/* Image Placeholder with animation */}
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 h-96 flex items-center justify-center border-2 border-blue-500 animate-on-scroll opacity-0 overflow-hidden group" style={{ transitionDelay: '0.4s' }}>
            <div className="text-center transform transition-transform duration-500 group-hover:scale-110">
              <div className="text-4xl font-bold text-blue-300 mb-2">STUDIO</div>
              <div className="text-xl text-blue-400">SHOWCASE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
