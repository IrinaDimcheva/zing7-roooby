import { info } from '@/data/data';
import InfoCard from './info-card';

export default function Info() {
  return (
    <section className="px-4 pb-24">
      {info.map((item) => (
        <InfoCard key={item.tag} {...item} />
      ))}
    </section>
  );
}
