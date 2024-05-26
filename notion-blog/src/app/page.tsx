import { ArticleListSection } from './components/common/ArticleListSection';
import { Categories } from './components/common/Categories';

export default async function HomePage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-5 md:py-14">
      <ArticleListSection query="all" page="home" />
      <Categories />
    </main>
  );
}
