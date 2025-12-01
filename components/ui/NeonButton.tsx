import React from 'react';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  href?: string;
  download?: boolean; // Add this line
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  href
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-semibold transition-all duration-300 rounded-full group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#030014]";
  
  const variants = {
    primary: "bg-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] hover:bg-violet-600",
    secondary: "bg-transparent border border-white/20 text-white hover:border-white/50 hover:bg-white/5"
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, download: true, className: `${baseStyles} ${variants[variant]} ${className}` } : { onClick, className: `${baseStyles} ${variants[variant]} ${className}` };

  return (
    // @ts-ignore
    <Component
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300" />
      )}
    </Component>
  );
};

export default NeonButton;