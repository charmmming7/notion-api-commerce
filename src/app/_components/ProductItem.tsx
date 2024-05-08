import {ProductProps} from "@/lib/types/product";
import Link from 'next/link';
import Image from 'next/image';
import formatCurrency from "@/app/_utils/formatCurrency";

interface ProductItemProps {
  ItemData: ProductProps
}

function ProductItem (
  { ItemData }: ProductItemProps
) {
  const { id, name, brand, price, imgSrc, tags, slug } = ItemData;

  const colorVariants:any = {
    blue: 'bg-blue-200',
    red: 'bg-red-200',
    gray: 'bg-neutral-200',
  }

  return (
    <div key={id}>
      <Link href={`/product/${slug}`} passHref>
        <div className="text-sm">
          <div className="relative w-full h-0 pb-[100%]">
            <Image
              height={200}
              width={200}
              src={imgSrc ? imgSrc : ''}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div className="mt-3 text-xs">
            <strong className="font-semibold">{brand}</strong>
            <p className="pt-1">{name}</p>
            <p className="pt-1">{formatCurrency(price)}</p>
            {tags && 
            <p className="pt-1">
              <span className={`inline-block px-1 ${colorVariants[tags.color]} text-[10px] leading-[14px]`}>{tags.name}</span>
            </p>
            }
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
