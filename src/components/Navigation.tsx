import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useCart } from "../context/CartContext";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Process", path: "/process" },
  { name: "Impact", path: "/impact" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-onion-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-onion-green rounded-lg group-hover:rotate-12 transition-transform">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="font-serif font-bold text-xl text-onion-brown tracking-tight">
              Waste2Wellness
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-onion-green",
                  location.pathname === link.path
                    ? "text-onion-green"
                    : "text-stone-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <Link to="/cart" className="relative p-2 text-stone-600 hover:text-onion-green transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-onion-green text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>

            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Link to="/cart" className="relative p-2 text-stone-600">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-onion-green text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="p-2 text-stone-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-onion-green/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-lg font-medium",
                    location.pathname === link.path
                      ? "text-onion-green"
                      : "text-stone-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-onion-brown text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="text-onion-yellow w-6 h-6" />
              <span className="font-serif font-bold text-xl tracking-tight">
                Waste2Wellness
              </span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed">
              Turning agricultural surplus into sustainable wellness solutions. 
              Empowering farmers, reducing waste, and nourishing the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-onion-yellow">Quick Links</h4>
            <ul className="space-y-3 text-stone-300 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">Our Products</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">The Process</Link></li>
              <li><Link to="/impact" className="hover:text-white transition-colors">Social Impact</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-onion-yellow">Products</h4>
            <ul className="space-y-3 text-stone-300 text-sm">
              <li>Onion Powder</li>
              <li>Onion Paste</li>
              <li>Onion Seed Tea</li>
              <li>Onion Oil</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-onion-yellow">Connect</h4>
            <p className="text-stone-300 text-sm mb-4">
              Join our mission for sustainable agriculture.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <span className="text-xs">FB</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <span className="text-xs">TW</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <span className="text-xs">IG</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-stone-400 text-xs">
          <p>© {new Date().getFullYear()} Waste2Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
