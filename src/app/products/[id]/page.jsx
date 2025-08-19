import { fetchProductById } from '@/data/products';
import ProductDetailsWrapper from './ProductDetailsWrapper';
import RecentlyViewed from '@/components/RecentlyViewed';

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = await fetchProductById(id);

  if (!product) return <p className="p-6 text-red-500">Product not found</p>;

  return (
    <div className="p-6">
      <ProductDetailsWrapper product={product} />
      <RecentlyViewed />
    </div>
  );
}
