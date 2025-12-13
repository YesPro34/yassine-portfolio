import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { slugify } from '../utils/slugify';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-1/3 h-1/3 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <SectionHeading 
          title="Build Real Portfolio Projects" 
          subtitle="Recent Work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const slug = slugify(project.title);
            return (
              <Link key={slug} to={`/projects/${slug}`} className="group">
                <Card delay={index * 0.1} className="flex flex-col h-full cursor-pointer">
                  
                  {/* Image Placeholder Area (Simulating Screenshot) */}
                  <div className="w-full h-48 rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 mb-6 overflow-hidden relative border border-white/5">
                      <img src={project.image} alt="" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <div className="flex items-center text-white font-medium">
                         View Details <ArrowUpRight className="ml-2 w-4 h-4" />
                       </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                     <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        {project.type && (
                          <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded">
                            {project.type}
                          </span>
                        )}
                     </div>

                     <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                       {project.description}
                     </p>

                     <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                       {project.tech.map(t => (
                         <span key={t} className="text-xs font-mono text-primary">
                           #{t}
                         </span>
                       ))}
                     </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;