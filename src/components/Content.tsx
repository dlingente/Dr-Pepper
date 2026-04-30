import { motion } from "motion/react";
import { SodaCan } from "./SodaCan";
import { CheckCircle2, MapPin, Instagram, Facebook, Twitter, Star, ChevronDown, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

// 1. Product Flavour Showcase
export function FlavourShowcase() {
  const flavours = [
    { name: "Original", desc: "The legendary blend of 23 flavours.", color: "#7B1113" },
    { name: "Cherry", desc: "A smooth, tart burst of cherry character.", color: "#8B0000" },
    { name: "Cream Soda", desc: "Velvety smooth vanilla meets bold spice.", color: "#D4A017" },
    { name: "Zero Sugar", desc: "All the character, none of the sugar.", color: "#1a1a1a" },
    { name: "S & Cream", desc: "Sweet strawberry and rich cream bliss.", color: "#E57E7E" },
    { name: "Limited", desc: "Seasonal surprises for the bold.", color: "#4B0082" },
  ];

  return (
    <section id="flavours" className="py-24 bg-brand-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display font-black text-5xl md:text-7xl text-brand-cream uppercase italic mb-6">
            Pick Your <span className="text-brand-cherry">Character</span>
          </h2>
          <p className="text-brand-cream/60 max-w-2xl mx-auto text-lg italic uppercase tracking-widest text-xs">
            LATEST DROPS & CLASSIC GEMS
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavours.map((f, idx) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-glass p-10 flex flex-col items-center group cursor-pointer"
            >
              <SodaCan label={f.name} color={f.color} className="mb-10 scale-90 group-hover:scale-105 transition-transform duration-500" />
              <h3 className="font-display font-black text-2xl text-brand-cream italic mb-2 uppercase">{f.name}</h3>
              <p className="text-brand-cream/50 text-center text-sm mb-8 leading-relaxed italic">
                {f.desc}
              </p>
              <button className="text-[10px] font-black uppercase tracking-widest text-brand-cherry hover:text-white transition-colors">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. Why People Love It
export function WhyLove() {
  const benefits = [
    { title: "23 Flavour Blend", desc: "A complex, aromatic spice blend that defies explanation.", icon: "✨" },
    { title: "Bold & Refreshing", desc: "The perfect fizz that hits different with every sip.", icon: "🔥" },
    { title: "Pairs With Everything", desc: "From backyard BBQs to late-night gaming sessions.", icon: "🍔" },
    { title: "Sugar Free Options", desc: "Maximum character without the calorie count.", icon: "⚡" },
  ];

  return (
    <section className="py-24 bg-brand-burgundy text-brand-cream overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cherry/20 blur-[150px]" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-8 leading-none">
              A Taste <br /> Beyond <br /> <span className="text-brand-cherry">Basic.</span>
            </h2>
            <p className="text-brand-cream/60 text-lg mb-12 max-w-md">
              We don't do boring. We do character. And that's why millions crave the unique Dr Fizz experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-cream/5 border border-brand-cream/10 p-8 rounded-3xl backdrop-blur-sm"
              >
                <div className="text-4xl mb-6">{b.icon}</div>
                <h4 className="font-display font-bold text-xl mb-3">{b.title}</h4>
                <p className="text-brand-cream/50 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. Store Locator
export function StoreLocator() {
  const [zip, setZip] = useState("");

  return (
    <section id="find" className="py-24 bg-brand-burgundy">
      <div className="container mx-auto px-6">
        <div className="bg-brand-cream rounded-[2.5rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <h2 className="font-display font-black text-4xl md:text-6xl text-brand-black uppercase italic mb-8">
              GET IT COLD. <br /> <span className="text-brand-cherry">NOW.</span>
            </h2>
            <p className="text-brand-black/60 mb-10 text-lg italic">
              Don't let the craving wait. Locate the nearest Dr Fizz near you.
            </p>
            
            <div className="space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Enter Postcode or City"
                  className="w-full bg-transparent border-b-2 border-brand-black/10 focus:border-brand-cherry py-4 px-2 font-display font-black italic uppercase outline-none transition-all"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {["Tesco", "Sainsbury's", "Asda", "Online"].map(f => (
                  <button key={f} className="text-[9px] uppercase font-black tracking-widest px-3 py-1 bg-brand-black/5 rounded hover:bg-brand-cherry hover:text-white transition-colors">
                    {f}
                  </button>
                ))}
              </div>
              <button className="btn-primary w-full py-5 text-lg">Search Stores</button>
            </div>
          </div>
          <div className="bg-brand-burgundy/10 relative min-h-[400px]">
             {/* Map Placeholder */}
             <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://picsum.photos/seed/map/1200/800')] bg-cover bg-center" />
             <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-transparent to-transparent hidden lg:block" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 bg-brand-cherry rounded-full flex items-center justify-center border-4 border-white shadow-2xl"
                >
                  <MapPin className="text-white" size={24} />
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. Rewards Section
export function Rewards() {
  return (
    <section id="rewards" className="py-24 bg-brand-cherry text-brand-cream relative overflow-hidden">
      <div className="absolute -left-20 top-0 w-80 h-80 bg-brand-burgundy/30 blur-[100px]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-black text-5xl md:text-8xl uppercase mb-8 text-shadow-sm">
            Join the <span className="italic">Pepper Club</span>
          </h2>
          <p className="text-xl mb-12 text-brand-cream/80 max-w-2xl mx-auto italic">
            Unlock exclusive flavours, limited merch, and early access to drops. It’s for the fans who live with character.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={e => e.preventDefault()}>
            <div className="relative flex-grow">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-cherry" size={20} />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full bg-brand-cream text-brand-black rounded-full py-5 px-16 font-display font-bold outline-none border-4 border-transparent focus:border-brand-burgundy/20"
              />
            </div>
            <button className="bg-brand-burgundy text-brand-cream py-5 px-12 rounded-full font-display font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
              Join Now
            </button>
          </form>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
            <span>Exclusive Flavours</span>
            <span>Monthly Giveaways</span>
            <span>VIP Merch Drops</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. Food Pairings
export function FoodPairings() {
  const pairings = [
    { name: "Smash Burgers", img: "https://picsum.photos/seed/burger/400/300" },
    { name: "Spicy Wings", img: "https://picsum.photos/seed/wings/400/300" },
    { name: "Pepperoni Pizza", img: "https://picsum.photos/seed/pizza/400/300" },
    { name: "Movie Popcorn", img: "https://picsum.photos/seed/popcorn/400/300" },
  ];

  return (
    <section className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display font-black text-4xl md:text-6xl text-brand-burgundy uppercase">Better <span className="text-brand-cherry">Together</span></h2>
            <p className="text-brand-burgundy/60 italic mt-4">The ultimate companion for your favourite cravings.</p>
          </div>
          <button className="btn-secondary whitespace-nowrap">View All Pairings</button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {pairings.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-80 rounded-[3rem] overflow-hidden"
            >
              <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="font-display font-black text-brand-cream text-2xl uppercase leading-none">{p.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. Social Proof
export function SocialProof() {
  const reviews = [
    { name: "@SodaStan", text: "The only drink that actually hits the spot during long gaming sessions. #DrFizz", avatar: "SS" },
    { name: "@FizzFanatic", text: "That 23-flavour blend is literal magic. Can't explain it, just love it.", avatar: "FF" },
    { name: "@CherryQueen", text: "The cherry flavour is the perfect balance of sweet and tart. Obsessed!", avatar: "CQ" },
  ];

  const tickerItems = [
    "★ Rated 4.9/5 by soda fans",
    "★ 23 Secret Ingredients",
    "★ Authentic Since 1885",
    "★ Now in Zero Sugar",
    "★ Available Nationwide",
    "★ Best served ice cold"
  ];

  return (
    <section className="py-24 bg-brand-black border-t border-white/5 relative overflow-hidden">
       {/* Background decorative text */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 font-display font-black text-[20vw] italic opacity-5 pointer-events-none whitespace-nowrap">
        #CRAVETHEFIZZ
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-display font-black text-4xl text-center text-brand-cream uppercase italic mb-2">Join the <span className="text-brand-cherry underline decoration-4 underline-offset-8">Movement</span></h2>
        <p className="text-center text-brand-cherry italic mb-16 tracking-widest uppercase text-xs font-black">#CraveTheFizz</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="card-glass p-10 relative"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-display font-bold text-white border border-white/20">
                  {r.avatar}
                </div>
                <div className="font-display font-black italic text-brand-cream">{r.name}</div>
                <div className="flex-grow flex justify-end text-brand-cherry">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-brand-cream/70 italic leading-relaxed">"{r.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ticker Footer */}
      <div className="mt-24 h-16 bg-white flex items-center overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex space-x-12 px-12 items-center"
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="font-display font-black italic text-sm uppercase text-brand-black flex-shrink-0">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// 8. Limited Edition Banner
export function LimitedEdition() {
  return (
    <section className="py-24 bg-brand-black text-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-burgundy to-brand-black opacity-90 z-0" />
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/darkcosmos/1920/1080')] bg-cover mix-blend-multiply opacity-30 z-0" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block bg-brand-cherry px-4 py-1.5 rounded-sm text-[10px] font-display font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-black/40">
            Time Limited Drop
          </div>
          <h2 className="font-display font-black text-6xl md:text-9xl uppercase italic mb-8 leading-[0.8] text-shadow-sm">
            DARK <br /> <span className="text-brand-cherry not-italic underline decoration-8 underline-offset-[10px]">COSMOS</span> <br /> EDITION
          </h2>
          <p className="text-brand-cream/60 text-xl mb-12 italic leading-relaxed max-w-lg">
            A space-inspired flavour experience that’s out of this world. Crafted for the bold observers of the unknown.
          </p>
          
          <div className="flex items-center space-x-12 mb-12">
            {[ { val: "2", unit: "Days" }, { val: "14", unit: "Hrs" }, { val: "35", unit: "Mins" } ].map(t => (
              <div key={t.unit}>
                <p className="font-display font-black text-4xl uppercase leading-none">{t.val}</p>
                <p className="text-[10px] uppercase opacity-50 font-bold tracking-widest mt-2">{t.unit}</p>
              </div>
            ))}
          </div>
          <button className="btn-primary py-6 px-12">Discover the Drop</button>
        </div>
        
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [5, 10, 5] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute w-[80%] h-[80%] bg-brand-cherry/20 blur-[120px] rounded-full animate-pulse" />
          <SodaCan label="Limited" color="#4B0082" className="w-56 h-96 md:w-80 md:h-[34rem] relative z-10" />
        </motion.div>
      </div>
    </section>
  );
}

// 9. Merch Section
export function MerchShowcase() {
  const items = [
    { name: "Classic Tee", price: "$28", img: "https://picsum.photos/seed/shirt/400/400" },
    { name: "Fizz Cap", price: "$24", img: "https://picsum.photos/seed/cap/400/400" },
    { name: "Vintage Cooler", price: "$95", img: "https://picsum.photos/seed/cooler/400/400" },
    { name: "Character Pins", price: "$12", img: "https://picsum.photos/seed/pin/400/400" },
  ];

  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="font-display font-black text-5xl text-brand-burgundy uppercase mb-16 underline decoration-brand-cherry decoration-8 underline-offset-8 text-center md:text-left">
          The <span className="text-brand-cherry">Gear.</span>
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-square bg-white rounded-[3rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <p className="font-display font-bold text-brand-burgundy uppercase text-sm mb-1">{item.name}</p>
              <p className="font-display font-black text-brand-cherry text-xl">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="btn-secondary">Shop All Merch</button>
        </div>
      </div>
    </section>
  );
}

// 10. FAQ
export function FAQ() {
  const faqs = [
    { q: "Where can I buy Dr Fizz?", a: "Dr Fizz is available in most major supermarkets, convenience stores, and petrol stations nationwide. Check our store locator for the exact spot near you!" },
    { q: "Is there a Zero Sugar version?", a: "Absolutely! We believe in character without compromise. You can find our Zero Sugar version in most of your favourite formats." },
    { q: "What are the 23 mysterious flavours?", a: "That's a secret we'll take to the grave. But let's just say it's a perfect harmony of spice, fruit, and smooth vanilla." },
    { q: "Can I buy merchandise?", a: "Yes! Check out our Merch section for the latest tees, hats, and limited-edition cans." },
  ];

  return (
    <section className="py-24 bg-brand-cream/50 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display font-black text-4xl text-brand-burgundy uppercase text-center mb-16 underline decoration-brand-cherry decoration-4 underline-offset-8">
          The <span className="text-brand-cherry">Details.</span>
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-3xl shadow-sm overflow-hidden border border-brand-burgundy/5 transition-all hover:shadow-xl">
              <summary className="list-none p-8 flex items-center justify-between cursor-pointer">
                <span className="font-display font-bold text-lg text-brand-burgundy">{faq.q}</span>
                <ChevronDown className="group-open:rotate-180 transition-transform text-brand-cherry" size={24} />
              </summary>
              <div className="p-8 pt-0 text-brand-burgundy/60 italic leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// 11. Brand Story
export function BrandStory() {
  return (
    <section id="story" className="py-24 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-brand-burgundy rounded-[4rem] overflow-hidden rotate-2 shadow-2xl relative">
              <img src="https://picsum.photos/seed/vintage/800/1000" className="w-full h-full object-cover mix-blend-multiply opacity-80" alt="Vintage Brand" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy to-transparent" />
            </div>
            <div className="absolute -bottom-10 -right-4 md:-right-10 w-48 h-48 md:w-64 md:h-64 bg-brand-cherry rounded-[3rem] p-6 md:p-10 flex items-center justify-center -rotate-6 shadow-2xl z-20">
              <p className="font-display font-black text-brand-cream text-xl md:text-2xl text-center leading-tight uppercase">EST. 1885 <br /> ALWAYS <br /> BOLD.</p>
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-cream rounded-full border-8 border-brand-burgundy/10 flex items-center justify-center rotate-12 z-0 blur-[2px]" />
          </div>
          <div>
            <h2 className="font-display font-black text-5xl md:text-7xl text-brand-burgundy uppercase mb-8 leading-[0.9]">
              A DRINK WITH <br /> <span className="text-brand-cherry italic">CHARACTER.</span>
            </h2>
            <p className="text-brand-burgundy/70 text-lg leading-relaxed mb-8 italic">
              Dr Fizz isn't just another soda. It's a statement. Born in a small-town pharmacy over a century ago, it was crafted for those who wanted something complex, something different, and something entirely original.
            </p>
            <p className="text-brand-burgundy/70 text-lg leading-relaxed mb-10">
              We've stayed true to our roots while constantly pushing boundaries. Whether it's our classic blend or our daring new limited editions, every sip is a reminder that being yourself is the most refreshing thing you can be.
            </p>
            <button className="btn-secondary group">
              Read Our Full History
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

