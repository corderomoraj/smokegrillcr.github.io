'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-smoke/80 backdrop-blur-md border-b border-brandRed/20 px-4 py-4 sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-brandRed to-flame rounded-lg flex items-center justify-center text-smoke font-bold text-sm group-hover:shadow-lg group-hover:shadow-brandRed/50 transition-all">SG</div>
          <div className="text-smokeWhite font-semibold text-lg tracking-tight">SmokeGrill</div>
        </Link>
        <nav className="space-x-6 hidden md:block">
          <Link href="#menu" className="text-smokeWhite/80 hover:text-flame transition-colors duration-300 relative group">
            Menú
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-flame group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#gallery" className="text-smokeWhite/80 hover:text-flame transition-colors duration-300 relative group">
            Galería
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-flame group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/admin" className="text-smokeWhite/80 hover:text-flame transition-colors duration-300 relative group">
            Admin
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-flame group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
