// src/features/products/hooks/useProducts.test.ts
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useProducts } from './useProducts';
import * as api from '../../../api/products';

// Mock da API
vi.mock('../../../api/products');

const mockProducts =;
const mockCategories = ['electronics', 'jewelery'];

describe('useProducts Hook', () => {
  beforeEach(() => {
    vi.mocked(api.getProducts).mockResolvedValue(mockProducts);
    vi.mocked(api.getCategories).mockResolvedValue(mockCategories);
  });

  it('should fetch and sort products by price ascending', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProducts());

    await act(async () => {
      await waitForNextUpdate();
    });

    act(() => {
      result.current.setFilters({...result.current.filters, sort: 'price-asc' });
    });
    
    expect(result.current.products.title).toBe('B Product');
    expect(result.current.products.title).toBe('A Product');
  });
});