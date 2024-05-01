import { ReactNode } from 'react';
import SubNavigation from './_components/sub-navigation';
import CallToAction from '@/components/layout/cta';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <SubNavigation />
      <section className="max-w-screen-wide mx-auto px-4">{children}</section>
      <CallToAction />
    </main>
  );
}
