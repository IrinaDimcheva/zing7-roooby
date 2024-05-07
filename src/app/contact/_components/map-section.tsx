'use client';

import dynamic from 'next/dynamic';

const LazyMap = dynamic(() => import('./map'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function MapSection() {
  return (
    <section>
      <div className="text-lg pb-8">
        <p className="font-bold">Roooby Technologies</p>
        <p>Plovdiv, Bulgaria, bul Vasil Levski 96</p>
      </div>
      <LazyMap />
      <div className="flex gap-8 sm:justify-between flex-wrap text-lg w-full xl:max-w-[458px] pt-8">
        <div className="flex gap-4">
          <div className="bg-gray-custom-300 w-[2px] h-auto my-1"></div>
          <div>
            <p className="font-bold">General</p>
            <p>hello@me.com</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="bg-gray-custom-300 w-[2px] h-auto my-1"></div>
          <div>
            <p className="font-bold">Support</p>
            <p>support@me.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
