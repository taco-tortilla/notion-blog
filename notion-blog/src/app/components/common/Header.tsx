import Link from 'next/link';

export function Header() {
  return (
    <div className="flex py-5">
      <Link href="/">tortilla blog</Link>
      <Link href="/about" className="ml-auto">
        About tortiila
      </Link>
    </div>
  );
}
