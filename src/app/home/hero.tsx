import Image from 'next/image';
import Button from '../../components/ui/button';

export default function Hero() {
  return (
    <section className="bg-secondary pl-4 overflow-hidden pb-8">
      <div className="py-20 max-w-screen-wide mx-auto">
        <div className="flex flex-col gap-8 max-lg:pr-4 lg:flex-row justify-center items-center mx-auto">
          <div className="flex flex-col max-lg:justify-center max-lg:items-center max-lg:text-center">
            <h1 className="text-primary font-bold text-5xl sm:text-6xl leading-tight tracking-tighter xl:text-[64px] xl:leading-[74px] xl:tracking-[-0.89px] md:w-[540px] xl:w-[640px] mb-8">
              Bringing companies and customers together, anywhere
            </h1>
            <p className="text-lg max-w-[478px] mb-16">
              An awesome & powefull tools for your business, increase business
              revenue with enterprise-grade links built to acquire and engage
              cutomers.
            </p>
            <form className="mb-6 w-full">
              <div className="max-sm:grid">
                <input
                  type="text"
                  placeholder="Enter you email"
                  className="p-4 sm:p-5 rounded-lg border-2 w-full sm:w-[457px] border-gray-custom-100 outline-gray-custom-100"
                />
                <Button
                  label="Try for Free"
                  className="px-[22px] py-[12px] sm:-ml-[148px] rounded-lg"
                />
              </div>
              <p className="text-gray-500 text-sm pt-2">
                Full access. No credit card required
              </p>
            </form>
          </div>
          <div className="col-start-8 w-auto h-auto lg:-mr-32 xl:-mr-40 rounded-3xl border-8 border-black/85 overflow-hidden">
            <Image
              src="./images/home-hero.svg"
              alt="Graphics"
              width={675}
              height={482}
              style={{ objectFit: 'cover' }}
              className="rounded-l-3xl overflow-hidden"
            />
          </div>
        </div>
        <div className="w-full pt-24 lg:pt-32 flex gap-6 flex-col lg:flex-row justify-between items-center pr-4">
          <p className="tracking-[-0.22px] font-medium">
            Trusted by 1,000+ customers
          </p>
          <ul className="text-gray-custom-300 gap-8 flex justify-between items-center flex-wrap">
            <li>
              <Image
                src="./images/google.svg"
                alt="Google"
                width={97}
                height={20}
              />
            </li>
            <li>
              <Image
                src="./images/atlassian.svg"
                alt="Atlassian"
                width={97}
                height={20}
              />
            </li>
            <li>
              <Image
                src="./images/canon.svg"
                alt="Cannon"
                width={97}
                height={20}
              />
            </li>
            <li>
              <Image
                src="./images/walmart.svg"
                alt="Walmart"
                width={97}
                height={20}
              />
            </li>
            <li>
              <Image
                src="./images/amazon.svg"
                alt="Amazon"
                width={97}
                height={20}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
