import { motion } from "motion/react";
import { ArrowDown, CheckCircle2, Factory, Filter, Package, Truck } from "lucide-react";

const steps = [
  {
    title: "Farmer Sourcing",
    description: "We partner with local farmers to collect surplus and non-marketable onions.",
    icon: <Truck className="w-6 h-6" />,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Cleaning & Sorting",
    description: "Onions are thoroughly cleaned and sorted to ensure only the best quality is processed.",
    icon: <Filter className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Separation",
    description: "Onion flesh is separated from seeds, directing them to their respective specialized lines.",
    icon: <Factory className="w-6 h-6" />,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Processing",
    description: "Flesh becomes Powder & Paste; Seeds are extracted for Tea & Oil.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Packaging",
    description: "Final products are eco-packaged and ready for distribution.",
    icon: <Package className="w-6 h-6" />,
    color: "bg-onion-green/10 text-onion-green",
  },
];

export function Process() {
  return (
    <div className="py-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-onion-brown mb-8">
          Our <span className="text-onion-green">Step-by-Step</span> Flow
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto">
          Transparency is at the heart of what we do. Follow the journey from the farm to your home.
        </p>
      </section>

      {/* Process Flow Visualization */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-onion-green/10 -translate-x-1/2 hidden md:block"></div>
        
        <div className="space-y-12 md:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon Circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-white border-4 border-onion-cream shadow-xl flex items-center justify-center flex-shrink-0">
                <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center`}>
                  {step.icon}
                </div>
              </div>

              {/* Content Card */}
              <div className={`flex-grow bg-white p-8 rounded-3xl shadow-sm border border-onion-green/5 text-center md:text-left ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}>
                <h3 className="text-2xl font-serif font-bold text-onion-brown mb-4">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialized Lines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-onion-brown rounded-[3rem] p-12 md:p-20 text-white">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center">Specialized Production Lines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
            
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-onion-yellow/20 text-onion-yellow text-sm font-bold mb-4">
                Onion Flesh Line
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Drying</h4>
                    <p className="text-stone-400 text-sm">Controlled dehydration to preserve nutrients and flavor.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Grinding</h4>
                    <p className="text-stone-400 text-sm">Fine milling for powder or blending for fresh paste.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-block px-4 py-1 rounded-full bg-onion-yellow/20 text-onion-yellow text-sm font-bold mb-4">
                Onion Seed Line
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Extraction</h4>
                    <p className="text-stone-400 text-sm">Cold-press extraction for oil and careful roasting for tea.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Refining</h4>
                    <p className="text-stone-400 text-sm">Natural filtration and stabilization for long shelf life.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
