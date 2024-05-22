import { NotionToMarkdown } from 'notion-to-md';
import { Client } from '@notionhq/client';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query')!;
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const mdblocks = await n2m.pageToMarkdown(query);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}
