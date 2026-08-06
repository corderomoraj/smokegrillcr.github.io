'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-gradient-to-b from-smoke to-black border-t border-brandRed/20 px-4 py-12 mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brandRed to-flame rounded-lg flex items-center justify-center text-smoke font-bold text-xs">SG</div>
              <span className="text-smokeWhite font-semibold">SmokeGrill</span>
            </div>
            <p className="text-zinc-400 text-sm">Parrilladas y ahumados premium. Madera, fuego y sabor.</p>
          </div>
          
          <div>
            <h4 className="text-smokeWhite font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="#menu" className="text-zinc-400 hover:text-flame transition-colors">Menú</Link></li>
              <li><Link href="#gallery" className="text-zinc-400 hover:text-flame transition-colors">Galería</Link></li>
              <li><Link href="/admin" className="text-zinc-400 hover:text-flame transition-colors">Administrador</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-smokeWhite font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <div>📞 Tel: 0000-0000</div>
              <div>📧 contacto@smokegrill.local</div>
              <div>💬 <a href="https://wa.me/000000000" className="hover:text-flame transition-colors">WhatsApp</a></div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-6 text-center">
          <p className="text-zinc-400 text-sm">© {currentYear} SmokeGrill. Todos los derechos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}
