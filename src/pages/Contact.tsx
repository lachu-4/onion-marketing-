import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-onion-brown mb-8">
            Get in <span className="text-onion-green">Touch</span>
          </h1>
          <p className="text-xl text-stone-600">
            Have questions about our products or want to partner with us? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-onion-brown">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-onion-green/10 text-onion-green flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-onion-brown mb-1">Address</h4>
                    <p className="text-stone-500 text-sm">123 Green Valley Road, Agri-Tech Hub, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-onion-green/10 text-onion-green flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-onion-brown mb-1">Email</h4>
                    <p className="text-stone-500 text-sm">hello@waste2wellness.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-onion-green/10 text-onion-green flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-onion-brown mb-1">Phone</h4>
                    <p className="text-stone-500 text-sm">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-onion-yellow/30 rounded-3xl border border-onion-green/5">
              <h3 className="font-bold text-onion-brown mb-4">Business Hours</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-onion-green/5 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-stone-700 ml-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-onion-green/20 focus:border-onion-green transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-stone-700 ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-onion-green/20 focus:border-onion-green transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-stone-700 ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-onion-green/20 focus:border-onion-green transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                    isSubmitted
                      ? "bg-green-600 text-white cursor-default"
                      : "bg-onion-green text-white hover:bg-green-800 hover:shadow-lg active:scale-[0.98]"
                  }`}
                >
                  {isSubmitted ? (
                    <>Message Sent Successfully!</>
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="h-96 w-full bg-stone-200 rounded-[3rem] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
          <img
            src="https://picsum.photos/seed/location-map/1920/1080"
            alt="Map Location"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-3xl shadow-2xl border border-onion-green/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-onion-green text-white flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-onion-brown">Waste2Wellness HQ</div>
                <div className="text-sm text-stone-500">Maharashtra, India</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
