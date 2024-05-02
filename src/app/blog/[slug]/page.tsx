import BlogList from '../_components/blog-list';

export default function CategoriesPage({
  params,
}: {
  params: { slug: string };
}) {
  return <BlogList slug={params.slug} />;
}
