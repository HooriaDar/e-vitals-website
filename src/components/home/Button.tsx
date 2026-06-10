import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'outline' | 'partner';
  className?: string;
}

export default function Button({ text, variant = 'primary', className = '' }: ButtonProps) {
  const baseClasses =
    'font-medium py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center text-sm font-semibold';

  const variantClasses =
    variant === 'primary'
      ? 'bg-brand text-white hover:bg-brand-dark shadow-md hover:shadow-lg hover:shadow-brand/20'
      : variant === 'outline'
      ? 'border-2 border-brand text-brand hover:bg-brand hover:text-white'
      : 'bg-plum text-white hover:bg-plum-2 shadow-md hover:shadow-lg hover:shadow-plum/20';

  const MotionLink = motion.create(Link);

  return (
    <MotionLink 
      href="#" 
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {text} <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
    </MotionLink>
  );
}
