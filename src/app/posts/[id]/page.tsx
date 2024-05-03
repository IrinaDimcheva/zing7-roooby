import { notFound } from 'next/navigation';
import Details from './_components/details';
import { articles } from '@/data/articles';
import RelatedPosts from './_components/related-posts';

export default function DetailsPage({ params }: { params: { id: string } }) {
  const article = articles.find((article) => article.id === +params.id);

  if (!article) return notFound();
  return (
    <>
      <Details {...article} />
      <RelatedPosts id={article.id} />
    </>
  );
}
