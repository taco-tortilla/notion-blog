import ArticleSection from '@/app/components/article/ArticleSection';
import { Categories } from '@/app/components/common/Categories';

export default async function ArticleView({
  params,
}: {
  params: { articleid: string };
}) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-5 md:py-14">
      <ArticleSection articleId={params.articleid} />
      <Categories />
    </main>
  );
}
