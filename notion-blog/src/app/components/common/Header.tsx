import Link from 'next/link';

export function Header() {
  return (
    <div className="flex py-5">
      <Link href="/" className="md:text-lg font-lg">
        tortilla blog
      </Link>
      <Link href="/about" className="ml-auto md:text-lg font-lg">
        About tortiila
      </Link>
    </div>
  );
}
