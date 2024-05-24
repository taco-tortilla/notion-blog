import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold py-5">404</h1>
      <p className="text-lg font-medium">Sorry, page can not be found... :(</p>
      <div className="py-20">
        <Link href="/">
          <button className="text-lg px-6 py-3 bg-blue-200 rounded-full hover:bg-blue-300">
            back to 🔝
          </button>
        </Link>
      </div>
    </div>
  );
}
