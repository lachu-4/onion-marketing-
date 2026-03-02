import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus, CreditCard } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Cart() {
  const { cart, removeFromCart, updateQuantity, subtotal, tax, delivery, total } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="w-24 h-24 bg-onion-green/10 rounded-full flex items-center justify-center mb-8">
          <ShoppingBag className="w-12 h-12 text-onion-green" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-onion-brown mb-4">Your cart is empty</h2>
        <p className="text-stone-500 mb-8 max-w-md text-center">
          Looks like you haven't added any premium onion products to your cart yet.
        </p>
        <Link to="/products" className="btn-primary px-12 py-4">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-bold text-onion-brown mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-onion-brown mb-1">{item.name}</h3>
                <p className="text-xs text-stone-400 mb-2 uppercase tracking-wider">{item.category}</p>
                <p className="text-onion-green font-bold">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-stone-800 rounded-xl overflow-hidden bg-black">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-stone-900 transition-colors text-white"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-bold min-w-[3rem] text-center text-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-stone-900 transition-colors text-white"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-black p-8 rounded-[2.5rem] sticky top-24 border border-stone-800 shadow-2xl">
            <h2 className="text-xl font-serif font-bold text-white mb-8">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-stone-400">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Tax (GST 18%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Delivery</span>
                <span>{delivery === 0 ? <span className="text-onion-green font-bold">FREE</span> : `₹${delivery.toFixed(2)}`}</span>
              </div>
              {delivery > 0 && (
                <p className="text-[10px] text-stone-500 italic">Free delivery on orders above ₹500</p>
              )}
              <div className="pt-4 border-t border-stone-800 flex justify-between text-xl font-bold text-white">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full btn-primary py-4 flex items-center justify-center gap-2"
            >
              <CreditCard className="w-5 h-5" /> Checkout <ArrowRight className="w-4 h-4" />
            </button>
            
            <Link
              to="/products"
              className="block text-center mt-6 text-sm font-bold text-stone-500 hover:text-onion-green transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
