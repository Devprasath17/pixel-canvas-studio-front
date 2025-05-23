
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <h2 className="text-4xl sm:text-5xl font-black mb-8">
            GET IN TOUCH
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Start Your Project</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-slate-800/50 border border-blue-500/30 px-4 py-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-slate-800/50 border border-blue-500/30 px-4 py-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-800/50 border border-blue-500/30 px-4 py-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-slate-800/50 border border-blue-500/30 px-4 py-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <textarea
                placeholder="Project Details"
                rows={5}
                className="w-full bg-slate-800/50 border border-blue-500/30 px-4 py-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              ></textarea>
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group"
              >
                SUBMIT REQUEST <Send className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8 animate-on-scroll opacity-0" style={{ transitionDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start hover:scale-105 transition-transform">
                <div className="bg-blue-900/50 p-3 rounded-md mr-4 text-blue-400">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Office Location</h4>
                  <p className="text-gray-400">123 Design Avenue, Creative District, City</p>
                </div>
              </div>
              
              <div className="flex items-start hover:scale-105 transition-transform">
                <div className="bg-blue-900/50 p-3 rounded-md mr-4 text-blue-400">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone Number</h4>
                  <p className="text-gray-400">+1 234 567 8901</p>
                </div>
              </div>
              
              <div className="flex items-start hover:scale-105 transition-transform">
                <div className="bg-blue-900/50 p-3 rounded-md mr-4 text-blue-400">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Address</h4>
                  <p className="text-gray-400">info@blackpearlstudios.com</p>
                </div>
              </div>
              
              <div className="flex items-start hover:scale-105 transition-transform">
                <div className="bg-blue-900/50 p-3 rounded-md mr-4 text-blue-400">
                  <Clock />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-400">Monday - Friday: 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
