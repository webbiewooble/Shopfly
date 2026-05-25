/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, ArrowRight, Gift, CreditCard, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Mock Data ---
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
};

const PRODUCTS: Product[] = [
  { id: 1, name: 'Midnight Jasmine Candle', price: 34.00, image: 'https://picsum.photos/seed/candle/800/800', category: 'Home Fragrance', rating: 4.8, reviews: 124 },
  { id: 2, name: 'Classic Leather Watch', price: 145.00, image: 'https://picsum.photos/seed/watch/800/800', category: 'Accessories', rating: 4.9, reviews: 89 },
  { id: 3, name: 'Artisan Chocolate Truffles', price: 42.00, image: 'https://picsum.photos/seed/chocolate/800/800', category: 'Gourmet', rating: 4.7, reviews: 256 },
  { id: 4, name: 'Gold Minimalist Necklace', price: 85.00, image: 'https://picsum.photos/seed/necklace/800/800', category: 'Jewelry', rating: 4.6, reviews: 42 },
  { id: 5, name: 'Botanical Spa Gift Set', price: 68.00, image: 'https://picsum.photos/seed/spa/800/800', category: 'Bath & Body', rating: 4.9, reviews: 312 },
  { id: 6, name: 'Handcrafted Ceramic Vase', price: 55.00, image: 'https://picsum.photos/seed/vase/800/800', category: 'Home Decor', rating: 4.5, reviews: 78 },
  { id: 7, name: 'Silk Sleep Mask & Pillowcase', price: 89.00, image: 'https://picsum.photos/seed/silk/800/800', category: 'Wellness', rating: 4.8, reviews: 156 },
  { id: 8, name: 'Premium Coffee Blend Trio', price: 45.00, image: 'https://picsum.photos/seed/coffee/800/800', category: 'Gourmet', rating: 4.7, reviews: 403 },
];

