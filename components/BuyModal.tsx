'use client';
import { Product } from '../types/product';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function BuyModal({ open, onClose, product }: { open: boolean; onClose: ()=>void; product?: Product }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  function continueToPayment() {
    const payload = {
      product,
      name, phone, email, quantity
    };
    sessionStorage.setItem('smokegrill_pending_order', JSON.stringify(payload));
    window.location.href = 'https://tse2.mm.bing.net/th/id/OIP.UbvBhwpvQECVCG7AMWt9_AHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl w-full max-w-md p-8 border border-zinc-800"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-smokeWhite">Comprar</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            <div className="mb-6 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <p className="text-sm text-zinc-400">Producto</p>
              <p className="text-lg font-semibold text-smokeWhite">{product.name}</p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-smokeWhite mb-2">Nombre</label>
                <input 
                  value={name} 
                  onChange={(e)=>setName(e.target.value)} 
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-flame transition-colors text-smokeWhite"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-smokeWhite mb-2">Teléfono</label>
                <input 
                  value={phone} 
                  onChange={(e)=>setPhone(e.target.value)} 
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-flame transition-colors text-smokeWhite"
                  placeholder="Tu teléfono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-smokeWhite mb-2">Correo</label>
                <input 
                  value={email} 
                  onChange={(e)=>setEmail(e.target.value)} 
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-flame transition-colors text-smokeWhite"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-smokeWhite mb-2">Cantidad</label>
                <input 
                  type="number" 
                  min={1} 
                  max={product.stock} 
                  value={quantity} 
                  onChange={(e)=>setQuantity(Number(e.target.value))} 
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-flame transition-colors text-smokeWhite"
                />
              </div>
            </div>

            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-zinc-400">Subtotal:</span>
                <span className="text-flame font-semibold">₡{product.price * quantity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Unidades:</span>
                <span className="text-smokeWhite">{quantity}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button 
                onClick={onClose} 
                className="flex-1 px-4 py-3 bg-zinc-800 text-smokeWhite rounded-lg font-semibold hover:bg-zinc-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Cancelar
              </motion.button>
              <motion.button 
                onClick={continueToPayment} 
                className="flex-1 px-4 py-3 bg-gradient-to-r from-brandRed to-red-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-brandRed/50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Pagar
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
