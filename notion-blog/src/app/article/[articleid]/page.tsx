import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

async function getArticleBody(id: string) {
  console.log(id);
  try {
    const res = await fetch(
      `http://localhost:3000/api/getArticleBody?query=${id}`,
      {
        cache: 'no-store',
      }
    );
    if (!res.ok) {
      throw new Error(JSON.stringify(res));
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function ArticleView({
  params,
}: {
  params: { articleid: string };
}) {
  const ｍarkdown = await getArticleBody(params.articleid);

  return (
    <main className="p-6 sm:p-10 col-span-1 lg:col-span-8 bg-white rounded-md drop-shadow-md">
      <div>image</div>
      <Markdown remarkPlugins={[remarkGfm]} className="markdown">
        {ｍarkdown.result}
      </Markdown>
    </main>
  );
}
