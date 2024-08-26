import { getPages } from '@/app/_utils/notion';
import ProductList from '@/app/_components/product/ProductList';

interface ProductSectionProps {
  title: string;
}

const ProductSection = async ({ title }: ProductSectionProps) => {
  const products = await getPages();

  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
      <h2 className="text-center text-4xl font-extralight uppercase tracking-tight text-gray-900">
        {title}
      </h2>
      <ProductList products={products} />
    </div>
  );
};

export default ProductSection;
