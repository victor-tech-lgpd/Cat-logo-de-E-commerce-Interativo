// src/features/cart/components/CartItem.tsx
import { CartItem as CartItemType } from '../../../store/cartStore';
import { useCartStore } from '../../../store/cartStore';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
          className="w-16 p-1 border rounded text-center"
        />
        <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;