import { motion } from "motion/react";
import { Eye, Target } from "lucide-react";

export function About() {
  return (
    <div className="py-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-onion-brown mb-8">
            Our <span className="text-onion-green">Mission & Vision</span>
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            We are a team of agricultural innovators, food scientists, and sustainability advocates dedicated to solving the onion waste crisis.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white rounded-[3rem] border border-onion-green/5 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-onion-green/10 text-onion-green flex items-center justify-center mb-8">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-onion-brown mb-6">Our Mission</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              To reduce onion wastage and create high-value products that benefit both consumers and farmers. We aim to build a circular economy where agricultural surplus is transformed into wellness solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-onion-brown text-white rounded-[3rem] shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 text-onion-yellow flex items-center justify-center mb-8">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-stone-300 leading-relaxed">
              Sustainable agriculture through innovation. We envision a future where no food goes to waste and every farmer is empowered with the technology to add value to their harvest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team/Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-onion-brown">How It All Started</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Waste2Wellness began in a small rural village where we witnessed firsthand the heartbreak of farmers dumping tons of perfectly good onions because market prices were too low to cover transport costs.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              We realized that the solution wasn't just better logistics, but better processing. By converting these onions into stable, high-value products, we could decouple the farmer's income from the volatile fresh market.
            </p>
            <div className="flex gap-8">
              <div className="space-y-1">
                <div className="text-2xl font-serif font-bold text-onion-green">2022</div>
                <div className="text-sm text-stone-500 uppercase tracking-widest">Founded</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-serif font-bold text-onion-green">50+</div>
                <div className="text-sm text-stone-500 uppercase tracking-widest">Partners</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-serif font-bold text-onion-green">4</div>
                <div className="text-sm text-stone-500 uppercase tracking-widest">Product Lines</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-onion-green/10 rounded-[3rem] rotate-3"></div>
            <img
              src="https://picsum.photos/seed/team-work/800/600"
              alt="Our Team"
              className="relative w-full rounded-[2.5rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
