// src/features/products/components/Filters.tsx
import { Filters as FiltersType } from '../hooks/useProducts';

interface FiltersProps {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
  categories: string[];
}

const Filters = ({ filters, setFilters, categories }: FiltersProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-8 p-4 bg-gray-100 rounded-lg flex flex-wrap gap-4 items-center">
      <input
        type="text"
        name="searchTerm"
        placeholder="Pesquisar produtos..."
        value={filters.searchTerm}
        onChange={handleInputChange}
        className="p-2 border rounded flex-grow"
      />
      <select
        name="category"
        value={filters.category}
        onChange={handleInputChange}
        className="p-2 border rounded"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat} className="capitalize">
            {cat}
          </option>
        ))}
      </select>
      <select
        name="sort"
        value={filters.sort}
        onChange={handleInputChange}
        className="p-2 border rounded"
      >
        <option value="default">Ordenação Padrão</option>
        <option value="price-asc">Preço: Menor para Maior</option>
        <option value="price-desc">Preço: Maior para Menor</option>
        <option value="name-asc">Nome: A a Z</option>
        <option value="name-desc">Nome: Z a A</option>
      </select>
    </div>
  );
};

export default Filters;