'use server';

import Link from 'next/link';
import {TOKEN, DATABASE_ID} from "@/app/config";

// 빌드 타임에 호출. 데이터 가져온 다음에 화면에 렌더링
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: TOKEN });

export default async function Index() {
  const products = await notion.databases.query({
    database_id: `${DATABASE_ID}`,
  });

  return (
    <div className="flex justify-center p-10">
      <div className="text-center">
        <h1 className="mb-10 text-3xl">Products</h1>
        {
          products.results.map((p: any) => {
          const name = p.properties.Name.title[0].plain_text;
          const brand = p.properties.Brand.rich_text[0].plain_text;
          const quantity = p.properties.Quantity.number;
          const description = p.properties.Description.rich_text[0].plain_text;
          const slug = p.properties.Slug.rich_text[0].plain_text;
            return (
              <Link href={`/product/${slug}`} passHref key={name}>
                <div className="mb-10">
                  <strong className="p-1">[{brand}] {name}</strong>
                  <p>
                    quantity: {quantity}
                  </p>
                  <p>
                    {description}
                  </p>
                </div>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
}
