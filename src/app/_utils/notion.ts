import { Client } from "@notionhq/client";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";
import { TOKEN, DATABASE_ID } from "@/app/config";

// 빌드 타임에 호출. 데이터 가져온 다음에 화면에 렌더링
export const notion = new Client({
  auth: TOKEN,
});

// 페이지 가져오기
export const getPages = async () => {
  const response = await notion.databases.query({
    database_id: `${DATABASE_ID}` as string,
    sorts: [
      {
        property: "Brand",
        direction: "ascending"
      }
    ]
  });
  const data = await response.results;
  return data;
};

// 페이지 콘텐츠(block) 가져오기
export const getPageContent = cache((pageId: string) => {
  return notion.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});

// Slug(url) 값으로 페이지 가져오기 
export const getPageBySlug = cache((slug: string) => {
  return notion.databases
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

// 검색
export const getDatabySearch = async(searchKeyword: string) => {
  // const res = await notion.search({
  //   query: searchKeyword ? searchKeyword : '',
  //   filter: {
  //     value: 'database',
  //     property: 'object'
  //   },
  //   sort: {
  //     direction: 'ascending',
  //     timestamp: 'last_edited_time'
  //   },
  // });
  const res = await notion.databases.query({ 
    database_id: `${DATABASE_ID}` as string,
    filter: {
      or: [
        {
          property: 'Name',
          title: {
            contains: searchKeyword
          }
        },
      ]
    }
  });
  const data = await res.results;
  return data;
}
