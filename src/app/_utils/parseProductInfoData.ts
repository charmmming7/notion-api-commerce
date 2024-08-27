import { ParsedProductProps } from '@/lib/types/product';

export const parseProductInfoData = (product: any): ParsedProductProps => {
  const p = product.properties;

  return {
    id: product.id || '',
    name: p.name?.title?.[0]?.text?.content || '',
    brand: p.brand?.rich_text?.[0]?.plain_text || '',
    colors: p.colors?.multi_select?.map((color: any) => color.name) || [],
    imgType: p.thumbnail?.files?.[0]?.type || '',
    imgSrc:
      p.thumbnail?.files?.[0]?.type === 'external'
        ? p.thumbnail?.files?.[0]?.external?.url || ''
        : p.thumbnail?.files?.[0]?.file?.url || '',
    price: p.price?.number || 0,
    discountedPrice: p.discountedPrice?.number || 0,
    tags: p.tags?.multi_select || [],
    salesInfo: p.salesInfo?.rich_text || [],
    quantity: p.quantity?.number || 0,
    category: p.category?.select?.name || '',
  };
};

export default parseProductInfoData;
