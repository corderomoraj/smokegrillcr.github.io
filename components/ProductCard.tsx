'use client';
import { Product } from '../types/product';
import { useState } from 'react';
import BuyModal from './BuyModal';

export default function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="h-44 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-zinc-400 text-sm mt-1">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold">₡{product.price}</div>
            <div className="text-xs text-zinc-500">Disponibles: {product.stock}</div>
          </div>
          {product.stock > 0 ? (
            <button onClick={() => setOpen(true)} className="px-3 py-2 bg-brandRed rounded">Comprar</button>
          ) : (
            <button disabled className="px-3 py-2 bg-zinc-700 rounded opacity-60">AGOTADO</button>
          )}
        </div>
      </div>

      <BuyModal open={open} onClose={()=>setOpen(false)} product={product} />
    </div>
  );
}
