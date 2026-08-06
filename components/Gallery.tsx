'use client';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = ['/images/brisket.jpg', '/images/ribs.jpg', '/images/pulled.jpg'];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div 
      id="gallery" 
      className="grid grid-cols-2 md:grid-cols-3 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {images.map((src, idx) => (
        <motion.div 
          key={src} 
          className="h-48 md:h-56 overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 hover:border-flame transition-all group"
          variants={itemVariants}
          whileHover={{ borderColor: '#FF6F00' }}
        >
          <img 
            src={src} 
            alt={`Galería ${idx + 1}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.div>
      ))}
    </motion.div>
  );
}
