import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, SlidersHorizontal, ShoppingCart, Star, ChevronDown } from "lucide-react";
import { products } from "../data/products";
import { Category } from "../types";
import { useCart } from "../context/CartContext";

export function Products() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [selectedWeight, setSelectedWeight] = useState<number | "All">("All");
  const [sortBy, setSortBy] = useState<"price-low" | "price-high" | "rating">("rating");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesWeight = selectedWeight === "All" || product.weight === selectedWeight;
        return matchesSearch && matchesCategory && matchesWeight;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedWeight, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-onion-brown mb-4">
          Our <span className="text-onion-green">Premium</span> Range
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto">
          From culinary essentials to wellness teas and cosmetic oils, discover the power of value-added onion products.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-black border-stone-800 text-white placeholder-stone-500 focus:border-onion-green focus:ring-onion-green text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-black border border-stone-800 rounded-2xl text-sm font-bold text-white hover:bg-stone-900 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </button>
        <div className="relative">
          <select
            className="appearance-none pl-6 pr-12 py-3 bg-black border border-stone-800 rounded-2xl text-sm font-bold text-white focus:border-onion-green focus:ring-onion-green cursor-pointer"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="rating">Sort by: Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
        </div>
      </div>

      {/* Filter Panel */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-12"
          >
            <div className="p-8 bg-black rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12 border border-stone-800">
              <div>
                <h4 className="font-bold text-stone-400 mb-4 uppercase tracking-wider text-xs">Categories</h4>
                <div className="flex flex-wrap gap-3">
                  {["All", ...Object.values(Category)].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat as any)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                        selectedCategory === cat
                          ? "bg-onion-green text-white"
                          : "bg-stone-900 text-stone-400 hover:bg-onion-green/20"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-stone-400 mb-4 uppercase tracking-wider text-xs">Weight / Size</h4>
                <div className="flex flex-wrap gap-3">
                  {["All", 100, 250, 500].map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight as any)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                        selectedWeight === weight
                          ? "bg-onion-green text-white"
                          : "bg-stone-900 text-stone-400 hover:bg-onion-green/20"
                      }`}
                    >
                      {weight === "All" ? "All Sizes" : `${weight}g`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-500"
            >
              <Link to={`/products/${product.id}`} className="block relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-onion-green">
                    {product.category}
                  </span>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Link to={`/products/${product.id}`} className="hover:text-onion-green transition-colors">
                    <h3 className="font-serif font-bold text-lg text-onion-brown leading-tight">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs font-bold text-stone-600">{product.rating}</span>
                  </div>
                </div>
                <p className="text-stone-500 text-xs mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-onion-green">₹{product.price}</span>
                  <button
                    onClick={() => addToCart(product, 1)}
                    className="p-3 rounded-xl bg-onion-green/10 text-onion-green hover:bg-onion-green hover:text-white transition-all duration-300"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-stone-500 text-lg">No products found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setSelectedWeight("All");
            }}
            className="mt-4 text-onion-green font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
