import ResultItem from './result-item';

export default function Results() {
  const results = [
    {
      title: '$2.5 M',
      subTitle: 'Generate sales',
      description:
        'Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.',
      author: {
        image: '/images/nellie-foster.png',
        name: 'Nellie Foster',
        position: 'Founder & CEO, Foster Business Strategies',
      },
    },
    {
      title: '45%',
      subTitle: 'Grew revenue',
      description:
        'Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.',
      author: {
        image: '/images/lawrence-gibbs.png',
        name: 'Lawrence Gibbs',
        position: 'Marketing Director',
      },
    },
  ];

  return (
    <section className="max-w-screen-wide mx-auto px-4 py-24 lg:py-32">
      <h3 className="text-5xl leading-[68px] tracking[-0.67px] font-bold pb-2">
        Real-life results and revenue
      </h3>
      <p className="text-lg text-gray-custom-600 pb-10">
        See how companies like yours have smashed their sales success goals
      </p>
      <ul>
        {results.map((item) => (
          <ResultItem key={item.author.name} {...item} />
        ))}
      </ul>
    </section>
  );
}
