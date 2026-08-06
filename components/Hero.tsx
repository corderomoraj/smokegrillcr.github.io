'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import BuyModal from './BuyModal';
import useProducts from '../hooks/useProducts';

export default function Hero() {
  const [open, setOpen] = useState(false);
  const { products } = useProducts();
  const featured = products[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative mt-8 mb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="p-6 md:p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-smokeWhite leading-tight"
          >
            SmokeGrill
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-zinc-300 max-w-xl text-lg leading-relaxed"
          >
            Parrilladas premium y ahumados por encargo. Madera, fuego y sabor — directo a tu mesa.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <a 
              href="#menu" 
              className="px-6 py-3 bg-gradient-to-r from-brandRed to-red-700 text-smokeWhite rounded-lg font-semibold hover:shadow-lg hover:shadow-brandRed/50 transition-all duration-300 hover:-translate-y-1"
            >
              Ver menú
            </a>
            <button 
              onClick={()=>setOpen(true)} 
              className="px-6 py-3 bg-gradient-to-r from-flame to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-flame/50 transition-all duration-300 hover:-translate-y-1"
            >
              Comprar ahora
            </button>
            <a 
              href="https://wa.me/000000000" 
              className="px-6 py-3 border-2 border-zinc-700 text-smokeWhite rounded-lg font-semibold hover:bg-zinc-800 hover:border-flame transition-all duration-300"
            >
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
          <img
            src={featured?.image || '/images/hero.jpg'}
            alt="Carne a la parrilla"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <BuyModal open={open} onClose={()=>setOpen(false)} product={featured} />
    </section>
  );
}
