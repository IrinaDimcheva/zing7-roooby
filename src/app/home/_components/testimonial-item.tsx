import Author, { IAuthor } from '@/components/layout/author';
import Divider from '@/components/ui/divider';
import Image from 'next/image';

export default function TestimonialItem({
  text,
  author,
}: {
  text: string;
  author: IAuthor;
}) {
  return (
    <li className="shadow-sm p-4 md:p-0 md:shadow-none">
      <div className="mb-10">
        <Image src="/icons/quotes.svg" alt='"' width={45} height={45} />
      </div>
      <Divider />
      <div className="flex flex-col gap-8 min-h-[270px] justify-between">
        <p className="text-[22px] leading-[34px] font-medium tracking-[-0.33px]">
          {text}
        </p>
        <Author {...author} />
      </div>
    </li>
  );
}
