import ArticleCard from '@/components/layout/article-card';
import Link from 'next/link';

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
    <section className="max-w-screen-wide mx-auto px-4 py-24 lg:py-32">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-5xl sm:text-6xl leading-tight tracking-tighter xl:text-[64px] xl:leading-[74px] xl:tracking-[-0.89px]">
          What’s new at Roooby?
        </h2>
        <Link className="text-xl font-medium hover:underline" href="/blog">
          See all <span className="text-accent-dark">{'>'}</span>
        </Link>
      </div>
      <ul className="grid sm:grid-cols-2 gap-4 py-8">
        {news.map((item) => (
          <ArticleCard key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
