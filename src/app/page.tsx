import Benefits from '@/app/home/benefits';
import Hero from '@/app/home/hero';
import Info from './home/info';
import Integrations from './home/integrations';
import News from './home/news';
import Results from './home/results';

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Info />
      <Integrations />
      <News />
      <Results />
    </main>
  );
}
