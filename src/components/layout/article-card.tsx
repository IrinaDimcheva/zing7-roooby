import Image from 'next/image';
import Divider from '../ui/divider';

interface IArticleCard {
  id: number;
  tag: string;
  image: string;
  title: string;
  date: string;
  author: string;
}

export default function ArticleCard({
  tag,
  image,
  title,
  date,
  author,
}: IArticleCard) {
  return (
    <li>
      <p className="text-gray-custom-300 text-sm font-bold uppercase">{tag}</p>
      <Divider />
      <div className="w-full">
        <Image
          src={image}
          alt={title}
          width={600}
          height={500}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h4 className="text-2xl lg:text-3xl tracking-[-0.44px] font-bold py-4">
        {title}
      </h4>
      <p>
        <span className="font-medium">{date}, </span>
        <span>by {author}</span>
      </p>
    </li>
  );
}
