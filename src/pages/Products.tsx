import { motion } from "motion/react";
import { Clock, CookingPot, FlaskConical, Heart, Leaf, ShieldCheck, TrendingUp } from "lucide-react";

const products = [
  {
    id: "onion-seed-tea",
    name: "Onion Seed Tea",
    description: "Herbal tea made from onion seeds.",
    uses: "Wellness and digestion (traditional use).",
    shelfLife: "Long-term dry storage.",
    benefits: ["Digestive aid", "Rich in antioxidants", "Unique flavor profile"],
    process: "Careful extraction and roasting of onion seeds.",
    image: "https://images.unsplash.com/photo-1594631252845-29fc45865157?auto=format&fit=crop&q=80&w=800",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    id: "onion-paste",
    name: "Onion Paste",
    description: "Fresh onion paste for curries and gravies.",
    uses: "Home kitchens, restaurants.",
    shelfLife: "Short-term refrigerated storage.",
    benefits: ["Time-saving", "Consistent flavor", "No preservatives"],
    process: "Cold-pressing and blending fresh onion flesh.",
    image: "https://images.unsplash.com/photo-1615485242231-da0346863539?auto=format&fit=crop&q=80&w=800",
    icon: <CookingPot className="w-6 h-6" />,
  },
  {
    id: "onion-oil",
    name: "Onion Oil",
    description: "Extracted from onion seeds or onion extract.",
    uses: "Hair care and cosmetic products.",
    shelfLife: "Long-term bottled storage.",
    benefits: ["Promotes hair growth", "Scalp health", "Natural nourishment"],
    process: "Cold-press extraction from nutrient-rich onion seeds.",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800",
    icon: <FlaskConical className="w-6 h-6" />,
  },
  {
    id: "onion-powder",
    name: "Onion Powder",
    description: "Made from dehydrated onions for cooking.",
    uses: "Food, seasoning, instant meals.",
    shelfLife: "6–12 months.",
    benefits: ["Versatile seasoning", "Long shelf life", "100% natural"],
    process: "Dehydration and fine grinding of surplus onion flesh.",
    image: "https://images.unsplash.com/photo-1618376168161-66d8c35ad2c9?auto=format&fit=crop&q=80&w=800",
    icon: <CookingPot className="w-6 h-6" />,
  },
];

export function Products() {
  return (
    <div className="py-24 space-y-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-onion-brown mb-8">
            Our <span className="text-onion-green">Value-Added</span> Range
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            We've carefully developed four distinct product lines from onion surplus, ensuring every part of the harvest finds its purpose.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-onion-green/5 rounded-[2rem] group-hover:bg-onion-green/10 transition-colors"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className={`space-y-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-onion-green/10 flex items-center justify-center text-onion-green">
                  {product.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-onion-brown">
                  {product.name}
                </h2>
              </div>

              <p className="text-lg text-stone-600 leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-onion-green font-bold text-sm uppercase tracking-wider">
                    <Leaf className="w-4 h-4" />
                    <span>Uses</span>
                  </div>
                  <p className="text-stone-600 text-sm">{product.uses}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-onion-green font-bold text-sm uppercase tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>Shelf Life</span>
                  </div>
                  <p className="text-stone-600 text-sm">{product.shelfLife}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-onion-green font-bold text-sm uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Key Benefits</span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-stone-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-onion-green"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-onion-green/10">
                <div className="text-sm font-bold text-onion-brown mb-2">Process Summary:</div>
                <p className="text-sm text-stone-500 italic">{product.process}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

    </div>
  );
}
