import Link from 'next/link';

export function Categories() {
  return (
    <div className="col-span-1 lg:col-span-4 rounded-md">
      <div className="bg-white p-10 rounded-md drop-shadow-md sticky top-10">
        <p className="text-lg font-bold pb-5">Categories</p>
        <ul>
          <li>
            <Link
              href="/categories/tec"
              className="cursor-pointer block hover:text-blue-400 py-2"
            >
              <span className="pr-2">💻</span>tec
            </Link>
          </li>
          <li>
            <Link
              href="/categories/movie"
              className="cursor-pointer block hover:text-blue-400 py-2"
            >
              <span className="pr-2">🎬</span>movie
            </Link>
          </li>
          <li>
            <Link
              href="/categories/book"
              className="cursor-pointer block hover:text-blue-400 py-2"
            >
              <span className="pr-2">📖</span>book
            </Link>
          </li>
          <li>
            <Link
              href="/categories/monologue"
              className="cursor-pointer block hover:text-blue-400 py-2"
            >
              <span className="pr-2">💭</span>monologue
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
