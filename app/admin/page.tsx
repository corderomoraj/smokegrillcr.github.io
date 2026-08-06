'use client';
import { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { Product } from '../../types/product';
import { Save, AlertCircle } from 'lucide-react';

export default function AdminPage() {
  const { products, setProducts } = useProducts();
  const [local, setLocal] = useState<Product[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => setLocal(products), [products]);

  function updateField(id: string, field: 'price' | 'stock', value: number) {
    const updated = local.map((p) => (p.id === id ? { ...p, [field]: value } : p));
    setLocal(updated);
    setSaved(false);
  }

  function saveChanges() {
    setProducts(local);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-smokeWhite mb-2">Administrador</h1>
        <p className="text-zinc-400">Gestiona precios y stock de productos</p>
      </div>

      <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/10 border border-blue-800/50 rounded-lg p-4 mb-6 flex gap-3">
        <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-blue-300">Esta interfaz no tiene autenticación. En producción, deberías protegerla con login.</p>
      </div>

      <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-zinc-800/50 border-b border-zinc-700">
                <th className="px-6 py-4 text-left text-sm font-semibold text-smokeWhite">Producto</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-smokeWhite">Precio (₡)</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-smokeWhite">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-smokeWhite">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {local.map((p) => (
                <tr key={p.id} className="hover:bg-zinc-800/30 transition-colors">
                  <td className="px-6 py-4 text-smokeWhite font-medium">{p.name}</td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      value={p.price}
                      onChange={(e) => updateField(p.id, 'price', Number(e.target.value))}
                      className="w-24 px-3 py-2 bg-zinc-800 border border-zinc-700 text-smokeWhite rounded-lg focus:outline-none focus:border-flame transition-colors"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      value={p.stock}
                      onChange={(e) => updateField(p.id, 'stock', Number(e.target.value))}
                      className="w-24 px-3 py-2 bg-zinc-800 border border-zinc-700 text-smokeWhite rounded-lg focus:outline-none focus:border-flame transition-colors"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-zinc-800 text-zinc-400 text-sm rounded-lg">Editable</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button 
          onClick={saveChanges} 
          className="px-6 py-3 bg-gradient-to-r from-brandRed to-red-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-brandRed/50 transition-all flex items-center gap-2"
        >
          <Save className="w-5 h-5" />
          Guardar cambios
        </button>
        
        {saved && (
          <div className="px-6 py-3 bg-green-900/30 border border-green-800 text-green-300 rounded-lg font-semibold flex items-center gap-2">
            ✓ Cambios guardados exitosamente
          </div>
        )}
      </div>
    </div>
  );
}
