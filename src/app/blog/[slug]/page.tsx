import BlogList from '../_components/blog-list';

export default function CategoriesPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <BlogList slug={params.slug} />
    </div>
  );
}
