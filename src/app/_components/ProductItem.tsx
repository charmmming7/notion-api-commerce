import {ProductProps} from "@/lib/types/product";
import Link from 'next/link';
// import Image from 'next/image';
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

  console.log(imgSrc);

  return (
    <div key={id}>
      <Link href={`/product/${slug}`} passHref>
        <div className="mb-10 text-sm">
          {/* <Image
            height={200}
            width={200}
            src={imgSrc}
            className="object-cover mx-auto"
            alt="thumbnail"
          /> */}
          <strong>{brand}</strong>
          <p>{name}</p>
          <p>{formatCurrency(price)}</p>
          {tags && 
          <p>
            <span className={`px-1 ${colorVariants[tags.color]} text-xs`}>{tags.name}</span>
          </p>
          }
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
