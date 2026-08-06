'use client';
import { Product } from '../types/product';
import { useState } from 'react';
import { motion } from 'framer-motion';
import BuyModal from './BuyModal';

export default function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  
  return (
    <motion.div 
      className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl overflow-hidden border border-zinc-800 hover:border-brandRed/50 transition-all duration-300 group"
      whileHover={{ y: -4, boxShadow: "0 20px 25px rgba(183, 28, 28, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden bg-zinc-800">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-smokeWhite group-hover:text-flame transition-colors">{product.name}</h3>
        <p className="text-zinc-400 text-sm mt-2 line-clamp-2">{product.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-flame to-orange-600 bg-clip-text text-transparent">₡{product.price}</div>
            <div className="text-xs text-zinc-500 mt-1">Stock: {product.stock}</div>
          </div>
          {product.stock > 0 ? (
            <motion.button 
              onClick={() => setOpen(true)} 
              className="px-4 py-2 bg-gradient-to-r from-brandRed to-red-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-brandRed/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Comprar
            </motion.button>
          ) : (
            <button disabled className="px-4 py-2 bg-zinc-800 text-zinc-500 rounded-lg opacity-60 cursor-not-allowed">
              AGOTADO
            </button>
          )}
        </div>
      </div>

      <BuyModal open={open} onClose={()=>setOpen(false)} product={product} />
    </motion.div>
  );
}
