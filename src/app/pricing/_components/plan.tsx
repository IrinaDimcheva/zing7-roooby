import { plans } from '@/data/data';
import PlanCard from './plan-card';
import Divider from '@/components/ui/divider';
import Button from '@/components/ui/button';

export default function Plan() {
  return (
    <section className=" bg-secondary px-8 py-16 sm:py-24">
      <div className="max-w-screen-wide mx-auto">
        <div className="flex flex-col justify-between items-baseline xl:flex-row">
          <h1 className="font-bold text-5xl sm:text-6xl leading-tight tracking-tighter md:headline-h1 md:w-[689px] mb-8">
            Choose the right plan <br />
            <span className="text-gray-custom-300">for your business</span>
          </h1>
          <p className="text-lg w-[360px]">
            Built with love for growing businesses. Check out the Roooby CRM
            pricing grid below. Switch between plans at any time.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-2 max-md:gap-y-8 md:grid-cols-2 lg:grid-cols-3  py-24">
          {plans.map((item) => (
            <PlanCard key={item.title} {...item} />
          ))}
        </ul>
        <Divider />
        <div className="flex flex-wrap gap-12 justify-center items-center pt-8">
          <h3 className="text-[32px] font-bold leading-[42px] tracking-[-0.44px]">
            Need help choosing the right plan?
          </h3>
          <div className="flex flex-wrap gap-y-2 gap-x-8">
            <Button
              label="Contact sales"
              bgColor="bg-white"
              color="text-black"
              borderColor="border-gray-custom-100"
              className="max-[460px]:w-full py-4"
            />
            <Button label="Compare plans" className="max-[460px]:w-full py-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
