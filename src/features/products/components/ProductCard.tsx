// Crie este arquivo em: src/features/products/components/ProductCard.tsx
import { Product } from '../../../types/Product';
import { useCartStore } from '../../../store/cartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // 1. Puxe a função 'addItem' do seu store
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    // 2. Chame a função quando o botão for clicado
    addItem(product);
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-xl font-semibold my-2">${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;