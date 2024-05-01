import ArticleCard from '@/components/layout/article-card';
import { posts } from '@/data/articles';

function BlogList({ slug }: { slug: string }) {
  if (!slug) {
  }

  const filteredPosts = posts.filter(
    (post) => post.tag.toLowerCase() === slug || (slug === 'all' && post)
  );
  return (
    <div className="grid gap-16 sm:gap-y-20 grid-cols-1 sm:container-feed sm:grid-rows-[370px_427px_427px_repeat(3, [205px])_427px]">
      {filteredPosts.map((item, index) => (
        <div
          key={item.id}
          className={`${index === 0 && 'sm:full-row'} ${
            ((index > 0 && index < 7) || index > 10) && 'sm:col-span-2'
          } ${index === 7 && 'sm:half-row'} ${
            index === 8 && 'sm:second-half-1'
          } ${index === 9 && 'sm:second-half-2'} ${
            index === 10 && 'sm:second-half-3'
          }`}
        >
          <ArticleCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default BlogList;
