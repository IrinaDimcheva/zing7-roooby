import { permanentRedirect } from 'next/navigation';

export default function BlogPage() {
  permanentRedirect('/blog/all');
}
