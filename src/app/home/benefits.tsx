import { benefits } from '@/data/data';
import BenefitsCard from './benefits-card';

export default function Benefits() {
  return (
    <section className="bg-primary text-white md:py-12">
      <div className="max-w-screen-wide w-full mx-auto py-28 px-4">
        <div className="grid lg:grid-cols-[55%_43%] xl:grid-cols-[56%_45%] gap-8  sm:gap-6 w-full justify-between items-baseline mb-16">
          {/* <div className="flex lg:flex-row gap-8 w-full"> */}
          <h2 className="text-5xl font-bold">
            Here&apos;s how Roooby can benefit your business
          </h2>
          <p className="text-secondary text-lg ">
            Build more meaningful and lasting relationships — better understand
            their needs, identify new opportunities to help, address any
            problems faster.
          </p>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {benefits.map((item) => (
            <BenefitsCard key={item.title} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
