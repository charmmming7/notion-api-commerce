import { DATABASE_ID, TOKEN } from '@/app/_config';
import { Client } from '@notionhq/client';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { cache } from 'react';

// 빌드 타임에 호출. 데이터 가져온 다음에 화면에 렌더링
export const notion = new Client({
  auth: TOKEN,
});

// 상품목록 가져오기(각 페이지)
export const getPages = async () => {
  const response = await notion.databases.query({
    database_id: `${DATABASE_ID}` as string,
    sorts: [
      {
        direction: 'descending',
        timestamp: 'created_time',
      },
    ],
  });
  const data = response.results;
  return data;
};

// 상품상세(페이지 콘텐츠/block) 가져오기
export const getPageContent = cache(async (pageId: string) => {
  const res = await notion.blocks.children.list({ block_id: pageId });
  return res.results as BlockObjectResponse[];
});

// page_id 값으로 페이지 가져오기
export const getPageById = cache(async (id: string) => {
  const response = await notion.pages.retrieve({ page_id: id });
  return response;
});

// 검색
export const getDatabySearch = async (searchKeyword: string) => {
  const res = await notion.databases.query({
    database_id: `${DATABASE_ID}` as string,
    filter: {
      or: [
        {
          property: 'name',
          title: {
            contains: searchKeyword,
          },
        },
        {
          property: 'brand',
          title: {
            contains: searchKeyword,
          },
        },
      ],
    },
  });
  const data = await res.results;
  return data;
};
