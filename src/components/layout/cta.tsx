import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-primary overflow-hidden">
      <div className="grid lg:grid-cols-[2fr_1fr] min-h-[468px] max-w-screen-wide mx-auto">
        <div className="px-4 min-h-[468px]">
          <h2 className="text-4xl text-white font-bold tracking-[0.15px] sm:text-5xl md:headline-h1 sm:w-[640px] md:w-[730px] lg:w-[773px] mb-8 pt-32">
            Ready to supercharge your business?
          </h2>
          <p className="text-white max-w-[470px] lg:text-lg lg:w-[570px]">
            Ask about <span className="font-black">Roooby</span> products,
            pricing, implementation, or anything else. Our highly trained reps
            are standing by, ready to help.
          </p>
        </div>
        <div className="bg-accent relative -mr-[300px]">
          <div className="h-[384px] w-[768px] rounded-t-full bg-accent-dark mt-10 sm:mt-[80px] md:mt-[90px] -ml-32 sm:ml-[-5%]  lg:ml-[-25%] absolute z-10"></div>
          <div className="flex flex-col gap-4 items-center py-32 lg:pt-56 lg:pb-36 -ml-96 relative z-20">
            <Link
              href="/pricing"
              className="bg-white text-black font-bold border-2 border-white py-2 px-8 rounded-md hover:text-white hover:bg-primary"
            >
              Try for Free {'>'}
            </Link>
            <p className="text-white text-sm font-medium">
              Full access. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
