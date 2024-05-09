import { api_url } from '@/config/constants';

export async function getUsers() {
  const response = await fetch(`${api_url}/users`);
  const data = (await response?.json()) as JSONPlaceholder.User[];
  return data;
}

export async function getUser(id: string | number) {
  const response = await fetch(`${api_url}/users/${id}`);
  const data = (await response?.json()) as JSONPlaceholder.User;
  return data;
}
