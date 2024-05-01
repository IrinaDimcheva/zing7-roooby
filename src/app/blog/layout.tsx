import { ReactNode } from 'react';
import SubNavigation from './_components/sub-navigation';
import CallToAction from '@/components/layout/cta';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <SubNavigation />
      {children}
      <CallToAction />
    </main>
  );
}
