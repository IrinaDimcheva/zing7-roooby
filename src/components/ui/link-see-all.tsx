import Link from 'next/link';

export default function LinkSeeAll({ href = '' }) {
  return (
    <Link className="text-xl font-medium hover:underline" href={href}>
      See all <span className="text-accent-dark">{'>'}</span>
    </Link>
  );
}
