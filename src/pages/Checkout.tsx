import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { CreditCard, Truck, ShieldCheck, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    card: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-onion-green/10 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 className="w-12 h-12 text-onion-green" />
        </motion.div>
        <h2 className="text-4xl font-serif font-bold text-onion-brown mb-4">Order Confirmed!</h2>
        <p className="text-stone-500 mb-8 max-w-md">
          Thank you for your purchase. We've sent a confirmation email to {formData.email}.
          Your order will be delivered within 3-5 business days.
        </p>
        <button onClick={() => navigate("/")} className="btn-primary px-12 py-4">
          Back to Home
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold text-onion-brown mb-4">Your cart is empty</h2>
        <button onClick={() => navigate("/products")} className="btn-primary">
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => navigate("/cart")}
        className="flex items-center gap-2 text-stone-500 hover:text-onion-green mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Cart
      </button>

      <h1 className="text-4xl font-serif font-bold text-onion-brown mb-12">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Shipping & Payment Form */}
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-onion-green/10 flex items-center justify-center text-onion-green">
                <Truck className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif font-bold text-onion-brown">Shipping Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-stone-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl bg-black border-stone-800 text-white focus:border-onion-green focus:ring-onion-green"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl bg-black border-stone-800 text-white focus:border-onion-green focus:ring-onion-green"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-stone-700 mb-2">Street Address</label>
                <textarea
                  name="address"
                  required
                  rows={3}
                  className="w-full rounded-xl bg-black border-stone-800 text-white focus:border-onion-green focus:ring-onion-green"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  required
                  className="w-full rounded-xl bg-black border-stone-800 text-white focus:border-onion-green focus:ring-onion-green"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  required
                  className="w-full rounded-xl bg-black border-stone-800 text-white focus:border-onion-green focus:ring-onion-green"
                  value={formData.zip}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-onion-green/10 flex items-center justify-center text-onion-green">
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-serif font-bold text-onion-brown">Payment Method (Test Mode)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-stone-700 mb-2">Card Number</label>
                <input
                  type="text"
                  name="card"
                  required
                  placeholder="0000 0000 0000 0000"
                  className="w-full rounded-xl bg-black border-stone-800 text-white focus:border-onion-green focus:ring-onion-green placeholder-stone-700"
                  value={formData.card}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Expiry Date</label>
                <input
                  type="text"
                  name="expiry"
                  required
                  placeholder="MM/YY"
                  className="w-full rounded-xl bg-black border-stone-800 text-white focus:border-onion-green focus:ring-onion-green placeholder-stone-700"
                  value={formData.expiry}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  required
                  placeholder="000"
                  className="w-full rounded-xl bg-black border-stone-800 text-white focus:border-onion-green focus:ring-onion-green placeholder-stone-700"
                  value={formData.cvv}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Order Summary Sidebar */}
        <div>
          <div className="bg-black p-8 rounded-[2.5rem] sticky top-24 border border-stone-800 shadow-2xl">
            <h2 className="text-xl font-serif font-bold text-white mb-8">Order Summary</h2>
            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-stone-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-onion-green">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-stone-800 space-y-4 mb-8">
              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total Amount</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>Place Order ₹{total.toFixed(2)}</>
              )}
            </button>

            <div className="mt-8 flex items-center justify-center gap-2 text-stone-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-widest font-bold">Secure Checkout</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
