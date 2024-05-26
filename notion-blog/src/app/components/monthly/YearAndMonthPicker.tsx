import { Dispatch, SetStateAction } from 'react';

type Props = {
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
  month: string;
  setMonth: Dispatch<SetStateAction<string>>;
};

export default function YearAndMonthPicker({
  year,
  setYear,
  month,
  setMonth,
}: Props) {
  const generateYearOptions = () => {
    const years = [];
    const now = new Date();
    const currentYear = now.getFullYear();
    for (let year = 2023; year <= currentYear; year++) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return years;
  };

  function handleChangeYear(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedYear = e.target.value;
    setYear(selectedYear);
  }
  function handleChangeMonth(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedMonth = e.target.value;
    setMonth(selectedMonth);
  }

  return (
    <div className="flex justify-center pt-6">
      <div className="pr-5">
        <select
          id="year-picker"
          value={year}
          onChange={handleChangeYear}
          className="m-2 outline-none text-xl w-20"
        >
          <option value="">All</option>
          {generateYearOptions().map((option) => option)}
        </select>
      </div>
      <div>
        <select
          id="month-picker"
          value={month}
          onChange={handleChangeMonth}
          className="m-2 outline-none text-xl w-14"
        >
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
    </div>
  );
}
