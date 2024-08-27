import ProductInfo from '@/app/_components/product/ProductInfo';
import { getPageById, getPageContent, notion } from '@/app/_utils/notion';
import { parseProductData } from '@/app/_utils/parseProductData';
import { NotionRenderer } from '@notion-render/client';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const generateStaticParams = () => [{ id: 'page' }];

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getPageById(params.id);
  const product = parseProductData(data);

  if (!data) notFound();

  const content = await getPageContent(data.id);
  const notionRenderer = new NotionRenderer({
    client: notion,
  });
  const html = await notionRenderer.render(...content);

  return (
    <>
      {/* 상품 오버뷰 */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        {/* 타이틀 */}
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product.name}
          </h1>
          <Image
            alt={product.name}
            src={product.imgSrc || ''}
            width={100}
            height={100}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        {/* 우측 정보 영역 */}
        <div>
          <ProductInfo product={product} key={product.id} />
        </div>
      </div>
      {/* 상품상세 콘텐츠 */}
      <div className="prose prose-p:text-white prose-headings:text-white p-8 text-center text-xl leading-10">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          상품 상세
        </h2>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </>
  );
}
