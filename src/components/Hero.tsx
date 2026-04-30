import { motion } from "motion/react";
import { SodaCan } from "./SodaCan";
import { ChevronRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-brand-burgundy">
      {/* Decorative Bubbles Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute top-60 left-1/4 w-8 h-8 bg-white rounded-full"></div>
        <div className="absolute top-10 right-20 w-6 h-6 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white rounded-full animate-fizz"></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-white rounded-full animate-fizz" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block bg-brand-cherry text-white text-[10px] font-display font-black px-4 py-1.5 uppercase tracking-widest mb-8 rounded-sm shadow-lg shadow-black/20">
            The Original Since 1885
          </div>

          <h1 className="font-display font-black text-[72px] md:text-[100px] lg:text-[130px] uppercase italic leading-[0.8] mb-10 text-brand-cream tracking-tight drop-shadow-2xl">
            THE FLAVOUR <br />
            <span className="text-white not-italic opacity-90">YOU CAN'T</span> <br />
            <span className="text-brand-cherry underline decoration-[10px] decoration-white/10 underline-offset-[15px]">EXPLAIN.</span>
          </h1>

          <p className="font-sans text-xl text-brand-cream/70 max-w-md mb-12 leading-relaxed">
            A complex blend of 23 unique notes. It’s sweet, it’s spiced, it’s smooth—it’s exactly what you’ve been craving.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="btn-primary py-5 px-10">
              Crave The Fizz
            </button>
            <button className="btn-secondary py-5 px-10">Explore Range</button>
          </div>

          <div className="mt-16 flex items-center space-x-8 border-t border-brand-burgundy/10 pt-12">
            <div>
              <p className="font-display font-black text-3xl text-brand-burgundy">125+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-burgundy/50">Years of Character</p>
            </div>
            <div className="h-10 w-px bg-brand-burgundy/10" />
            <div>
              <p className="font-display font-black text-3xl text-brand-burgundy">100%</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-brand-burgundy/50">Pure refreshment</p>
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-[80%] h-[80%] bg-brand-cherry/10 rounded-full blur-[100px] animate-pulse" />
          
          {/* Main Can */}
          <div className="relative transform hover:rotate-3 transition-transform duration-500">
            <SodaCan label="Original" color="#7B1113" className="w-64 h-96 md:w-72 md:h-[30rem]" />
          </div>

          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -10, 0], rotate: [5, 10, 5] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-4 hidden md:block"
          >
            <SodaCan label="Cherry" color="#EC1C24" className="w-32 h-52 opacity-80" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 15, 0], rotate: [-10, -15, -10] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-10 -left-10 hidden md:block"
          >
            <SodaCan label="Cream" color="#D4A017" className="w-32 h-52 opacity-80" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
