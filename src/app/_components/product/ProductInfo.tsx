import { ParsedProductInfoProps } from '@/lib/types/product';

interface ProductInfoProps {
  product: ParsedProductInfoProps;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { id, name, price, discountedPrice, imgSrc, tags, colors } = product;

  return (
    <div className="mt-4 lg:row-span-3 lg:mt-0">
      <h2 className="sr-only">Product information</h2>
      <p>{name}</p>
      <p className="text-3xl tracking-tight text-gray-900">{price}</p>
      <p>{discountedPrice}</p>
      <p>{colors}</p>
    </div>
  );
};

export default ProductInfo;
