// src/pages/ProductDetailPage.tsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/products';
import { Product } from '../types/Product';
import { useCartStore } from '../store/cartStore';
import Spinner from '../components/Spinner';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(Number(productId));
        setProduct(data);
        setError(null);
      } catch (e) {
        setError('Product not found.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!product) return null;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <img src={product.image} alt={product.title} className="w-full max-w-md mx-auto object-contain" />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-500 capitalize mb-4">{product.category}</p>
        <p className="text-2xl font-semibold text-accent mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <button
          onClick={() => addItem(product)}
          className="bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;