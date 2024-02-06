import { notion } from './components/notion';

async function getBlogDB() {
  const dbid = process.env.NOTION_BLOG_DB_ID!;
  const response = await notion.databases.query({
    database_id: dbid,
    filter: {
      property: 'IsPublished',
      select: {
        equals: 'Published',
      },
    },
  });
  const blogNum = response.results.length;
  for (const elem of response.results) {
    await getPage(elem.id);
  }
}

async function getPage(pageId: string) {
  const response = await notion.pages.retrieve({
    page_id: pageId,
  });
  console.log(response);
}

export default async function Home() {
  await getBlogDB();
  return <h1>test</h1>;
}
