import { ArticleBody } from '@/app/components/article/ArticleBody';
import { ArticleHeader } from '@/app/components/article/ArticleHeader';
import { Categories } from '@/app/components/common/Categories';
import { ArticleInfo, FetchResult } from '@/app/types';

type Props = {
  articleId: string;
};

async function getArticleInfo(id: string) {
  try {
    const res = await fetch(
      `https://tortilla-blog.vercel.app/api/getArticleInfo?query=${id}`,
      {
        cache: 'no-store',
      }
    );
    if (!res.ok) {
      throw new Error(JSON.stringify(res));
    }
    const data: ArticleInfo = await res.json();
    const result: FetchResult = { status: true, result: data };
    return result;
  } catch (error) {
    const result: FetchResult = { status: false, result: 'Fetch failed' };
    return result;
  }
}

async function getArticleBody(id: string) {
  try {
    const res = await fetch(
      `https://tortilla-blog.vercel.app/api/getArticleBody?query=${id}`,
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

export default async function ArticleSection({ articleId }: Props) {
  const articleInfo = await getArticleInfo(articleId);
  const ｍarkdown = await getArticleBody(articleId);

  return (
    <main className="p-6 sm:p-10 col-span-1 lg:col-span-8 bg-white rounded-md drop-shadow-md">
      {articleInfo.status !== false ? (
        <div>
          <ArticleHeader
            title={articleInfo.result.title ?? 'No title'}
            url={articleInfo.result.image ?? ''}
            description={articleInfo.result.description ?? ''}
            createdAt={articleInfo.result.createdAt ?? ''}
          />
          <ArticleBody markdown={ｍarkdown.result} />
        </div>
      ) : (
        <p className="text-center">Sorry, Article can not be found... :(</p>
      )}
    </main>
  );
}
