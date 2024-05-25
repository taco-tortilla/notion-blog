import { NextResponse } from 'next/server';
import { createArticleList } from '../../logic/article';
import { Client } from '@notionhq/client';

const requestBody = {
  filter: {
    property: 'IsPublished',
    select: {
      equals: 'Published',
    },
  },
  sorts: [
    {
      property: 'CreatedAt',
      direction: 'descending',
    },
  ],
};

export async function GET() {
  try {
    const res = await fetch(
      'https://api.notion.com/v1/databases/5375b8cf33864b509a70f1f108378606/query',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          'Notion-Version': `${process.env.NOTION_VERSION}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        cache: 'no-store',
      }
    );

    const data = await res.json();
    const result = createArticleList(JSON.stringify(data));
    return NextResponse.json(result, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data from Notion API' },
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// export async function GET() {
//   try {
//     const notion = new Client({ auth: process.env.NOTION_API_KEY });
//     const res = await notion.databases.query({
//       database_id: process.env.NOTION_DB,
//       filter: {
//         property: 'IsPublished',
//         select: {
//           equals: 'Published',
//         },
//       },
//       sorts: [
//         {
//           property: 'CreatedAt',
//           direction: 'descending',
//         },
//       ],
//     });
//     return NextResponse.json(res, {
//       status: 200,
//       headers: { 'Content-type': 'application/json' },
//     });
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed to fetch data from Notion API' },
//       {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' },
//       }
//     );
//   }
// }
