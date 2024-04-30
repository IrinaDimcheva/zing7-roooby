import Author, { IAuthor } from '@/components/layout/author';
import Divider from '@/components/ui/divider';

interface IResultItem {
  title: string;
  subTitle: string;
  description: string;
  author: IAuthor;
}

export default function ResultItem({
  title,
  subTitle,
  description,
  author,
}: IResultItem) {
  return (
    <li className="py-6">
      <Divider />
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
          <Author {...author} />
        </div>
      </div>
    </li>
  );
}
