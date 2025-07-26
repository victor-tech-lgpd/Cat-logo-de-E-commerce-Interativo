// src/api/products.ts
import { Product } from '../types/Product';

const API_URL = 'https://fakestoreapi.com';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }
  return response.json();
};

export const getCategories = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/products/categories`);
  if (!response.ok) {
    throw new Error('Falha ao buscar categorias');
  }
  return response.json();
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error('Produto não encontrado');
  }
  return response.json();
};