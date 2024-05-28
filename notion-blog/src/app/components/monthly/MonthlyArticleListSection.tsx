'use client';

import { Menu } from '../common/Menu';
import YearAndMonthPicker from './YearAndMonthPicker';
import MonthlyArticleList from './MonthlyArticleList';
import { useState } from 'react';
import { Loading } from '../common/Loading';

type Props = {
  query: string;
  page: string;
};

export function MonthlyArticleListSection({ query, page }: Props) {
  const [year, setYear] = useState('All');
  const [month, setMonth] = useState('All');

  return (
    <div className="p-6 sm:p-10 col-span-1 lg:col-span-8 bg-white rounded-md drop-shadow-md">
      <div className="pb-5">
        <Menu />
      </div>
      <div className="pb-5">
        <YearAndMonthPicker
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
        />
      </div>
      <MonthlyArticleList query={query} year={year} month={month} />
      <Loading />
    </div>
  );
}
