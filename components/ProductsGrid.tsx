'use client';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

export default function ProductsGrid() {
  const { products } = useProducts();

  return (
    <div id="menu" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p, idx) => (
        <div key={p.id} style={{ animationDelay: `${idx * 0.1}s` }}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
