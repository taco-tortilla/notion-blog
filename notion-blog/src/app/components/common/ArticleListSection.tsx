import { Menu } from '../common/Menu';
import ArticleList from '../common/ArticleList';

type Props = {
  query: string;
  page: string;
};

export function ArticleListSection({ query, page }: Props) {
  return (
    <div className="p-6 sm:p-10 col-span-1 lg:col-span-8 bg-white rounded-md drop-shadow-md">
      <div className="pb-5">
        <Menu />
      </div>
      <ArticleList query={query} />
    </div>
  );
}
