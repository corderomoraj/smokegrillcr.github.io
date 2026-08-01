'use client';
import { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { Product } from '../../types/product';

export default function AdminPage() {
  const { products, setProducts } = useProducts();
  const [local, setLocal] = useState<Product[]>([]);

  useEffect(() => setLocal(products), [products]);

  function updateField(id: string, field: 'price' | 'stock', value: number) {
    const updated = local.map((p) => (p.id === id ? { ...p, [field]: value } : p));
    setLocal(updated);
  }

  function saveChanges() {
    setProducts(local);
    alert('Cambios guardados (memoria/localStorage).');
  }

  return (
    <div className="container mx-auto px-4 py-8 text-smokeWhite">
      <h1 className="text-2xl mb-6">Admin — Productos (sin auth)</h1>
      <div className="overflow-auto bg-zinc-900 p-4 rounded-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th>Producto</th>
              <th>Precio (₡)</th>
              <th>Stock</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {local.map((p) => (
              <tr key={p.id} className="border-t border-zinc-800">
                <td className="py-3">{p.name}</td>
                <td>
                  <input
                    type="number"
                    value={p.price}
                    onChange={(e) => updateField(p.id, 'price', Number(e.target.value))}
                    className="bg-transparent border border-zinc-700 p-2 rounded"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={p.stock}
                    onChange={(e) => updateField(p.id, 'stock', Number(e.target.value))}
                    className="bg-transparent border border-zinc-700 p-2 rounded"
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      const newProducts = local.map((x) => (x.id === p.id ? { ...p } : x));
                      setLocal(newProducts);
                      alert('Edición en línea (recuerda guardar cambios).');
                    }}
                    className="px-3 py-1 bg-brandRed rounded"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <button onClick={saveChanges} className="px-4 py-2 bg-flame text-smoke">
          Guardar cambios
        </button>
      </div>
    </div>
  );
}
