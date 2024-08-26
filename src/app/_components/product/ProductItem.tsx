import { ProductProps } from '@/lib/types/product';
import Link from 'next/link';
import Image from 'next/image';
import formatCurrency from '@/app/_utils/formatCurrency';
import { colorVariants, getColorVariant } from '@/app/_utils/colorVariants';

interface ProductItemProps {
  ItemData: ProductProps;
}

const ProductItem = ({ ItemData }: ProductItemProps) => {
  const { name, brand, price, discountedPrice, imgSrc, tags, colors, slug } =
    ItemData;

  return (
    <>
      <div className="group relative">
        <Link
          href={`/product/${slug}`}
          passHref
          className="block text-sm text-gray-700"
        >
          <div
            className="aspect-square w-full overflow-hidden rounded-md
          bg-gray-200 transition-[opacity] duration-150 group-hover:opacity-80 lg:h-80"
          >
            <Image
              alt={name}
              src={imgSrc || ''}
              width={100}
              height={100}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
        </Link>
        <div className="mt-3">
          {tags && (
            <p>
              {tags.length > 0 &&
                tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`inline-block px-1 ${colorVariants[tag.color]} text-[10px] leading-[14px]`}
                  >
                    {tag.name}
                  </span>
                ))}
            </p>
          )}
          <Link
            href={`/product/${slug}`}
            passHref
            className="mt-4 text-sm font-medium text-gray-700"
          >
            {brand}
          </Link>
          <Link
            href={`/product/${slug}`}
            passHref
            className="mt-4 text-sm text-gray-700"
          >
            <div className="text-sm font-light leading-4 text-gray-700">
              {name}
            </div>
            <div className="mt-2">
              {discountedPrice && (
                <span className="mb-1 block text-sm text-gray-400 line-through">
                  <span className="blind">정가</span>
                  {formatCurrency(discountedPrice)}
                </span>
              )}
              <div className="flex items-baseline">
                <span className="text-base font-bold">
                  <span className="blind">최종가격</span>
                  {formatCurrency(price)}
                </span>
                <span className="ml-auto font-bold text-orange-500">
                  <span className="blind">할인률</span>
                  33%
                </span>
              </div>
            </div>
          </Link>
          <div className="mt-2 flex space-x-1">
            {colors?.map((color, i) => (
              <span
                key={i}
                className={`inline-block h-4 w-4 rounded-full border ${getColorVariant(color)}`}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
