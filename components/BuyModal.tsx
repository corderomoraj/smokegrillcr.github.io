'use client';
import { Product } from '../types/product';
import { useState } from 'react';

export default function BuyModal({ open, onClose, product }: { open: boolean; onClose: ()=>void; product?: Product }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  if (!open || !product) return null;

  function continueToPayment() {
    const payload = {
      product,
      name, phone, email, quantity
    };
    sessionStorage.setItem('smokegrill_pending_order', JSON.stringify(payload));
    // Redirect to payment link (simulación)
    window.location.href = 'https://tse2.mm.bing.net/th/id/OIP.UbvBhwpvQECVCG7AMWt9_AHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-zinc-900 rounded-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-3">Comprar — {product.name}</h2>
        <div className="grid grid-cols-2 gap-3">
          <label>
            Nombre
            <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-2 bg-zinc-800 rounded mt-1" />
          </label>
          <label>
            Teléfono
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full p-2 bg-zinc-800 rounded mt-1" />
          </label>
          <label className="col-span-2">
            Correo
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 bg-zinc-800 rounded mt-1" />
          </label>
          <label>
            Cantidad
            <input type="number" min={1} max={product.stock} value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))} className="w-full p-2 bg-zinc-800 rounded mt-1" />
          </label>
          <div>
            <div className="text-sm">Resumen</div>
            <div className="mt-1">Producto: {product.name}</div>
            <div>Subtotal: ₡{product.price * quantity}</div>
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-2 bg-zinc-700 rounded">Cancelar</button>
          <button onClick={continueToPayment} className="px-3 py-2 bg-brandRed rounded">Continuar al pago</button>
        </div>
      </div>
    </div>
  );
}
