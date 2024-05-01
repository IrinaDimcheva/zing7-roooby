import Benefits from '@/app/home/_components/benefits';
import Hero from '@/app/home/_components/hero';
import Info from './home/_components/info';
import Integrations from './home/_components/integrations';
import News from './home/_components/news';
import Results from './home/_components/results';
import Testimonials from './home/_components/testimonials';
import CallToAction from '@/components/layout/cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Info />
      <Integrations />
      <News />
      <Results />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
