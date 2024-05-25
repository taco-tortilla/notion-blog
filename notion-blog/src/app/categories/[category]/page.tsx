import { Categories } from '@/app/components/common/Categories';
import ArticleList from '@/app/components/home/ArticleList';

export default function CategoriesPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-5 md:py-14">
      <ArticleList query={params.category} />
      <Categories />
    </main>
  );
}
