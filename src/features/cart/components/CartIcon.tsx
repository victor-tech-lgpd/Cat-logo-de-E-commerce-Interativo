// src/features/cart/components/CartIcon.tsx
import { ShoppingCart } from 'lucide-react';
import { useCartTotalItems } from '../../../store/cartStore';

const CartIcon = () => {
  const totalItems = useCartTotalItems();

  return (
    <div className="relative">
      <ShoppingCart className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;