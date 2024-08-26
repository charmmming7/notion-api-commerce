import { ProductProps } from '@/lib/types/product';

export function getProductItemData(product: any): ProductProps {
  const p = product.properties;
  return {
    id: p.id,
    name: p.Name.title[0].text.content,
    brand: p.Brand.rich_text[0].plain_text,
    colors: p.Colors.multi_select.map((color: any) => color.name),
    imgType: p.Thumbnail.files[0].type,
    imgSrc:
      p.Thumbnail.files[0].type === 'external'
        ? p.Thumbnail.files[0].external.url
        : p.Thumbnail.files[0].file.url,
    price: p.Price.number,
    discountedPrice: p.DiscountedPrice.number,
    tags: p.Tags.multi_select[0],
    slug: p.Slug.rich_text[0].plain_text,
    salesInfo: p.Slug.rich_text[0].plain_text,
  };
}
