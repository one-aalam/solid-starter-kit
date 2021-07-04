import { createResource } from 'solid-js';

const cache = {};

const get = (path) => cache[path] || (cache[path] = fetch(`https://mockend.com/one-aalam/solid-starter-kit/${path}`).then((r) => r.json()));

export function usePost(id) {
  return createResource(() => `posts/${id}`, get)[0];
}

export function usePosts(page = 1) {
    return createResource(() => `posts`, get)[0];
}
