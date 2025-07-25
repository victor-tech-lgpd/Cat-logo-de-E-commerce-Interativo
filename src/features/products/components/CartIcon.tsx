// Crie este arquivo em: src/features/cart/components/CartIcon.tsx
import { useCartTotalItems } from '../../../store/cartStore';

const CartIcon = () => {
  // 1. Use o seletor para obter o número total de itens
  const totalItems = useCartTotalItems();

  return (
    <div className="relative">
      <span>🛒</span> {/* Ícone simples de carrinho */}
      {totalItems > 0 && (
        // 2. Mostra a contagem apenas se houver itens no carrinho
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;