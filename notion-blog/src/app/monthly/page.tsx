import { Categories } from '../components/common/Categories';
import { MonthlyArticleListSection } from '../components/monthly/MonthlyArticleListSection';

export default async function MonthlyPage() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-5 md:py-14">
      <MonthlyArticleListSection query="all" page="monthly" />
      <Categories />
    </main>
  );
}
