import Link from 'next/link';

export const Menu = () => {
  return (
    <ul className="flex text-center border-b-2 border-gray-200">
      <li className="me-2">
        <Link
          href="/"
          className="inline-block px-1 md:px-3 py-1 rounded-t-md hover:bg-gray-200 cursor-pointer"
        >
          Home
        </Link>
      </li>
      <li className="me-2">
        <Link
          href="/monthly"
          className="inline-block px-1 md:px-3 py-1 rounded-t-md hover:bg-gray-200 cursor-pointer"
        >
          Monthly
        </Link>
      </li>
    </ul>
  );
};
