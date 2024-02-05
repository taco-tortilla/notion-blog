import { notion } from './components/notion';

async function getBlogDB() {
  const dbid = process.env.NOTION_BLOG_DB_ID!;
  const response = await notion.databases.query({
    database_id: dbid,
    filter: {
      property: 'Tags',
      multi_select: {
        contains: 'Tec',
      },
    },
  });
  console.log(response);
}

export default async function Home() {
  await getBlogDB();
  return <h1>test</h1>;
}
