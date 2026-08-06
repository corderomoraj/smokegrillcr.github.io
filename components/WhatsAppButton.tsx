'use client';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a 
      href="https://wa.me/000000000" 
      target="_blank" 
      rel="noreferrer" 
      className="fixed right-6 bottom-6 z-50 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-shadow group-hover:-translate-y-1 transform">
        <MessageCircle className="text-white w-7 h-7" />
      </div>
      <motion.span 
        className="absolute right-16 top-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        Contáctanos
      </motion.span>
    </motion.a>
  );
}
