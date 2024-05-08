import {getPages} from '@/app/_utils/notion';
import ProductItem from '@/app/_components/ProductItem';
import { ProductProps } from '@/lib/types/product';

export default async function Index() {
  const products = await getPages();

  return (
    <div className="flex justify-center p-10">
      <div className="grid grid-cols-4 gap-x-6 gap-y-8">
        {
          products.map((product: any) => {
            const p = product.properties;
            const productItemData: ProductProps = {
              id: p.id,
              name: p.Name.title[0].text.content,
              brand: p.Brand.rich_text[0].plain_text,
              imgType: p.Thumbnail.files[0].type,
              imgSrc: p.Thumbnail.files[0].type === 'external' ? p.Thumbnail.files[0].external.url : p.Thumbnail.files[0].file.url,
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
    </div>
  );
}
