import Divider from '@/components/ui/divider';
import Image from 'next/image';

interface IArticle {
  id: number;
  tag?: string;
  title: string;
  body: string;
  author?: JSONPlaceholder.User;
  image?: JSONPlaceholder.Photo;
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
            <span className="font-medium">{new Date().toDateString()}, </span>
            <span>by {article.author?.name}</span>
          </p>
        </div>
        {article.image && (
          <div className="max-w-[945px] w-full mx-auto mt-6">
            <Image
              src={article.image.url}
              alt={article.image.title}
              width={945}
              height={511}
            />
          </div>
        )}
      </section>
      <section className="max-w-[750px] w-full mx-auto py-12 sm:py-24 px-8">
        <section>
          <p className="text-lg sm:text-2xl sm:leading-[34px] font-medium tracking-[-0.33px] pb-8 sm:pb-12">
            {article.body}
          </p>
        </section>
      </section>
    </article>
  );
}
