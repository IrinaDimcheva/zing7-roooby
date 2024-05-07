import Partners from '@/components/layout/partners';
import MapSection from './_components/map-section';
import MessageForm from './_components/message-form';

export default function ContactPage() {
  return (
    <>
      <div className="bg-secondary">
        <div className="flex flex-wrap gap-x-6 gap-y-16 justify-between items-center max-w-screen-wide mx-auto py-24 sm:py-32 px-4">
          <MapSection />
          <MessageForm />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-8 max-w-screen-wide mx-auto px-4 py-24 sm:py-32">
        <p className="text-base font-medium tracking-[-0.22px]">
          Our clients and partners
        </p>
        <Partners />
      </div>
    </>
  );
}
