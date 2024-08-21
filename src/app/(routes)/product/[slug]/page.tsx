import { getPageContent, getPageBySlug, notion } from "@/app/_utils/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';

export const generateStaticParams = () => [{ slug: "page" }];

export default async function Page({ params }: { params: { slug: string } }) {
  console.log("Slug: ", params);
  const product = await getPageBySlug(params.slug);

  // Redirect to not found page!
  if (!product) notFound();

  const content = await getPageContent(product.id);
  const notionRenderer = new NotionRenderer({
    client: notion,
  });

  const p = product.properties;
  const html = await notionRenderer.render(...content);
  const name = (p.Name as any).title[0].plain_text;
  const thumb = (p.Thumbnail as any).files[0].file.url;
  const brand = (p.Brand as any).rich_text[0].plain_text;
  const quantity = (p.Quantity as any).number;

  return (
    <>
      <div className="flex pt-10">
        <div className="basis-1/3">
          <div className="">
            <Image
              height={200}
              width={200}
              src={thumb}
              className="object-cover mx-auto"
              alt="thumbnail"
            />
          </div>
        </div>
        <div className="basis-2/3">
          <Link href={`/brand/${brand}`}>
            <span>[{brand}]</span>
          </Link>
          <h1 className="text-4xl font-black mb-2">{name}</h1>
          <div>Quantity: {quantity}</div>
        </div>
      </div>
      <div>
        <div
          className="p-8 text-xl text-center leading-10 prose prose-p:text-white prose-headings:text-white"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </>
  );
}
