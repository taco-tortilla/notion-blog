import Link from 'next/link';

export function Header() {
  return (
    <div className="flex py-5">
      <Link href="/" className="text-lg font-lg">
        tortilla blog
      </Link>
      <Link href="/about" className="ml-auto text-lg font-lg">
        About tortiila
      </Link>
    </div>
  );
}
