import Search from '@/app/_components/Search';
import {getDatabySearch} from '@/app/_utils/notion';
import ProductItem from '@/app/_components/ProductItem';
import { ProductProps } from '@/lib/types/product';

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;
  const products = await getDatabySearch(query);
  console.log(products);

  return (
    <div className="max-w-3xl m-auto">
      <Search />
      {query && 
        <div className='mt-6'>
          {products.length > 0 ?
            <div className="grid grid-cols-4 gap-4">
            {
              products.map((product: any) => {
                const p = product.properties;
                const productItemData: ProductProps = {
                  id: p.id,
                  name: p.Name.title[0].text.content,
                  brand: p.Brand.rich_text[0].plain_text,
                  // imgSrc: p.Thumbnail.files[0].file.url,
                  price: p.Price.number,
                  tags: p.Tags.multi_select[0],
                  slug: p.Slug.rich_text[0].plain_text,
                };
                
                return (
                  <ProductItem 
                    ItemData={productItemData}
                    key={p.id}
                  />
                );
              })
            }
            </div>
          :
            <>
              <p>검색 결과가 없습니다.</p>
            </>}
        </div>
      }
    </div>
  );
}
