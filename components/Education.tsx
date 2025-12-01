import React from 'react';
import { EDUCATION } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="studies" className="py-20 bg-[#05011a] scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <SectionHeading title="Academic Background" />

        <div className="max-w-3xl mx-auto">
          {EDUCATION.map((edu, index) => (
             <div key={index} className="relative pl-8 md:pl-0">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent transform -translate-x-1/2"></div>
                
                <div className="md:flex items-center justify-between group pb-8 last:pb-0">
                   <div className="hidden md:block w-1/2 pr-12 text-right">
                      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{edu.degree}</h4>
                      <p className="text-gray-400">{edu.institution}</p>
                   </div>

                   {/* Center Point */}
                   <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#030014] border-2 border-primary flex items-center justify-center z-10 transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                      <GraduationCap size={14} className="text-white" />
                   </div>

                   <div className="md:w-1/2 md:pl-12 pl-6 pb-8 md:pb-0 border-l-2 border-primary/20 md:border-l-0">
                      {/* Mobile View Title */}
                      <div className="md:hidden mb-2">
                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                        <p className="text-gray-400">{edu.institution}</p>
                      </div>
                      <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-accent font-mono text-sm">
                        {edu.year}
                      </span>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;