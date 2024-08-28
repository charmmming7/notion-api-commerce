import { getPages } from '@/app/_utils/notion';
import ProductList from '@/app/_components/product/ProductList';
interface ProductSectionProps {
  title: string;
}

const ProductSection = async ({ title }: ProductSectionProps) => {
  const products: any[] = await getPages();

  if (!products?.length) return null;

  return (
    <div className="sm:px-18 mx-auto px-4 py-4 sm:py-6 lg:max-w-7xl lg:px-8 lg:py-14">
      <h2 className="mb-2 text-center text-xl font-extralight uppercase tracking-tight text-gray-900 sm:mb-8 sm:text-4xl">
        {title}
      </h2>
      <ProductList products={products} />
    </div>
  );
};

export default ProductSection;
