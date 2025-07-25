// src/components/Header.tsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>
    </header>
  );
};
export default Header;