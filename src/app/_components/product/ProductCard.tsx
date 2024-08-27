import { formatCurrency, isValidValue } from '@/app/_utils/numbers';
import { getColorVariant, getTagVariant } from '@/app/_utils/variants';
import { ParsedProductProps } from '@/lib/types/product';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  data: ParsedProductProps;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const { id, name, brand, price, discountedPrice, imgSrc, tags, colors } =
    data;

  return (
    <div className="group relative" key={id}>
      <Link
        href={`/product/${id}`}
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
        <Link
          href={`/product/${id}`}
          passHref
          className="mt-4 text-sm font-medium text-gray-700"
        >
          {brand}
        </Link>
        <Link
          href={`/product/${id}`}
          passHref
          className="mt-4 text-sm text-gray-700"
        >
          <div className="mt-1 text-sm font-light leading-4 text-gray-700">
            {name}
          </div>
          <div className="mt-2">
            {isValidValue(discountedPrice) &&
              typeof discountedPrice === 'number' && (
                <p className="text-[12px] font-light text-slate-400 line-through opacity-80">
                  <span className="blind">정가</span>

                  {formatCurrency(discountedPrice)}
                </p>
              )}
            <div className="flex items-baseline">
              <span className="mr-2 font-bold text-orange-500">
                <span className="blind">할인률</span>
                33%
              </span>
              <span className="text-base font-semibold">
                <span className="blind">최종가격</span>
                {formatCurrency(price)}
              </span>
            </div>
          </div>
          {tags && (
            <div>
              {tags.length > 0 &&
                tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`mr-1 inline-block border px-1 text-[10px] leading-[14px] `}
                  >
                    {getTagVariant(tag.name)}
                  </span>
                ))}
            </div>
          )}
        </Link>
        <div className="mt-2 flex space-x-1">
          {colors &&
            colors?.map((color, i) => (
              <span
                key={i}
                className={`inline-block h-4 w-4 rounded-full border ${getColorVariant(color)}`}
                title={color}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
