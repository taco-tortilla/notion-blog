import { notion } from '../service/notion';
import { NotionToMarkdown } from 'notion-to-md';

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getDbInformation() {
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

  for (const elem of response.results) {
    return mdGenerate(elem.id);
  }
}

async function mdGenerate(pageId: string) {
  const mdBlocks = await n2m.pageToMarkdown(pageId, 1);
  const mdString = n2m.toMarkdownString(mdBlocks);
  return mdString;
}
