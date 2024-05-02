import Button from '@/components/ui/button';
import Divider from '@/components/ui/divider';
import Image from 'next/image';

interface IPlan {
  title: string;
  tag?: string;
  description: string;
  price: string;
  included: string[];
  excluded?: string[];
}

export default function PlanCard({
  title,
  tag,
  description,
  price,
  included,
  excluded,
}: IPlan) {
  return (
    <li className="flex flex-col justify-between p-8 rounded-xl shadow-sm bg-white">
      <div className="flex gap-2 items-center pb-4">
        <h4 className="text-2xl font-bold">{title}</h4>
        {tag && (
          <span className="text-xs font-bold tracking-[1.2px] uppercase text-accent-dark bg-accent-dark-bg py-1 px-2 rounded-md">
            {tag}
          </span>
        )}
      </div>
      <p className="leading-[26px] pb-6">{description}</p>
      <h2 className="headline-h2 pb-6">
        {price}
        <sub className="text-base leading-[26px] text-gray-custom-200">
          /month
        </sub>
      </h2>
      {tag ? (
        <Button
          label="Try for Free"
          className="w-full py-3 mb-3 hover:bg-white hover:text-primary"
        />
      ) : (
        <Button
          label="Try for Free"
          bgColor="bg-white"
          color="text-black"
          borderColor="border-gray-custom-100"
          className="w-full py-3 mb-3 "
        />
      )}
      <p className="text-sm tracking-[0.16px] text-gray-custom-200 pb-8">
        Free 14-day trial. No credit card required.
      </p>
      <div>
        <Divider />
        <ul className="pt-6">
          {included.map((item, index) => (
            <li key={index} className="flex gap-4 pb-4">
              <Image src="/images/check.svg" alt="/" width={20} height={20} />
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <ul>
          {excluded &&
            excluded.map((item, index) => (
              <li key={index} className="flex gap-4 pb-4 opacity-30">
                <Image src="/images/check.svg" alt="/" width={20} height={20} />
                <p className="leading-[16px] tracking-[0.18px] line-through">
                  {item}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
}
