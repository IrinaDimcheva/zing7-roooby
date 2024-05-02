import { notFound } from 'next/navigation';
import Details from './_components/details';
import { articles } from '@/data/articles';

export default function DetailsPage({ params }: { params: { id: string } }) {
  const article = articles.find((article) => article.id === +params.id);

  if (!article) return notFound();
  return (
    <section>
      <Details {...article} />
    </section>
  );
}
