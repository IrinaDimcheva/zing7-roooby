import { notFound } from 'next/navigation';
import Details from './_components/details';
import RelatedPosts from './_components/related-posts';
import { getPhoto, getPost, getUser } from '@/lib/actions';

export default async function DetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const article = await getPost(params.id);
  const author = await getUser(article.userId);
  const image = await getPhoto(article.id);

  if (!article) return notFound();

  return (
    <>
      <Details {...article} author={author} image={image} />
      <RelatedPosts id={article.id} />
    </>
  );
}
