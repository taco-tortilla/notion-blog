import { Categories } from './components/common/Categories';
import ArticleList from './components/home/ArticleList';

export default async function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-5 md:py-14">
      <ArticleList />
      <Categories />
    </main>
  );
}
