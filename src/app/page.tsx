// import List from '@/components/List';
// import { notion } from '@/app/lib/notion.ts';
// import { NotionPage } from '@/components/notion/renderer.tsx';

// export const products = [
//   { name: 'Iphone15Pro' },
//   { name: 'Iphone15' },
//   { name: 'Iphone14' },
// ];

// const pageId = process.env.NOTION_DATABASE_ID!;

// async function getData(rootPageId: string) {
//   return notion.getPage(rootPageId);
// }

// const data = getData(pageId);

// export default function Home() {
//   return (
//     <div className="flex justify-center p-10">
//       {/* <List products={products} /> */}
//       <NotionPage recordMap={data} rootPageId={pageId} />
//     </div>
//   );
// }



import { notion } from "@/app/lib/notion";
import { NotionPage } from "@/components/notion";

const rootPageId = process.env.NOTION_DATABASE_ID!;

async function getData(rootPageId:string) {
  return await notion.getPage(rootPageId);
}
export default async function Home() {
  const data = await getData(rootPageId);

  return (
    <NotionPage recordMap={data} rootPageId={rootPageId} />
  );
}
