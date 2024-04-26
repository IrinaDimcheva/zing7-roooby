import Image from 'next/image';
import HorizontalLine from '@/components/ui/horizontal-line';
import Button from '@/components/ui/button';

interface Info {
  id: number;
  tag: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  cta?: string;
}

export default function InfoCard({
  id,
  tag,
  title,
  description,
  points,
  image,
  cta,
}: Info) {
  const isLeft = id / 2 === 1;

  const textEl = (
    <div className="flex flex-col justify-end lg:max-w-[500px]">
      <span className="uppercase text-sm font-bold tracking-[1.4px] text-gray-custom-500 bg-accent self-start inline-flex p-1 mb-4">
        {tag}
      </span>
      <h2 className="text-5xl font-bold leading-[58px] tracking-[-0.67px] mb-8">
        {title}
      </h2>
      <p className="mb-6 text-lg">{description}</p>
      <ul className="mb-6">
        {points.map((point, index) => (
          <li
            key={index}
            className="flex gap-4 items-baseline mb-4 text-lg tracking-[0.2px]"
          >
            <Image src="images/check.svg" alt="/" width={20} height={20} />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );

  const imageEl = (
    <div className="w-full max-w-[555px] max-h-[555px] max-lg:order-1 relative">
      <Image
        src={image}
        alt={title}
        width={555}
        height={555}
        objectFit="contain"
      />
      {cta && (
        <div className="bg-primary text-white text-lg font-bold tracking-[-0.25px] p-3 pl-4 rounded-xl max-w-[450px] mx-auto absolute bottom-8 left-2 right-2">
          {cta}
          <Button
            label="Start now"
            bgColor="bg-accent-dark"
            borderColor="border-accent-dark"
            className="py-3 px-3 ml-6 tracking-[-0.25px]"
          />
        </div>
      )}
    </div>
  );

  return (
    <article className="max-w-screen-wide mx-auto pt-24">
      <HorizontalLine />
      <div className="grid grid-cols-1 content-center gap-12 lg:grid-cols-2 mt-8">
        {isLeft ? (
          <>
            {imageEl} {textEl}
          </>
        ) : (
          <>
            {textEl} {imageEl}
          </>
        )}
      </div>
    </article>
  );
}
