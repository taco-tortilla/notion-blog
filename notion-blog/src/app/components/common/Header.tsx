import Link from 'next/link';

export function Header() {
  return (
    <div className="flex py-5">
      <h1>tortilla blog</h1>
      <Link href="../about" className="ml-auto">
        About tortiila
      </Link>
    </div>
  );
}
