import { motion } from "motion/react";
import { Briefcase, Globe, HeartHandshake, Leaf } from "lucide-react";

const impacts = [
  {
    title: "Farmer Income Improvement",
    description: "By purchasing surplus onions, we provide a safety net for farmers, increasing their annual income by up to 150%.",
    icon: <HeartHandshake className="w-8 h-8" />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Reduction of Food Waste",
    description: "Our process diverts thousands of tons of onions from landfills, reducing methane emissions and environmental strain.",
    icon: <Leaf className="w-8 h-8" />,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Environmental Sustainability",
    description: "We use eco-friendly processing methods and biodegradable packaging to ensure a minimal carbon footprint.",
    icon: <Globe className="w-8 h-8" />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Rural Employment",
    description: "Our processing units are located in rural areas, creating meaningful jobs and supporting local economies.",
    icon: <Briefcase className="w-8 h-8" />,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export function Impact() {
  return (
    <div className="py-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-onion-brown mb-8">
            Creating <span className="text-onion-green">Real Change</span>
          </h1>
          <p className="text-xl text-stone-600">
            Our success is measured by the positive impact we have on our planet and our people.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 bg-white rounded-[2.5rem] border border-onion-green/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-onion-brown mb-4">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-onion-yellow/30 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 h-96 lg:h-auto">
            <img
              src="https://picsum.photos/seed/farmer-smile/800/800"
              alt="Happy Farmer"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full lg:w-1/2 p-12 md:p-20 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-onion-brown">A Farmer's Story</h2>
            <blockquote className="text-xl text-stone-700 italic leading-relaxed">
              "Before Waste2Wellness, I had to watch my hard work rot in the fields when prices dropped. Now, I have a guaranteed buyer and a steady income for my family. It's changed everything."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-onion-green/20"></div>
              <div>
                <div className="font-bold text-onion-brown">Rajesh Kumar</div>
                <div className="text-sm text-stone-500">Onion Farmer, Maharashtra</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
