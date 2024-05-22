import { Menu } from './components/home/Menu';
import { Article } from './components/home/Article';
import { ArticleInfo } from './types';
import { RecentArticle } from './components/home/RecentArticle';

async function getArticleList() {
  try {
    const res = await fetch('http://localhost:3000/api/getArticleList', {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(JSON.stringify(res));
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const articleList: Array<ArticleInfo> = await getArticleList();
  const recentArticle: ArticleInfo = articleList[0];
  return (
    <main className="p-6 sm:p-10 col-span-1 lg:col-span-8 bg-white rounded-md drop-shadow-md">
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
              />
            ))}
      </div>
    </main>
  );
}
