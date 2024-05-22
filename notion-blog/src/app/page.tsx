import { Menu } from './components/home/Menu';
import { Article } from './components/home/Article';
import { ArticleInfo } from './types';

async function getData() {
  try {
    const res = await fetch('http://localhost:3000/api/getPageList', {
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
  const articleList: Array<ArticleInfo> = await getData();
  console.log(articleList);
  return (
    <main className="p-6 sm:p-10 col-span-1 lg:col-span-8 bg-white rounded-md drop-shadow-md">
      <div className="pb-5">
        <Menu />
      </div>
      <div className="pb-5">
        <Article
          id="test"
          title="test"
          description="test"
          createdAt="123"
          image=""
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {articleList &&
          articleList.map((article, index) => (
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
