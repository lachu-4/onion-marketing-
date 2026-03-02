import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Recycle, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-onion-yellow/20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/onion-field/1920/1080?blur=2"
            alt="Onion Field"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-onion-cream"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-onion-green/10 text-onion-green text-sm font-semibold mb-6">
                <Leaf className="w-4 h-4" />
                <span>Sustainable Agriculture Innovation</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-onion-brown leading-tight mb-8">
                From Waste to <span className="text-onion-green">Wellness</span>
              </h1>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed">
                Turning surplus onions into valuable products. We bridge the gap between agricultural waste and premium wellness solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-primary flex items-center gap-2">
                  Explore Products <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/process" className="btn-secondary">
                  Our Process
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut"
              }}
              className="hidden lg:block relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1618376168161-66d8c35ad2c9?auto=format&fit=crop&q=80&w=800"
                  alt="Premium Onion Products"
                  className="rounded-[3rem] shadow-2xl border-8 border-white/50"
                  referrerPolicy="no-referrer"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-onion-yellow rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-onion-green rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -left-10 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center p-4 border border-onion-green/10 z-20"
              >
                <div className="text-center">
                  <div className="text-onion-green font-bold text-xs uppercase tracking-tighter">100% Natural</div>
                  <div className="text-onion-brown font-serif font-bold text-sm">Wellness</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="section-title">The Challenge We Solve</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                  <Recycle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-onion-brown mb-2">Massive Food Waste</h3>
                  <p className="text-stone-600">Millions of tons of surplus onions are discarded annually due to market fluctuations and short shelf life.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                  <TrendingUp className="w-6 h-6 rotate-180" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-onion-brown mb-2">Farmer Losses</h3>
                  <p className="text-stone-600">Post-harvest losses directly impact the livelihoods of small-scale farmers who lack processing facilities.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-onion-green/5 rounded-3xl p-12 space-y-8 border border-onion-green/10">
            <h2 className="section-title text-onion-green">Our Solution</h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              We convert these surplus onions into four high-value products, extending shelf life from weeks to months and creating new revenue streams for rural communities.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-onion-green/5">
                <div className="font-bold text-onion-green mb-1">Food</div>
                <div className="text-sm text-stone-500">Powder & Paste</div>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-onion-green/5">
                <div className="font-bold text-onion-green mb-1">Wellness</div>
                <div className="text-sm text-stone-500">Onion Seed Tea</div>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-onion-green/5">
                <div className="font-bold text-onion-green mb-1">Cosmetic</div>
                <div className="text-sm text-stone-500">Onion Oil</div>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-onion-green/5">
                <div className="font-bold text-onion-green mb-1">Impact</div>
                <div className="text-sm text-stone-500">Rural Employment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Impact Preview */}
      <section className="bg-onion-brown py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-serif font-bold text-onion-yellow">40%</div>
              <div className="text-stone-400 text-sm uppercase tracking-wider">Waste Reduction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-serif font-bold text-onion-yellow">2.5x</div>
              <div className="text-stone-400 text-sm uppercase tracking-wider">Farmer Income</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-serif font-bold text-onion-yellow">15+</div>
              <div className="text-stone-400 text-sm uppercase tracking-wider">Rural Jobs</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-serif font-bold text-onion-yellow">100%</div>
              <div className="text-stone-400 text-sm uppercase tracking-wider">Organic Process</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-onion-green rounded-3xl p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Leaf className="w-64 h-64" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 relative z-10">
            Ready to Join the Revolution?
          </h2>
          <p className="text-xl text-green-50 mb-12 max-w-2xl mx-auto relative z-10">
            Whether you're a customer, a farmer, or a potential partner, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link to="/contact" className="px-8 py-4 bg-white text-onion-green rounded-full font-bold hover:bg-onion-yellow transition-colors">
              Contact Us Today
            </Link>
            <Link to="/about" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
