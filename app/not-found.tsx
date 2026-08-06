'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <AlertTriangle className="w-24 h-24 text-flame" />
        </motion.div>

        <h1 className="text-6xl font-bold text-smokeWhite mb-4">404</h1>
        <p className="text-2xl text-zinc-300 mb-2">Página no encontrada</p>
        <p className="text-zinc-400 mb-8">Lo sentimos, no encontramos lo que buscas. Parece que esta página no existe.</p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          <Link 
            href="/" 
            className="px-8 py-3 bg-gradient-to-r from-brandRed to-red-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-brandRed/50 transition-all inline-block"
          >
            Volver al inicio
          </Link>
          <Link 
            href="/#menu" 
            className="px-8 py-3 border-2 border-flame text-flame rounded-lg font-semibold hover:bg-flame hover:text-smoke transition-all inline-block"
          >
            Ver menú
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
