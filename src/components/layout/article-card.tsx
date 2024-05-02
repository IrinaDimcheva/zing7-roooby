import Image from 'next/image';
import Divider from '../ui/divider';

interface IArticleCard {
  id: number;
  tag: string;
  image?: string;
  title: string;
  date: string;
  author: string;
  index?: number | undefined;
}

export default function ArticleCard({
  tag,
  image,
  title,
  date,
  author,
  index,
}: IArticleCard) {
  if (index === 0) {
    return (
      <li className="grid grid-cols-1 md:grid-cols-[50%_48%] align-top gap-6">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <Divider />
            <p className="text-gray-custom-300 text-sm font-bold uppercase pb-4">
              {tag}
            </p>
            <h4 className="text-2xl lg:text-3xl xl:text-[40px]  lg:leading-[50px] tracking-[-0.44px] lg:tracking-[-0.56px] font-bold py-4">
              {title}
            </h4>
          </div>
          <div className="md:-mb-4">
            <p className="pb-6">
              <span className="font-medium">{date}, </span>
              <span>by {author}</span>
            </p>
            <Divider />
          </div>
        </div>
        {image && (
          <div className="w-full">
            <Image
              src={image}
              alt={title}
              width={600}
              height={500}
              style={{ objectFit: 'contain' }}
            />
          </div>
        )}
      </li>
    );
  }

  if (index && index > 7 && index < 11) {
    return (
      <li
        className={`flex flex-col justify-around gap-8 ${
          index === 8 && 'md:pt-[132px]'
        }`}
      >
        <div>
          <Divider />
          <h4 className="text-2xl leading-[34px] tracking-[-0.33px] font-bold">
            {title}
          </h4>
        </div>
        <div className="flex justify-between">
          <p>
            <span className="font-medium">{date}, </span>
            <span>by {author}</span>
          </p>
          <p className="text-gray-custom-300 text-sm font-bold uppercase">
            {tag}
          </p>
        </div>
      </li>
    );
  }

  return (
    <li className="md:pt-24">
      <p className="text-gray-custom-300 text-sm font-bold uppercase pb-4">
        {tag}
      </p>
      <Divider />
      {image && (
        <div className="w-full mt-6">
          <Image
            src={image}
            alt={title}
            width={600}
            height={500}
            style={{ objectFit: 'contain' }}
          />
        </div>
      )}
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
