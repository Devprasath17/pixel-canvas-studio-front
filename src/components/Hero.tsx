
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', animateElements);
    // Trigger once on load
    animateElements();

    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-fixed bg-center bg-black/90 bg-blend-overlay pt-16 text-white">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            BlackPearl
            <br />
            <span className="text-5xl sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Explore Studios</span>
          </h1>
          
          <div className="h-1 w-32 bg-white mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}></div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 mt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            One Studio, Infinite Dimensions
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Where creativity meets technology. We craft immersive gaming experiences and stunning visual designs that push the boundaries of digital artistry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <button className="bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 group flex items-center justify-center">
              EXPLORE OUR WORK
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-all duration-300">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
