import Image from 'next/image';
import Button from '../ui/button';

export default function Hero() {
  return (
    <section className="bg-gray-custom-50">
      <div className="py-16 max-h-[900px] max-w-screen-wide mx-auto">
        <div className="ml-4 grid gap-8 lg:grid-cols-2 relative">
          <div className="flex flex-col">
            <h1 className="text-blue-dark font-bold text-3xl md:text-4xl lg:text-5xl lg:leading-normal xl:text-[64px] leading-tight tracking-[-0.89px] md:max-w-lg lg:max-w-[640px] mb-6">
              Bringing companies and customers together, anywhere
            </h1>
            <p className="text-lg max-w-[478px] mb-16">
              An awesome & powefull tools for your business, increase business
              revenue with enterprise-grade links built to acquire and engage
              cutomers.
            </p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Enter you email"
                  className="p-6 w-[457px] rounded-lg border-2 border-gray-custom-100 outline-gray-custom-100"
                />
                <Button
                  label="Try for Free"
                  className="px-6 py-4 -m-[164px] rounded-lg"
                />
              </div>
              <p className="text-gray-500 text-sm pt-2">
                Full access. No credit card required
              </p>
            </form>
          </div>
          <div className="m-4 w-full h-auto lg:w-[675px] lg:h-[482px] rounded-3xl border-8 border-black/85  overflow-hidden static lg:absolute lg:-right-24 xl:-right-32">
            <Image
              src="./images/home-hero.svg"
              alt="Graphics"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-l-3xl  "
            />
          </div>
        </div>
        <div className="w-full pt-20 flex gap-32 items-center mx-4">
          <p className="tracking-[-0.22px] font-medium">
            Trusted by 1,000+ customers
          </p>
          <ul className="text-gray-custom-300 w-[1080px] flex items-center justify-between">
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
