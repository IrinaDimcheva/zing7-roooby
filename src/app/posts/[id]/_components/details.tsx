import Author from '@/components/layout/author';
import Divider from '@/components/ui/divider';
import Image from 'next/image';
import Link from 'next/link';

interface IArticle {
  id: number;
  tag: string;
  title: string;
  date: string;
  author: string;
  image?: string;
  summary: string;
  section1: {
    title: string;
    p1: string;
    p2: string;
    quote: {
      text: string;
      author: string;
    };
    image: string;
  };
  section2: {
    title: string;
    intro: string;
    subtitle: string;
    p1: string;
    p2: string;
  };
  creditsTo: {
    image: string;
    name: string;
    position: string;
    socials: {
      name: string;
      href: string;
      icon: string;
    }[];
  };
}

export default function Details(article: IArticle) {
  return (
    <article className="pb-12 sm:pb-24">
      <section className="bg-secondary pt-12 sm:pt-24 md:pt-32 px-8">
        <div className="max-w-[750px] w-full mx-auto">
          <p className="text-gray-custom-300 text-sm font-bold uppercase pb-4">
            {article.tag}
          </p>
          <Divider />
          <h1 className="headline-h4 sm:headline-h2 pb-6">{article.title}</h1>
          <p className="pb-8">
            <span className="font-medium">{article.date}, </span>
            <span>by {article.author}</span>
          </p>
        </div>
        {article.image && (
          <div className="max-w-[945px] w-full mx-auto mt-6">
            <Image
              src={article.image}
              alt={article.tag}
              width={945}
              height={511}
              // style={{ objectFit: 'contain' }}
            />
          </div>
        )}
      </section>
      <section className="max-w-[750px] w-full mx-auto py-12 sm:py-24 px-8">
        <section>
          <p className="text-lg sm:text-2xl sm:leading-[34px] font-medium tracking-[-0.33px] pb-8 sm:pb-12">
            {article.summary}
          </p>
          <h2 className="headline-h4 sm:headline-h2 pb-6">
            {article.section1.title}
          </h2>
          <p className="text-lg pb-6">{article.section1.p1}</p>
          <p className="text-lg pb-4">{article.section1.p2}</p>
          <Divider />
          <p className="text-lg sm:text-2xl leading-[34px] font-medium tracking-[-0.33px] pb-6">
            {article.section1.quote.text}
          </p>
          <p className="font-medium text-gray-custom-300 pb-4">
            {article.section1.quote.author}
          </p>
          <Divider />
          {article.section1.image && (
            <div className="max-w-[748px] w-full mx-auto my-12 sm:my-16">
              <Image
                src={article.section1.image}
                alt={article.tag}
                width={748}
                height={405}
                // style={{ objectFit: 'contain' }}
              />
            </div>
          )}
        </section>
        <section>
          <h2 className="headline-h4 pb-4 sm:headline-h2">
            {article.section2.title}
          </h2>
          <p className="text-lg pb-8 sm:pb-16">{article.section2.intro}</p>
          <h4 className="headline-h4 text-2xl pb-6">
            {article.section2.subtitle}
          </h4>
          <p className="text-lg pb-6">{article.section2.p1}</p>
          <p className="text-lg pb-4">{article.section2.p2}</p>
        </section>
        <section>
          <Divider />
          <div className="flex flex-wrap justify-between items-center gap-4 pb-4">
            <Author {...article.creditsTo} />
            <ul className="flex gap-4">
              {article.creditsTo.socials.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Divider />
        </section>
      </section>
    </article>
  );
}
