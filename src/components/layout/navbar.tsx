import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/button';

export default function Navbar() {
  return (
    <nav className="flex max-lg:justify-between justify-start gap-20 xl:gap-56 items-center py-8 max-w-screen-wide max-container">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Roooby logo"
          width={95}
          height={28}
        />
      </Link>
      <div className="lg:hidden">
        <button>
          <Image src="/images/bar.svg" alt="menu" width={24} height={24} />
        </button>
      </div>
      <div className="flex flex-1 justify-between items-center gap-24 max-lg:hidden">
        <ul className="flex gap-8 font-medium text-sm ">
          <li>
            <Link href="/">Product</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/">Company</Link>
          </li>
          <li>
            <Link href="/">Resources</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-6">
          <Button
            label="Log In"
            bgColor="bg-white"
            color="text-black"
            borderColor="border-gray-custom-100"
            textSize="text-xs"
          />
          <Button label="Try for Free" textSize="text-xs" />
        </div>
      </div>
    </nav>
  );
}
