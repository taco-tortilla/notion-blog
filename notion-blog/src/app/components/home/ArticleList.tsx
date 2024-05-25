import { ArticleInfo } from '@/app/types';
import { Article } from './Article';
import { Menu } from './Menu';
import { RecentArticle } from './RecentArticle';
import Pagenation from './Pagenation';

type Props = {
  query: string;
};

type FetchResult =
  | {
      status: true;
      result: Array<ArticleInfo>;
    }
  | { status: false; result: string };

async function getArticleList(query: string) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/getArticleList?query=${query}`,
      {
        cache: 'no-store',
      }
    );
    if (!res.ok) {
      throw new Error(JSON.stringify(res));
    }
    const data: Array<ArticleInfo> = await res.json();
    const result: FetchResult = { status: true, result: data };
    return result;
  } catch (error) {
    const result: FetchResult = { status: false, result: 'Fetch failed' };
    return result;
  }
}

export default async function ArticleList({ query }: Props) {
  const fetchedData = await getArticleList(query);
  let articleList: Array<ArticleInfo> = [];
  if (fetchedData.status !== false) {
    articleList = fetchedData.result;
  }
  const recentArticle = articleList[0];

  return (
    <div className="p-6 sm:p-10 col-span-1 lg:col-span-8 bg-white rounded-md drop-shadow-md">
      <div className="pb-5">
        <Menu />
      </div>
      <div className="pb-5">
        <RecentArticle
          id={recentArticle.id}
          title={recentArticle.title}
          description={recentArticle.description}
          createdAt={recentArticle.createdAt}
          image={recentArticle.image}
          tag={recentArticle.tag}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {articleList &&
          articleList
            .slice(1)
            .map((article, index) => (
              <Article
                key={index}
                id={article.id}
                title={article.title}
                description={article.description}
                createdAt={article.createdAt}
                image={article.image}
                tag={article.tag}
              />
            ))}
      </div>
      <Pagenation />
    </div>
  );
}
