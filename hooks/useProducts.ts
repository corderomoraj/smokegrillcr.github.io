'use client';
import { useEffect, useState } from 'react';
import initialProducts from '../data/products.json';
import { Product } from '../types/product';

export default function useProducts() {
  const [products, setProductsState] = useState<Product[]>([]);

  useEffect(() => {
    // Load from localStorage if present to persist admin edits
    const saved = localStorage.getItem('smokegrill_products');
    if (saved) {
      setProductsState(JSON.parse(saved));
    } else {
      setProductsState(initialProducts as Product[]);
    }
  }, []);

  function setProducts(next: Product[]) {
    setProductsState(next);
    localStorage.setItem('smokegrill_products', JSON.stringify(next));
  }

  return { products, setProducts };
}
