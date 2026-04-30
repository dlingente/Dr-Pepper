/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { 
  FlavourShowcase, 
  WhyLove, 
  StoreLocator, 
  Rewards, 
  FoodPairings, 
  FAQ, 
  SocialProof, 
  LimitedEdition, 
  MerchShowcase,
  BrandStory
} from "./components/Content";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative scroll-smooth">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-cherry z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main>
        <Hero />
        <FlavourShowcase />
        <WhyLove />
        <BrandStory />
        <StoreLocator />
        <SocialProof />
        <Rewards />
        <FoodPairings />
        <LimitedEdition />
        <MerchShowcase />
        <FAQ />
        
        {/* Final CTA */}
        <section className="py-32 bg-brand-cream relative overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,28,36,0.05)_0%,transparent_70%)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="container mx-auto px-6 relative z-10"
          >
            <h2 className="font-display font-black text-6xl md:text-8xl text-brand-burgundy uppercase mb-12">
              READY FOR THE <br /> <span className="text-brand-cherry italic">CHARACTER?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="btn-primary py-6 px-12 text-lg">Find Near You</button>
              <button className="btn-secondary py-6 px-12 text-lg">Explore Flavours</button>
            </div>
          </motion.div>
          
          {/* Decorative floating cans on the sides */}
          <div className="absolute left-10 bottom-0 opacity-20 -rotate-12 blur-sm hidden lg:block">
            <div className="w-32 h-52 bg-brand-burgundy rounded-[2rem]" />
          </div>
          <div className="absolute right-10 top-0 opacity-20 rotate-12 blur-sm hidden lg:block">
            <div className="w-32 h-52 bg-brand-cherry rounded-[2rem]" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

