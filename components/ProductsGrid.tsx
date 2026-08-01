'use client';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

export default function ProductsGrid() {
  const { products } = useProducts();

  return (
    <div id="menu" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
