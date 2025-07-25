// src/features/products/components/Filters.tsx
import { Filters as FiltersType, SortOption } from '../hooks/useProducts';

interface FiltersProps {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
  categories: string;
}

const Filters = ({ filters, setFilters, categories }: FiltersProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({...prev, [name]: value }));
  };

  return (
    <div className="mb-8 p-4 bg-gray-100 rounded-lg flex flex-wrap gap-4 items-center">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search products..."
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
          <option key={cat} value={cat} className="capitalize">{cat}</option>
        ))}
      </select>
      <select
        name="sort"
        value={filters.sort}
        onChange={handleInputChange}
        className="p-2 border rounded"
      >
        <option value="default">Default Sort</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
};

export default Filters;