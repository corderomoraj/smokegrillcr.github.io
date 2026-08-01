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

  return (
    <section className="relative mt-6 rounded-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="p-6">
          <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold text-smokeWhite">
            SmokeGrill
          </motion.h1>
          <p className="mt-4 text-zinc-300 max-w-xl">Parrilladas premium y ahumados por encargo. Madera, fuego y sabor — directo a tu mesa.</p>
          <div className="mt-6 flex gap-3">
            <a href="#menu" className="px-4 py-2 bg-brandRed rounded">Ver menú</a>
            <button onClick={()=>setOpen(true)} className="px-4 py-2 bg-flame text-smoke rounded">Comprar</button>
            <a href="https://wa.me/000000000" className="px-4 py-2 bg-zinc-800 rounded">WhatsApp</a>
          </div>
        </div>
        <div className="relative h-72 md:h-96">
          <motion.img
            initial={{ scale: 1.03 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src={featured?.image || '/images/hero.jpg'}
            alt="Carne a la parrilla"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
      </div>

      <BuyModal open={open} onClose={()=>setOpen(false)} product={featured} />
    </section>
  );
}
