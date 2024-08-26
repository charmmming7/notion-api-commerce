import ProductItem from '@/app/_components/product/ProductItem';
import { getProductItemData } from '@/app/_utils/getProductItemData';

interface ProductListProps {
  products: any[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => {
        const productItemData = getProductItemData(product);
        return (
          <ProductItem ItemData={productItemData} key={productItemData.id} />
        );
      })}
    </div>
  );
};

export default ProductList;
