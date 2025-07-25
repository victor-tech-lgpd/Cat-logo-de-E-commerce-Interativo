// Modifique o arquivo: src/pages/HomePage.tsx
import ProductCard from '../features/products/components/ProductCard';
import CartIcon from '../features/cart/components/CartIcon';
import { Link } from 'react-router-dom';

// Dados de exemplo para o teste
const mockProduct = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 }
};

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Nossos Produtos</h1>
        <Link to="/cart">
          <CartIcon />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Renderize o card de produto com os dados de exemplo */}
        <ProductCard product={mockProduct} />
        {/* Você pode adicionar mais cards aqui */}
      </div>
    </div>
  );
};

export default HomePage;