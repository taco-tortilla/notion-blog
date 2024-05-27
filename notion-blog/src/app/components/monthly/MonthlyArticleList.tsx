import { ArticleInfo } from '@/app/types';
import { useEffect, useState } from 'react';
import { MonthlyRecentArticle } from './MonthlyRecentArticle';
import { MonthlyArticle } from './MonthlyArticle';
import { Nodata } from '../common/Nodata';

type Props = {
  query: string;
  year: string;
  month: string;
};

type FetchResult =
  | {
      status: true;
      result: Array<ArticleInfo>;
    }
  | { status: false; result: string };

async function getArticleList(
  query: string,
  year: string,
  month: string
): Promise<FetchResult> {
  try {
    const res = await fetch(
      `https://tortilla-blog.vercel.app/api/getArticleList?query=${query}&year=${year}&month=${month}`,
      {
        next: { revalidate: 3000 },
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

export default function MonthlyArticleList({ query, year, month }: Props) {
  const [articleList, setArticleList] = useState<Array<ArticleInfo>>([]);

  useEffect(() => {
    async function fetch() {
      const fetchedData = await getArticleList(query, year, month);
      if (fetchedData.status !== false) {
        setArticleList(fetchedData.result);
      }
    }
    fetch();
  }, [year, month, query]);

  return (
    <div>
      {articleList.length !== 0 ? (
        <div>
          <div className="pb-5">
            <MonthlyRecentArticle
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
                  <MonthlyArticle
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
        <Nodata />
      )}
    </div>
  );
}
