// src/pages/CartPage.tsx
import { Link } from 'react-router-dom';
import { useCartStore, useCartTotalPrice } from '../store/cartStore';
import CartItem from '../features/cart/components/CartItem';

const CartPage = () => {
  const { items, clearCart } = useCartStore();
  const totalPrice = useCartTotalPrice();

  if (items.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/" className="text-accent hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-8 pt-4 border-t">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;