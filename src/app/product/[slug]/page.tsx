import { getPageContent, getPageBySlug, notionClient } from "@/app/utils/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

//Plugins
// import hljsPlugin from "@notion-render/hljs-plugin";
// import bookmarkPlugin from "@notion-render/bookmark-plugin";
import ProductItem from "@/components/ProductItem";

export default async function Page({ params }: { params: { slug: string } }) {
  console.log("Slug: ", params);
  const productItem = await getPageBySlug(params.slug);

  //Redirect to not found page!
  if (!productItem) notFound();

  // const content = await getPageContent(productItem.id);

  // const notionRenderer = new NotionRenderer({
  //   client: notionClient,
  // });

  // notionRenderer.use(hljsPlugin({}));
  // notionRenderer.use(bookmarkPlugin(undefined));
  // const html = await notionRenderer.render(...content);

  const name = (productItem.properties.Name as any).title[0].plain_text;
  const brand = (productItem.properties.Brand as any).rich_text[0].plain_text;
  const quantity = (productItem.properties.Quantity as any).number;
  const description = (productItem.properties.Description as any).rich_text[0].plain_text;
  const slug = (productItem.properties.Slug as any).rich_text[0].plain_text;

  return (
    <ProductItem
      name={name}
      brand={brand}
      quantity={quantity}
      description={description}
    />
  );
}
