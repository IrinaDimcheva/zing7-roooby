import { api_url } from '@/config/constants';

export async function getPhotos(start = 0, limit = 50) {
  const response = await fetch(
    `${api_url}/photos?_start=${start}&_limit=${limit}`
  );
  const data = (await response?.json()) as JSONPlaceholder.Photo[];
  return data;
}

export async function getPhoto(id: string | number) {
  const response = await fetch(`${api_url}/photos/${id}`);
  const data = (await response?.json()) as JSONPlaceholder.Photo;
  return data;
}
