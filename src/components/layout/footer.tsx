import Image from 'next/image';
import { footerLinks, socials } from '@/data/data';
import Link from 'next/link';
import Divider from '../ui/divider';
import FooterDropdown from './footer-dropdown';

export default function Footer() {
  return (
    <footer className="text-sm px-8 max-w-[1440px] mx-auto">
      <div className="max-w-screen-wide mx-auto px-4 grid gap-y-12 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-24">
        <div className="flex flex-col gap-8 sm:col-span-2">
          <div>
            <Image
              src="/images/logo.svg"
              alt="Roooby logo"
              width={95}
              height={28}
            />
          </div>
          <p className="text-sm leading-[24px] max-w-[263px]">
            We built an elegant solution. Our team created a fully integrated
            sales and marketing solution for SMBs
          </p>
          <ul className="flex flex-row gap-4">
            {socials.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {footerLinks.map((item) => (
          <div key={item.title}>
            <h5 className="font-bold pb-4">{item.title}</h5>
            <ul>
              {item.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm leading-[34px] tracking-[0.2px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Divider />
      <div className="flex flex-wrap justify-between items-center gap-8 py-8 max-w-screen-wide mx-auto">
        <p>&copy; Copyright 2024</p>

        <ul className="flex flex-wrap gap-y-4 gap-x-12">
          <li>
            <Link href="/">Terms of Service</Link>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/">Cookies</Link>
          </li>
        </ul>
        <p className="flex items-center">
          <Image src="/icons/ic_language.svg" alt="" width={24} height={24} />
          <FooterDropdown />
          {/* <Image
            src="/icons/ic_keyboard_arrow_down.svg"
            alt="choose"
            width={24}
            height={24}
            className="-ml-5"
          /> */}
        </p>
      </div>
    </footer>
  );
}
