import { motion } from "motion/react";

interface SodaCanProps {
  color?: string;
  label: string;
  className?: string;
}

export function SodaCan({ color = "#7B1113", label, className = "" }: SodaCanProps) {
  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={`relative w-48 h-80 group cursor-pointer ${className}`}
    >
      {/* Can Body */}
      <div 
        className="absolute inset-0 rounded-[2.5rem] shadow-2xl transition-transform duration-500 group-hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, #1a1a1a 100%)`,
          boxShadow: `0 20px 50px rgba(0,0,0,0.3), inset -10px -10px 30px rgba(0,0,0,0.2), inset 10px 10px 30px rgba(255,255,255,0.1)`
        }}
      >
        {/* Can Highlight */}
        <div className="absolute top-4 left-6 w-8 h-full bg-gradient-to-r from-white/20 to-transparent blur-md rounded-full" />
        
        {/* Label Area */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <span className="text-white/20 font-display font-black text-6xl rotate-90 absolute whitespace-nowrap opacity-10">
              {label} {label}
            </span>
            <span className="font-display font-black text-3xl text-brand-cream tracking-tighter uppercase mb-1">
              Dr Fizz
            </span>
            <div className="h-0.5 w-12 bg-brand-cherry mb-2" />
            <span className="font-display font-bold text-sm text-brand-cream border border-brand-cream/30 px-3 py-1 rounded-full uppercase tracking-[0.2em]">
              {label}
            </span>
          </motion.div>
        </div>

        {/* Can Top Rim */}
        <div className="absolute -top-1 left-4 right-4 h-6 rounded-full border-t-4 border-white/20 bg-gradient-to-b from-gray-400 to-gray-600" />
      </div>

      {/* Bubbles animation on hover */}
      <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 200, x: 80, scale: 0 }}
            animate={{ 
              y: -100, 
              x: 80 + (Math.random() - 0.5) * 60,
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2 + Math.random() * 2, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
            className="absolute w-2 h-2 bg-white/40 rounded-full blur-[1px]"
          />
        ))}
      </div>
    </motion.div>
  );
}
