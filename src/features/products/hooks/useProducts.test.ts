// src/features/products/hooks/useProducts.ts
import { useState, useEffect, useMemo } from 'react';
import { getProducts, getCategories } from '../../../api/products';
import { Product } from '../../../types/Product';

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export interface Filters {
  searchTerm: string;
  category: string;
  sort: SortOption;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(['all']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    category: 'all',
    sort: 'default',
  });

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);
        setProducts(productsData);
        setCategories(['all', ...categoriesData]);
        setError(null);
      } catch (e) {
        setError('Falha ao carregar os dados. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];
    let result = [...products];

    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    if (filters.searchTerm) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    switch (filters.sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return result;
  }, [products, filters]);

  return {
    products: filteredAndSortedProducts,
    categories,
    loading,
    error,
    filters,
    setFilters,
  };
};