import { createArticleInfo } from '@/app/logic/article';
import { Client } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const searchParams = request.nextUrl.searchParams;
  const pageId = searchParams.get('query')!;
  try {
    const res = await notion.pages.retrieve({ page_id: pageId });

    if ('properties' in res) {
      const articleInfo = createArticleInfo(res);
      return NextResponse.json(articleInfo, {
        status: 200,
        headers: { 'Content-type': 'application/json' },
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid page response from Notion API' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data from Notion API' },
      { status: 500 }
    );
  }
}
