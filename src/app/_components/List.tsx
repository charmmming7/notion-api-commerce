import Link from 'next/link';
import {ProductProps} from "@/lib/types/product";

interface Props {
  products: ProductProps[];
}

export default function List({ products }: Props) {
  return (<>
    {
      products.map((p: any) => {
        const name = p.properties.Name.title[0].plain_text;
        const description = p.properties.Brand.rich_text[0].plain_text;
        const brand = p.properties.Quantity.number;
        const slug = p.properties.Slug.rich_text[0].plain_text;
          return (
            <Link href={`/product/${slug}`} passHref key={name}>
              <div className="mb-4">
                <strong className="p-4 pt-2">{name}</strong>
                <p>
                  {brand}
                </p>
                <p>
                  {description}
                </p>
              </div>
            </Link>
          );
        })
    }
  </>);
}
