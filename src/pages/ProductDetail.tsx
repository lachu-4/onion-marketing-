import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Star, ShoppingCart, ArrowLeft, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { Review } from "../types";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState<Review[]>(product.reviews);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-onion-brown mb-4">Product not found</h2>
        <button onClick={() => navigate("/products")} className="btn-primary">
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.comment.trim()) return;

    const review: Review = {
      id: Date.now().toString(),
      userName: "You",
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split("T")[0],
    };

    setReviews([review, ...reviews]);
    setNewReview({ rating: 5, comment: "" });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const averageRating = reviews.length > 0
    ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
    : product.rating;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-stone-500 hover:text-onion-green mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-onion-green/10 text-onion-green text-xs font-bold uppercase tracking-wider mb-4">
              {product.category}
            </span>
            <h1 className="text-4xl font-serif font-bold text-onion-brown mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(averageRating) ? "fill-current" : "text-stone-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-stone-500">({product.reviews.length} reviews)</span>
            </div>
            <p className="text-3xl font-bold text-onion-green">₹{product.price}</p>
          </div>

          <p className="text-stone-600 mb-8 leading-relaxed">{product.description}</p>

          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-stone-800 rounded-xl overflow-hidden bg-black">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-stone-900 transition-colors text-white"
                >
                  -
                </button>
                <span className="px-4 py-2 font-bold min-w-[3rem] text-center text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-stone-900 transition-colors text-white"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary flex items-center justify-center gap-2 py-3"
              >
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
            </div>
            <p className="text-sm text-stone-500">
              {product.stock > 0 ? `${product.stock} items in stock` : "Out of stock"}
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {product.benefits.food && (
              <div className="p-4 bg-onion-green/5 rounded-2xl border border-onion-green/10">
                <h4 className="font-bold text-onion-green text-sm mb-1">Food</h4>
                <p className="text-xs text-stone-600">{product.benefits.food}</p>
              </div>
            )}
            {product.benefits.hair && (
              <div className="p-4 bg-onion-green/5 rounded-2xl border border-onion-green/10">
                <h4 className="font-bold text-onion-green text-sm mb-1">Hair</h4>
                <p className="text-xs text-stone-600">{product.benefits.hair}</p>
              </div>
            )}
            {product.benefits.skin && (
              <div className="p-4 bg-onion-green/5 rounded-2xl border border-onion-green/10">
                <h4 className="font-bold text-onion-green text-sm mb-1">Skin</h4>
                <p className="text-xs text-stone-600">{product.benefits.skin}</p>
              </div>
            )}
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-stone-100">
            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck className="w-6 h-6 text-onion-green" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">100% Natural</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Truck className="w-6 h-6 text-onion-green" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Fast Delivery</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <RotateCcw className="w-6 h-6 text-onion-green" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Easy Returns</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Reviews Section */}
      <section className="border-t border-stone-100 pt-16">
        <h2 className="text-2xl font-serif font-bold text-onion-brown mb-12">Customer Reviews</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Review Form */}
          <div className="lg:col-span-1">
            <form onSubmit={handleReviewSubmit} className="bg-black p-8 rounded-3xl border border-stone-800 shadow-xl">
              <h3 className="font-bold text-white mb-6">Write a Review</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-400 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className={`p-1 transition-colors ${newReview.rating >= star ? "text-yellow-400" : "text-stone-800"}`}
                      >
                        <Star className="w-6 h-6 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-400 mb-2">Comment</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full rounded-xl bg-stone-900 border-stone-800 focus:border-onion-green focus:ring-onion-green text-sm text-white placeholder-stone-600"
                    placeholder="Share your experience..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  />
                </div>
                <button type="submit" className="w-full btn-primary py-3">
                  Submit Review
                </button>
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-onion-green text-xs font-bold"
                  >
                    Review submitted successfully!
                  </motion.p>
                )}
              </div>
            </form>
          </div>

          {/* Review List */}
          <div className="lg:col-span-2 space-y-8">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="border-b border-stone-100 pb-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-onion-brown">{review.userName}</h4>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < review.rating ? "fill-current" : "text-stone-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-stone-400">{review.date}</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{review.comment}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-black border border-stone-800 rounded-3xl shadow-inner">
                <p className="text-stone-500">No reviews yet. Be the first to review this product!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
