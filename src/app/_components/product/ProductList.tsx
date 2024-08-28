import ProductCard from '@/app/_components/product/ProductCard';
import { ProductProps } from '@/lib/types/product';
import { parseProductData } from '@/app/_utils/parseProductData';

const ProductList = ({ products }: { products: ProductProps[] }) => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product: ProductProps) => {
        const parsedData = parseProductData(product);
        return <ProductCard data={parsedData} key={parsedData.id} />;
      })}
    </div>
  );
};

export default ProductList;
