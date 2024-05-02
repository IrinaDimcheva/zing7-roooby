'use client';

import { nestedNavLinks } from '@/data/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubNavigation() {
  const pathname = usePathname();

  return (
    <section className="bg-secondary">
      <div className="max-w-screen-wide mx-auto px-4">
        <h1 className="font-bold text-5xl sm:text-6xl leading-tight tracking-tighter md:text-[64px] md:leading-[74px] md:tracking-[-0.89px] md:w-[652px] md:mb-8 py-24 lg:py-32">
          News and insights{' '}
          <span className="text-gray-custom-200">from our experts</span>
        </h1>
        <ul className="flex flex-wrap gap-4">
          {nestedNavLinks.map((item) => (
            <li key={item.name} className="text-lg text-gray-custom-200 pb-4">
              <Link
                href={`/blog${item.href}`}
                className={`${
                  pathname === `/blog${item.href}`
                    ? 'underline decoration-4 underline-offset-[20px] decoration-accent-dark text-black font-medium'
                    : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
