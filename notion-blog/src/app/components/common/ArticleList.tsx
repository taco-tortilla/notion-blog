import { ArticleInfo } from '@/app/types';
import { Article } from '../common/Article';
import { RecentArticle } from '../common/RecentArticle';

type Props = {
  query: string;
};

type FetchResult =
  | {
      status: true;
      result: Array<ArticleInfo>;
    }
  | { status: false; result: string };

async function getArticleList(query: string): Promise<FetchResult> {
  try {
    const res = await fetch(
      `http://localhost:3000/api/getArticleList?query=${query}&year=All&month=All`,
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

  return (
    <div>
      {articleList.length > 0 ? (
        <div>
          <div className="pb-5">
            <RecentArticle
              id={articleList[0].id}
              title={articleList[0].title}
              description={articleList[0].description}
              createdAt={articleList[0].createdAt}
              image={articleList[0].image}
              tag={articleList[0].tag}
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
        </div>
      ) : (
        <p>no data</p>
      )}
    </div>
  );
}
