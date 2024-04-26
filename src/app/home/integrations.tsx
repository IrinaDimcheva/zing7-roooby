import Image from 'next/image';
import { integrations } from '@/data/data';

export default function Integrations() {
  return (
    <section className="bg-secondary py-24 md:py-32 px-4">
      <div className="max-w-screen-wide mx-auto text-center">
        <h3 className="text-5xl leading-[68px] tracking-[-0.67px] font-bold mb-4">
          Over 300+ integrations
        </h3>
        <p className="text-18 mb-16">
          Expand the capabilities of <span className="font-bold">Roooby</span>{' '}
          with hundreds of apps and integrations
        </p>
        <div className="flex flex-wrap gap-2 mb-16">
          {integrations.map((item, index) => (
            <div key={index} className="h-[120px] w-auto">
              <Image
                src={item.image}
                alt="/"
                height={120}
                width={item.width}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <div className="text-2xl font-medium">
          See all apps and extensions <span>{'>'}</span>{' '}
        </div>
      </div>
    </section>
  );
}
