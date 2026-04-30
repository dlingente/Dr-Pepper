import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MapPin } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Flavours', href: '#flavours' },
    { name: 'Find Dr Fizz', href: '#find' },
    { name: 'Our Story', href: '#story' },
    { name: 'Rewards', href: '#rewards' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4 shadow-2xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-8 h-8 bg-brand-cherry rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="text-white font-display font-black text-xs uppercase">P</span>
          </div>
          <span className="font-display font-black text-2xl tracking-tighter uppercase italic text-brand-cream">
            Dr Fizz
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-display font-bold text-xs uppercase tracking-widest text-brand-cream opacity-70 hover:opacity-100 hover:text-brand-cherry transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cherry transition-all group-hover:w-full" />
            </a>
          ))}
          <button className="bg-brand-cream text-brand-burgundy px-8 py-2.5 rounded-full font-display font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg active:scale-95">
            Find Near You
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-brand-burgundy p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-cream border-t border-brand-burgundy/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="font-display font-bold text-lg uppercase tracking-wider text-brand-burgundy"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary w-full flex items-center justify-center space-x-2">
                <MapPin size={18} />
                <span>Find Near You</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
