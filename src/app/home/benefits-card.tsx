import HorizontalLine from '@/components/ui/horizontal-line';
import Image from 'next/image';

export default function BenefitsCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <li className="group block rounded-2xl px-6 py-20 shadow-xl bg-[#1e085b] text-white stroke-white fill-white hover:stroke-black hover:fill-black hover:bg-accent hover:text-black hover:-translate-y-3 hover:transition-all">
      <div className="pb-12 h-32">
        <Image
          src={image}
          alt={title}
          width={72}
          height={72}
          className="group-hover:invert"
        />
      </div>
      <HorizontalLine />
      <h4 className="text-xl font-bold tracking-[0.38px] mb-4 w-[95%]">
        {title}
      </h4>
      <p className="text-base leading-[26px] w-[85%]">{description}</p>
    </li>
  );
}
