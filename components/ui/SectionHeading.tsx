import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 md:mb-20 text-center">
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-primary text-sm md:text-base font-semibold tracking-wider uppercase mb-2"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-white"
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className={i === 1 || i === 3 ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary" : ""}>
            {word}{' '}
          </span>
        ))}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"
      />
    </div>
  );
};

export default SectionHeading;