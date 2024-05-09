import { notFound } from 'next/navigation';
import ArticleCard from '@/components/layout/article-card';
import { getPosts, getPhotos, getUsers } from '@/lib/actions';

async function BlogList({ slug }: { slug: string }) {
  // if (!slug) return notFound();

  // const filteredPosts = posts.filter(
  //   (post) => post.tag.toLowerCase() === slug || (slug === 'all' && post)
  // );

  const posts = await getPosts(0, 50);
  const photos = await getPhotos(0, 50);
  const users = await getUsers();

  return (
    <ul className="grid grid-cols-1 max-md:gap-20 md:container-feed md:grid-rows-[370px_427px_427px_repeat(3, [190px])_427px] py-24 md:py-32">
      {posts?.map((item, index) => {
        const author = users.find((user) => user.id === item.userId);
        const photo = photos?.[index];
        return (
          <div
            key={item.id}
            className={`${index === 0 && 'md:full-row'} ${
              ((index > 0 && index < 7) || index > 10) && 'md:col-span-2'
            } ${index === 7 && 'md:half-row'} ${
              index === 8 && 'md:second-half-1'
            } ${index === 9 && 'md:second-half-2'} ${
              index === 10 && 'md:second-half-3'
            }`}
          >
            <ArticleCard
              {...item}
              index={index}
              author={author}
              image={photo}
            />
          </div>
        );
      })}
    </ul>
  );
}

export default BlogList;
