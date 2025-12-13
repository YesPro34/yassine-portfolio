import {React, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { PROJECT_DETAILS } from '../data/projectDetails';
import Navbar from './Navbar';
import Footer from './Footer';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = PROJECT_DETAILS.find(p => p.slug === slug);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!project) {
    return (
      <main className="bg-[#030014] text-white min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Project not found</h2>
          <p className="text-gray-400">The project you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/')} 
            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-violet-600 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to portfolio
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-[#030014] text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative pt-24 pb-16 border-b border-white/5"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to portfolio
            </button>

            {/* Cover Image */}
            {project.cover && (
              <div className="mb-12 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={project.cover} 
                  alt={project.title}
                  className="w-full h-100 object-cover"
                />
              </div>
            )}

            {/* Title & Description */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {project.tags.map(tag => (
                <span 
                  key={tag}
                  className="text-sm font-semibold text-primary bg-white/5 px-4 py-2 rounded-full border border-white/10"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.repo && (
                <a 
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-violet-600 transition-colors"
                >
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-20"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl mx-auto">
            {/* Article Content */}
            <div className="prose prose-invert max-w-none">
              {/* Dynamic content rendering */}
              <style>{`
                .prose {
                  color: inherit;
                }
                .prose h2 {
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  font-size: 1.875rem;
                  font-weight: 700;
                }
                .prose h3 {
                  margin-top: 1.5rem;
                  margin-bottom: 0.75rem;
                  font-size: 1.25rem;
                  font-weight: 600;
                }
                .prose p {
                  margin-bottom: 1rem;
                  line-height: 1.75;
                }
                .prose ul, .prose ol {
                  margin-bottom: 1rem;
                  margin-left: 1.5rem;
                }
                .prose li {
                  margin-bottom: 0.5rem;
                  line-height: 1.75;
                }
                .prose code {
                  background-color: rgba(139, 92, 246, 0.1);
                  color: #a78bfa;
                  padding: 0.2rem 0.4rem;
                  border-radius: 0.25rem;
                  font-size: 0.875em;
                }
                .prose pre {
                  background-color: #0b0b12;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  border-radius: 0.5rem;
                  padding: 1.5rem;
                  overflow-x: auto;
                  margin-bottom: 1.5rem;
                }
                .prose pre code {
                  background-color: transparent;
                  color: #d1d5db;
                  padding: 0;
                }
                .prose a {
                  color: #a78bfa;
                  text-decoration: underline;
                }
                .prose strong {
                  font-weight: 600;
                  color: #fff;
                }
              `}</style>
              {project.content}
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;
