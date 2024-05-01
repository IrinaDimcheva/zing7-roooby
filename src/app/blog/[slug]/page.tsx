export default function CategoriesPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params);
  const { slug } = params;
  return <div>{slug}</div>;
}
