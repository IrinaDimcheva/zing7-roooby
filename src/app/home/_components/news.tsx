import ArticleCardOld from '@/components/layout/article-card-old';
import LinkSeeAll from '@/components/ui/link-see-all';

export default function News() {
  const news = [
    {
      id: 1,
      tag: 'service',
      image: '/images/product-launch.png',
      title: 'How To Deliver a Successful Product Launch',
      date: '05 Sep 2024',
      author: 'Joshua Nash',
    },
    {
      id: 2,
      tag: 'service',
      image: '/images/employee-profile.png',
      title:
        'What Makes an Authentic Employee Profile, and Why Does It Matter?',
      date: '07 Sep 2023',
      author: 'Ivan Neshev',
    },
  ];

  return (
    <section className="max-w-screen-wide mx-auto px-4 py-24 xl:py-32">
      <div className="flex justify-between items-center pb-10">
        <h2 className="font-bold text-5xl sm:text-6xl leading-tight tracking-tighter xl:headline-h1">
          What’s new at Roooby?
        </h2>
        <LinkSeeAll href="/blog" />
      </div>
      <ul className="grid sm:grid-cols-2 gap-4 pt-8">
        {news.map((item) => (
          <ArticleCardOld key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
