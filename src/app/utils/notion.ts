import { Client } from "@notionhq/client";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";
import { TOKEN, DATABASE_ID } from "@/app/config";

// 빌드 타임에 호출. 데이터 가져온 다음에 화면에 렌더링
export const notionClient = new Client({
  auth: TOKEN,
});

// 페이지 가져오기
export const getPages = cache(() => {
  return notionClient.databases.query({
    // filter: {
    //   property: "Status",
    //   select: {
    //     equals: "Published",
    //   },
    // },
    database_id: `${DATABASE_ID}` as string
  });
});

// 페이지 콘텐츠(block) 가져오기
export const getPageContent = cache((pageId: string) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});

// Slug(url) 값으로 페이지 가져오기 
export const getPageBySlug = cache((slug: string) => {
  return notionClient.databases
    .query({
      database_id: DATABASE_ID as string,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});
