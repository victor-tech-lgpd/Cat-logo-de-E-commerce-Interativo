// src/features/products/components/Filters.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Filters from './Filters';

describe('Filters Component', () => {
  const mockCategories = ['all', 'electronics', 'jewelery'];
  const mockFilters = {
    searchTerm: '',
    category: 'all',
    sort: 'default',
  };

  it('renders all filter inputs correctly', () => {
    render(
      <Filters
        filters={mockFilters}
        setFilters={vi.fn()}
        categories={mockCategories}
      />
    );

    expect(screen.getByPlaceholderText(/search products/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: '' })).toBeInTheDocument(); // Ajustar seletor conforme necessário
    expect(screen.getAllByRole('option').length).toBe(mockCategories.length + 4); // Categorias + opções de sort
  });

  it('calls setFilters on input change', () => {
    const setFiltersMock = vi.fn();
    render(
      <Filters
        filters={mockFilters}
        setFilters={setFiltersMock}
        categories={mockCategories}
      />
    );

    const searchInput = screen.getByPlaceholderText(/search products/i);
    fireEvent.change(searchInput, { target: { value: 'test' } });
    
    expect(setFiltersMock).toHaveBeenCalled();
  });
});