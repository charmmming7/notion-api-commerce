import Link from 'next/link';
import type { IProduct } from '@/lib/types/product';

interface Props {
  products: IProduct[];
}

export default function List({ products }: Props) {
  return (
    <div className="flex justify-center p-10">
      <div className="text-center">
        <h1 className="mb-4 text-3xl">Products</h1>
        {products.map((p: IProduct) => {
          return (
            <Link href={`/product/${p.name}`} passHref key={p.name}>
              <div className="mb-4" key={p.toString()}>
                <strong className="p-4 pt-2">{p.name} 40$</strong>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
