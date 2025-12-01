import React from 'react';
import { SKILLS } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import { Database, Globe, Cloud, CheckCircle, Code } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  Database,
  Globe,
  Cloud,
  CheckCircle,
  Code
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#05011a] scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <SectionHeading 
          title="Technical Arsenal & Tools" 
          subtitle="Skills"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, index) => {
            const Icon = iconMap[category.icon] || Code;
            
            return (
              <Card key={index} delay={index * 0.1} className="h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary border border-white/10">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-white/5 to-transparent rounded-lg border-l-2 border-primary/50 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                       {skill}
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;