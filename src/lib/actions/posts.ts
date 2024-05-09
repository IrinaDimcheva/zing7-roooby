import { api_url } from '@/config/constants';

export async function getPosts(start = 0, limit = 50) {
  const response = await fetch(
    `${api_url}/posts?_start=${start}&_limit=${limit}`
  );
  const data = (await response.json()) as JSONPlaceholder.Post[];
  return data;
}

export async function getPost(id: string) {
  const response = await fetch(`${api_url}/posts/${id}`);
  const data = (await response?.json()) as JSONPlaceholder.Post;
  return data;
}
