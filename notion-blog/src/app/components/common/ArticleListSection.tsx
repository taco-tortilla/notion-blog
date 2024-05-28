import { Menu } from '../common/Menu';
import ArticleList from '../common/ArticleList';
import { Suspense } from 'react';
import { Loading } from './Loading';

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
      <Suspense fallback={<Loading />}>
        <ArticleList query={query} />
      </Suspense>
    </div>
  );
}
