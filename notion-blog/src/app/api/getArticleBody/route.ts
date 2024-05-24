import { NotionToMarkdown } from 'notion-to-md';
import { Client } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const pageId = searchParams.get('query')!;
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return NextResponse.json({ result: mdString.parent }, { status: 200 });
}
