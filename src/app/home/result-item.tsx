import HorizontalLine from '@/components/ui/horizontal-line';
import Image from 'next/image';

interface IResultItem {
  title: string;
  subTitle: string;
  description: string;
  author: {
    image: string;
    name: string;
    position: string;
  };
}

export default function ResultItem({
  title,
  subTitle,
  description,
  author,
}: IResultItem) {
  return (
    <li className="py-6">
      <HorizontalLine />
      <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-2 py-6">
        <div>
          <h2 className="text-[72px] leading-[74px] font-bold tracking[-1px] pb-4">
            {title}
          </h2>
          <p className="text-xl font-bold">{subTitle}</p>
        </div>
        <div>
          <p className="text-[30px] leading-[42px] tracking-[-0.44px] font-medium pb-4">
            {description}
          </p>
          <div className="flex gap-2">
            <div>
              <Image
                src={author.image}
                alt={author.name}
                width={50}
                height={50}
              />
            </div>
            <div>
              <p className="font-bold">{author.name}</p>
              <p className="text-gray-custom-500">{author.position}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
