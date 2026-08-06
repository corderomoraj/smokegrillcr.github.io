'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Product } from '../../types/product';
import orderStore from '../../lib/orderStore';

export default function SuccessPage() {
  const [pending, setPending] = useState<any>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const p = sessionStorage.getItem('smokegrill_pending_order');
    if (p) setPending(JSON.parse(p));
  }, []);

  function validateDateTime() {
    setError('');
    if (!date || !time) {
      setError('Selecciona fecha y hora.');
      return false;
    }
    const selected = new Date(`${date}T${time}`);
    const now = new Date();
    const min = new Date(now.getTime() + 60 * 60 * 1000);
    const today = now.toISOString().slice(0, 10);
    if (date === today && selected < min) {
      setError('La hora debe ser al menos 1 hora desde ahora.');
      return false;
    }
    return true;
  }

  function handleConfirm() {
    if (!validateDateTime()) return;
    const final = {
      ...pending,
      date,
      time,
      status: 'Pendiente de preparación'
    };
    orderStore.saveOrder(final);
    sessionStorage.removeItem('smokegrill_pending_order');
    setConfirmed(true);
  }

  if (!pending) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-smokeWhite mb-4">Sin pedido activo</h1>
          <p className="text-zinc-400 mb-8">No hay un pedido pendiente de confirmación.</p>
          <Link href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-brandRed to-red-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-brandRed/50">
            Volver al inicio
          </Link>
        </motion.div>
      </div>
    );
  }

  if (confirmed) {
    return (
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
            </motion.div>
            <h1 className="text-4xl font-bold text-smokeWhite mb-2">¡Pedido confirmado!</h1>
            <p className="text-zinc-400">Tu pedido está pendiente de preparación</p>
          </div>

          <motion.div 
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-smokeWhite mb-6">Resumen de tu pedido</h2>
            
            <div className="space-y-4 mb-6 border-b border-zinc-700 pb-6">
              <div className="flex justify-between">
                <span className="text-zinc-400">Producto</span>
                <span className="text-smokeWhite font-semibold">{pending.product.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Cantidad</span>
                <span className="text-smokeWhite font-semibold">{pending.quantity} unidades</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Cliente</span>
                <span className="text-smokeWhite font-semibold">{pending.name}</span>
              </div>
            </div>

            <div className="space-y-4 mb-6 border-b border-zinc-700 pb-6">
              <div className="flex justify-between">
                <span className="text-zinc-400">Fecha de retiro</span>
                <span className="text-smokeWhite font-semibold">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Hora de retiro</span>
                <span className="text-smokeWhite font-semibold">{time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Estado</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 rounded-lg text-sm font-semibold">Pendiente de preparación</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Total</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-flame to-orange-600 bg-clip-text text-transparent">₡{pending.product.price * pending.quantity}</span>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-zinc-400 mb-4">Te contactaremos próximamente para confirmar detalles</p>
            <Link href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-brandRed to-red-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-brandRed/50">
              Volver al inicio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-smokeWhite mb-2">¡Gracias por tu compra!</h1>
          <p className="text-zinc-400">Confirma la fecha y hora de retiro/entrega</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-xl font-semibold text-smokeWhite mb-6">Resumen del pedido</h2>
            <div className="space-y-4">
              <div>
                <p className="text-zinc-400 text-sm">Producto</p>
                <p className="text-smokeWhite font-semibold text-lg">{pending.product.name}</p>
              </div>
              <div>
                <p className="text-zinc-400 text-sm">Cantidad</p>
                <p className="text-smokeWhite font-semibold text-lg">{pending.quantity} unidades</p>
              </div>
              <div>
                <p className="text-zinc-400 text-sm">Precio unitario</p>
                <p className="text-smokeWhite font-semibold text-lg">₡{pending.product.price}</p>
              </div>
              <div className="border-t border-zinc-700 pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-flame to-orange-600 bg-clip-text text-transparent">₡{pending.product.price * pending.quantity}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-xl font-semibold text-smokeWhite mb-6">Fecha y hora de retiro</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-smokeWhite mb-2">Fecha</label>
                <input 
                  type="date" 
                  value={date} 
                  onChange={(e)=>setDate(e.target.value)} 
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 text-smokeWhite rounded-lg focus:outline-none focus:border-flame transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-smokeWhite mb-2">Hora</label>
                <input 
                  type="time" 
                  value={time} 
                  onChange={(e)=>setTime(e.target.value)} 
                  className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 text-smokeWhite rounded-lg focus:outline-none focus:border-flame transition-colors"
                />
              </div>

              {error && (
                <motion.div 
                  className="flex gap-3 p-4 bg-red-900/30 border border-red-800 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-300 text-sm">{error}</p>
                </motion.div>
              )}

              <motion.button 
                onClick={handleConfirm} 
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-brandRed to-red-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-brandRed/50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Confirmar pedido
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
