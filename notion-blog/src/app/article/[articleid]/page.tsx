import Markdown from 'react-markdown';
import { NotionToMarkdown } from 'notion-to-md';
import { Client } from '@notionhq/client';
import remarkGfm from 'remark-gfm';
import { useRouter } from 'next/router';

// async function getArticleBody(id: string) {
//   try {
//     const res = await fetch(
//       `http://localhost:3000/api/getArticleBody?query=${id}`,
//       {
//         cache: 'no-store',
//       }
//     );
//     if (!res.ok) {
//       throw new Error(JSON.stringify(res));
//     }
//     // const data = await res.json();
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getArticleBody(request: string) {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });
  const n2m = new NotionToMarkdown({ notionClient: notion });
  const mdblocks = await n2m.pageToMarkdown(request);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}

export default async function ArticleView({
  params,
}: {
  params: { articleid: string };
}) {
  const result = await getArticleBody(params.articleid);
  // console.log(await getArticleBody(params.articleid));

  return (
    <main className="p-6 sm:p-10 col-span-1 lg:col-span-8 bg-white rounded-md drop-shadow-md">
      <div>image</div>
      <Markdown remarkPlugins={[remarkGfm]} className="markdown">
        {result}
      </Markdown>
    </main>
  );
}
