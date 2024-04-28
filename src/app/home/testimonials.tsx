import LinkSeeAll from '@/components/ui/link-see-all';
import TestimonialItem from './testimonial-item';
import { testimonials } from '@/data/data';

export default function Testimonials() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="max-w-screen-wide px-4 mx-auto ">
        <div className="flex justify-between items-baseline pb-16">
          <h3 className="text-5xl font-bold leading-[58px] tracking-[-0.67px] w-[570px]">
            We love our Customers and They love us too
          </h3>
          <LinkSeeAll href="/" />
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20">
          {testimonials.map((item) => (
            <TestimonialItem key={item.author.name} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
