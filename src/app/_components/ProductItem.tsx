import { ProductProps } from '@/lib/types/product';
import Link from 'next/link';
import Image from 'next/image';
import formatCurrency from '@/app/_utils/formatCurrency';

interface ProductItemProps {
  ItemData: ProductProps;
}

function ProductItem({ ItemData }: ProductItemProps) {
  const { name, brand, price, imgSrc, tags, slug } = ItemData;

  const colorVariants: any = {
    blue: 'bg-blue-200',
    red: 'bg-red-200',
    gray: 'bg-neutral-200',
  };

  return (
    <>
      <Link href={`/product/${slug}`} passHref>
        <div className="text-sm">
          <div className="relative h-0 w-full pb-[100%]">
            <Image
              height={200}
              width={200}
              src={imgSrc ? imgSrc : ''}
              className="absolute left-0 top-0 h-full w-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="mt-3 text-xs">
            <strong className="font-semibold">{brand}</strong>
            <p className="pt-1">{name}</p>
            <p className="pt-1">{formatCurrency(price)}</p>
            {tags && (
              <p className="pt-1">
                <span
                  className={`inline-block px-1 ${colorVariants[tags.color]} text-[10px] leading-[14px]`}
                >
                  {tags.name}
                </span>
              </p>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductItem;
