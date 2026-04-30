import { Instagram, Facebook, Twitter, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-burgundy text-brand-cream pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Bubbles */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-brand-cream to-transparent opacity-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 md:gap-24 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-brand-cherry rounded-full flex items-center justify-center">
                <span className="text-white font-display font-black text-xs uppercase">P</span>
              </div>
              <span className="font-display font-black text-2xl tracking-tighter uppercase italic text-brand-cream">
                Dr Fizz
              </span>
            </div>
            <p className="text-brand-cream/50 text-sm italic leading-relaxed mb-8">
              Brewed for those with character. Since 1885, we've been the boldest flavour in the fridge.
            </p>
            <div className="flex items-center space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-cherry hover:border-brand-cherry transition-all text-sm font-bold opacity-60 hover:opacity-100 uppercase">
                  {i === 0 ? 'IG' : i === 1 ? 'FB' : 'TT'}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-8 text-brand-cherry">Explore</h4>
            <ul className="space-y-4 font-display font-bold text-sm uppercase tracking-wider">
              {['Home', 'Flavours', 'Rewards', 'Find Dr Fizz', 'Merch'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-cherry transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-8 text-brand-cherry">Company</h4>
            <ul className="space-y-4 font-display font-bold text-sm uppercase tracking-wider">
              {['Our Story', 'Careers', 'Contact Us', 'Press Kit'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-brand-cherry transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] mb-8 text-brand-cherry">Stay Bold</h4>
            <p className="text-sm mb-6 text-brand-cream/50">Get the latest flavour drops and merch directly to your inbox.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-brand-cream/5 border-b-2 border-brand-cream/20 py-4 outline-none focus:border-brand-cherry transition-all font-display font-bold group-hover:bg-brand-cream/10 px-2"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-cherry">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-brand-cream/30 uppercase font-bold tracking-[0.2em]">
            © 2026 Dr Fizz Beverage Co. All Rights Reserved. Not a real brand.
          </p>
          <div className="flex items-center space-x-8 text-[10px] text-brand-cream/30 uppercase font-bold tracking-[0.2em]">
            <a href="#" className="hover:text-brand-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-cream transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-cream transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
