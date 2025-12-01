import React from 'react';
import NeonButton from './ui/NeonButton';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-24">
       <div className="container mx-auto px-6 md:px-12 lg:px-24">
         <div className="bg-gradient-to-r from-violet-900/50 to-fuchsia-900/50 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full translate-x-1/2 translate-y-1/2"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to start a project?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              I'm currently available for freelance work and full-time positions. 
              Let's discuss how we can work together to build something great.
            </p>
            
            <div className="relative z-10">
              <NeonButton href="mailto:echamkh.yassine@gmail.com">
                <Mail className="mr-2 w-5 h-5" /> Say Hello
              </NeonButton>
            </div>
         </div>
       </div>
    </section>
  );
};

export default Contact;