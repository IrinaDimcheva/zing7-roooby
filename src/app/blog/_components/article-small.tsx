import Divider from '@/components/ui/divider';

function ArticleSmall({ title, date, author, tag }) {
  return (
    <li>
      <Divider />
      <h4 className="text-2xl lg:text-3xl tracking-[-0.44px] font-bold py-4">
        {title}
      </h4>
      <p>
        <span className="font-medium">{date}, </span>
        <span>by {author}</span>
      </p>
      <p className="text-gray-custom-300 text-sm font-bold uppercase pb-4">
        {tag}
      </p>
    </li>
  );
}

export default ArticleSmall;
