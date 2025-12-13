import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import NeonButton from './ui/NeonButton';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="h-[1px] w-8 bg-accent"></span>
              <span className="text-accent font-medium tracking-wide uppercase text-sm">Online Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Build Powerful Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Step By Step
              </span> <br />
              With <span className="underline decoration-accent decoration-4 underline-offset-4">Yassine</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-6">
              {PERSONAL_INFO.title}
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              {PERSONAL_INFO.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              <NeonButton href="mailto:echamkh.yassine@gmail.com">
                Contact me <ArrowRight className="ml-2 w-5 h-5" />
              </NeonButton>
              
              {/* <NeonButton variant="secondary" href="/resume.pdf">
                Download CV <Download className="ml-2 w-5 h-5" />
              </NeonButton> */}
            </div>
          </motion.div>
        </div>

        {/* Hero Visual/Image */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative w-full max-w-[500px] aspect-square">
             {/* Abstract Code Illustration Container mimicking the screenshot */}
             <div className="w-full h-full bg-[#1e1b4b]/50 backdrop-blur-md rounded-3xl border border-white/10 p-6 relative shadow-2xl overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                {/* Simulated Visual Content */}
                <div className="absolute top-10 right-10 bg-[#030014] p-4 rounded-xl border border-primary/30 shadow-lg transform rotate-6 animate-pulse-slow">
                   <div className="w-8 h-8 rounded-full bg-secondary/50 mb-2"></div>
                   <div className="w-24 h-2 bg-gray-700 rounded mb-1"></div>
                   <div className="w-16 h-2 bg-gray-700 rounded"></div>
                </div>

                <div className="absolute bottom-10 left-10 bg-[#030014] p-4 rounded-xl border border-accent/30 shadow-lg transform -rotate-3">
                   <div className="flex space-x-2 mb-2">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <div className="space-y-2">
                     <div className="w-32 h-2 bg-gray-700 rounded"></div>
                     <div className="w-24 h-2 bg-gray-700 rounded"></div>
                     <div className="w-28 h-2 bg-gray-700 rounded"></div>
                   </div>
                </div>
                
                {/* Center Photo Placeholder */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                   <div className="relative w-full h-full  rounded-full border-4 border-primary/50 overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                     <img 
                       src="/img.png" 
                       alt={PERSONAL_INFO.name}
                     />
                   </div>
                   {/* Floating Tag */}
                   <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
                      Full Stack Dev
                   </div>
                </div>
             </div>
             
             {/* Floating Arrows (CSS shapes) */}
             <svg className="absolute top-0 -left-10 w-24 h-24 text-white/20 transform rotate-12" viewBox="0 0 100 100">
               <path d="M10,50 Q50,10 90,50" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
             </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;