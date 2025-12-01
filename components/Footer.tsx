import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Links = [
  { href: 'https://github.com/YesPro34', Icon: Github },
  { href: 'https://www.linkedin.com/in/yassine-echamkh/', Icon: Linkedin },
  { href: 'mailto:echamkh.yassine@gmail.com', Icon: Mail },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020010] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">
              YassineEchamkh<span className="text-primary">.me</span>
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              Building digital experiences with modern technologies. 
              Focused on performance, scalability, and user experience.
            </p>
            <div className="flex space-x-4">
              {Links.map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Experiences', 'Projects', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Email :echamkh.yassine@gmail.com</li>
              <li>Address: Agadir, Morocco</li>
              <li>whatsapp :  +212 636-071810</li>
              <li className="text-accent">Open for opportunities</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Yassine Echamkh. All rights reserved.</p>
        </div>
      </div>
      <FloatingWhatsAppButton />
    </footer>
  );
};

const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/212636071810" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-secondary transition-all duration-300 z-50"
      aria-label="Contact me on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default Footer;