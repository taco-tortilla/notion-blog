'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export const Menu = () => {
  const path = usePathname();

  return (
    <ul className="flex text-center border-b-2 border-gray-200">
      <li className="me-2">
        <Link
          href="/"
          className={`inline-block px-1 md:px-3 py-1 rounded-t-md active hover:bg-gray-200 hover:text-blue-400 cursor-pointer ${
            path === '/' && 'bg-gray-200'
          }`}
        >
          Home
        </Link>
      </li>
      <li className="me-2">
        <Link
          href="/monthly"
          className={`inline-block px-1 md:px-3 py-1 rounded-t-md active hover:bg-gray-200 hover:text-blue-400 cursor-pointer ${
            path === '/monthly' && 'bg-gray-200'
          }`}
        >
          Monthly
        </Link>
      </li>
    </ul>
  );
};
