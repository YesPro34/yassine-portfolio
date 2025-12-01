import React from 'react';
import { EXPERIENCES } from '../constants';
import Card from './ui/Card';
import SectionHeading from './ui/SectionHeading';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experiences" className="py-20 relative scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <SectionHeading 
          title="Built From Years of Industry Work" 
          subtitle="Experience"
        />

        <div className="space-y-8 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp, index) => (
            <Card key={exp.id} delay={index * 0.1} className="group">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon Column */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-violet-800 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase size={24} />
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-secondary font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-gray-400 text-sm flex flex-col items-start md:items-end">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-400 text-sm">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-primary border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;