import "server-only";

import { Client } from "@notionhq/client";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";
import { TOKEN, DATABASE_ID } from "@/app/config";

export const notionClient = new Client({
  auth: TOKEN,
});

export const getPages = cache(() => {
  return notionClient.databases.query({
    filter: {
      property: "Status",
      select: {
        equals: "Published",
      },
    },
    database_id: DATABASE_ID!,
  });
});

export const getPageContent = cache((pageId: string) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});

export const getPageBySlug = cache((slug: string) => {
  return notionClient.databases
    .query({
      database_id: DATABASE_ID!,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});