type CartItem = Product & { quantity: number };

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen font-sans selection:bg-stone-200">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="lg:hidden p-2 -ml-2 text-stone-900 hover:bg-stone-100/50 rounded-full transition-colors">
              <Menu size={24} />
            </button>
            <div className="hidden lg:flex gap-8 text-sm font-medium tracking-wide">
              <a href="#" className="hover:text-stone-500 transition-colors">Shop</a>
              <a href="#" className="hover:text-stone-500 transition-colors">Collections</a>
              <a href="#" className="hover:text-stone-500 transition-colors">Our Story</a>
            </div>
          </div>
          
          <a href="#" className="font-serif text-2xl tracking-tight absolute left-1/2 -translate-x-1/2">
            Lumière & Co.
          </a>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block p-2 text-stone-900 hover:bg-stone-100/50 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-stone-900 hover:bg-stone-100/50 rounded-full transition-colors relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[85vh] w-full bg-stone-200 overflow-hidden">
        <img 
          src="https://picsum.photos/seed/giftwrap/1920/1080" 
          alt="Beautifully wrapped gifts" 
          className="absolute inset-0 w-full h-full object-cover" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 mt-16">
          <div className="max-w-2xl text-white">
            <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-tight">The Art of Gifting</h1>
            <p className="text-lg md:text-xl font-light mb-10 opacity-90">
              Curated collections for life's most meaningful moments. Discover gifts that tell a story.
            </p>
            <button className="bg-white text-stone-900 px-8 py-4 rounded-full font-medium tracking-wide hover:bg-stone-100 transition-colors shadow-lg">
              Shop the Collection
            </button>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="bg-stone-900 text-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-800">
          <div className="flex flex-col items-center p-6">
            <Gift size={32} className="mb-4 text-stone-400" />
            <h3 className="font-medium text-lg mb-2">Complimentary Gift Wrap</h3>
            <p className="text-stone-400 text-sm">Every order arrives in our signature packaging.</p>
          </div>
          <div className="flex flex-col items-center p-6">
            <Truck size={32} className="mb-4 text-stone-400" />
            <h3 className="font-medium text-lg mb-2">Express Delivery</h3>
            <p className="text-stone-400 text-sm">Free express shipping on orders over $150.</p>
          </div>
          <div className="flex flex-col items-center p-6">
            <CreditCard size={32} className="mb-4 text-stone-400" />
            <h3 className="font-medium text-lg mb-2">Secure Payment</h3>
            <p className="text-stone-400 text-sm">We accept all major credit cards and PayPal.</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-3">Curated Gifts</h2>
            <p className="text-stone-500">Handpicked treasures for your loved ones.</p>
          </div>
          <button className="flex items-center gap-2 text-stone-900 font-medium hover:opacity-70 transition-opacity pb-1 border-b border-stone-900">
            View All <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {PRODUCTS.map(product => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden mb-5">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  referrerPolicy="no-referrer" 
                />
                <button
                  onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-stone-900 py-3.5 rounded-xl font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white shadow-sm"
                >
                  Add to Cart
                </button>
                <button className="absolute top-4 right-4 p-2.5 bg-white/50 backdrop-blur-md rounded-full text-stone-600 hover:text-rose-500 hover:bg-white transition-colors">
                  <Heart size={18} />
                </button>
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-[11px] text-stone-500 uppercase tracking-widest mb-1.5 font-medium">{product.category}</p>
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h3 className="font-medium text-stone-900 leading-tight">{product.name}</h3>
                  <p className="font-medium text-stone-900">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Newsletter */}
      <section className="bg-stone-200 py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Join the Inner Circle</h2>
          <p className="text-stone-600 mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-full bg-white border-none focus:ring-2 focus:ring-stone-900 outline-none"
              required
            />
            <button type="submit" className="px-8 py-4 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl mb-6">Lumière & Co.</h2>
            <p className="text-stone-500 max-w-sm mb-8 leading-relaxed">
              Curating the world's finest gifts for the people who matter most. Thoughtfully sourced, beautifully presented.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-6 text-stone-900">Shop</h3>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#" className="hover:text-stone-900 transition-colors">For Her</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">For Him</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Corporate Gifts</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-6 text-stone-900">Support</h3>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#" className="hover:text-stone-900 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Track Order</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-stone-100 text-stone-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2026 Lumière & Co. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-white">
                <h2 className="font-serif text-2xl">Your Cart ({cartCount})</h2>
                <button 
                  onClick={() => setIsCartOpen(false)} 
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500 hover:text-stone-900"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 bg-white">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-stone-500 space-y-4">
                    <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-2">
                      <ShoppingBag size={32} className="text-stone-300" />
                    </div>
                    <p className="text-lg">Your cart is empty</p>
                    <button 
                      onClick={() => setIsCartOpen(false)} 
                      className="text-stone-900 font-medium underline underline-offset-4 hover:text-stone-600 transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-24 h-24 bg-stone-100 rounded-xl overflow-hidden shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <h3 className="font-medium text-stone-900 leading-tight">{item.name}</h3>
                              <button 
                                onClick={() => updateQuantity(item.id, -item.quantity)} 
                                className="text-stone-400 hover:text-rose-500 transition-colors p-1 -mt-1 -mr-1"
                              >
                                <X size={16} />
                              </button>
                            </div>
                            <p className="text-stone-500 text-sm mt-1">${item.price.toFixed(2)}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-stone-200 rounded-full">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)} 
                                className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors"
                              >
                                -
                              </button>
                              <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)} 
                                className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-stone-100 bg-stone-50">
                  <div className="flex justify-between mb-2 text-lg font-medium text-stone-900">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-stone-500 mb-6">Shipping and taxes calculated at checkout.</p>
                  <button className="w-full bg-stone-900 text-white py-4 rounded-xl font-medium hover:bg-stone-800 transition-colors shadow-md">
                    Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
