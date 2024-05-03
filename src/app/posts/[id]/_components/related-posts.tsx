import ArticleCard from '@/components/layout/article-card';
import { posts } from '@/data/articles';

export default function RelatedPosts({ id }: { id: number | undefined }) {
  const relatedPosts = posts.filter((post) => post.id !== id).slice(0, 3);

  return (
    <section className="bg-secondary py-24 sm:py-32 px-8">
      <div className="max-w-screen-wide mx-auto">
        <h2 className="headline-h3 sm:headline-h2 md:headline-h1">
          More from this topic
        </h2>
        <ul className="grid gap-6 gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-sm:pt-12 max-md:pt-16">
          {relatedPosts.map((item) => (
            <ArticleCard key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
