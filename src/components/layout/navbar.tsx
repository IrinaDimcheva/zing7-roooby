'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Button from '../ui/button';
import { navLinks } from '@/data/data';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="px-4">
      <div className="max-w-screen-wide mx-auto">
        <nav className="flex max-lg:justify-between justify-start gap-24 xl:gap-56 items-center py-8">
          <Link onClick={handleClose} href="/">
            <Image
              src="/images/logo.svg"
              alt="Roooby logo"
              width={95}
              height={28}
            />
          </Link>
          <div className="lg:hidden">
            <button onClick={() => setOpen(!open)}>
              {!open ? (
                <Image
                  src="/images/bar.svg"
                  alt="menu"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="/icons/close.svg"
                  alt="menu"
                  width={24}
                  height={24}
                />
              )}
            </button>
          </div>
          {open && (
            <div className="flex flex-col gap-12 justify-start pt-12 items-center absolute top-20 left-0 w-full h-screen bg-secondary">
              <ul className="flex flex-col gap-12 justify-start pt-10 items-center">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <Link onClick={handleClose} href={item.href}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Button
                onClick={handleClose}
                label="Log In"
                bgColor="bg-white"
                color="text-black"
                borderColor="border-gray-custom-100"
                textSize="text-xs"
                className="tracking-[-0.19px]"
              />
              <Link
                onClick={handleClose}
                href="/pricing"
                className="bg-primary border-2 text-white px-8 py-[10px] font-bold text-xs rounded-md tracking-[-0.19px] hover:bg-white hover:text-primary hover:border-primary"
              >
                Try for Free
              </Link>
            </div>
          )}

          <div className="flex flex-1 justify-between items-center gap-24 max-lg:hidden">
            <ul className="flex gap-8 font-medium text-sm ">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? 'underline decoration-2 underline-offset-8'
                        : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <Button
                label="Log In"
                bgColor="bg-white"
                color="text-black"
                borderColor="border-gray-custom-100"
                textSize="text-xs"
              />
              <Link
                href="/pricing"
                className="bg-primary border-2 text-white px-8 py-[10px] font-bold text-xs rounded-md tracking-[-0.19px] hover:bg-white hover:text-primary hover:border-primary"
              >
                Try for Free
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
