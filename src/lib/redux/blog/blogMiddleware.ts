// src/lib/redux/blogMiddleware.ts
import type { Middleware } from '@reduxjs/toolkit';
import { loadBlogFromApi } from './blogActions';
import { loading, loaded, error } from './blogSlice';

type FakeResponse<T> = {
  ok: boolean;
  json: () => Promise<T>;
};

type ApiData = {
  id: string,
  title: string,
  content: string
};

const fakeData = {
  id: '1',
  title: 'Fake blog title',
  content: 'Fake blog content'
};

export const blogMiddleware: Middleware = (store) => (next) => async (action) => {
  if (loadBlogFromApi.match(action)) {
    try {
      store.dispatch(loading());

      // const res = await fetch(`/api/blog/${action.payload}`);
      const res: FakeResponse<ApiData> =
        await new Promise<FakeResponse<ApiData>>((resolve) => {
          setTimeout(() => {
            resolve({
              ok: true,
              json: async () => fakeData
            });
          }, 3000);
        });

      if (!res.ok) throw new Error('Failed');

      const data = await res.json();

      store.dispatch(
        loaded({
          id: data.id,
          title: data.title,
          content: data.content
        })
      );
    } catch {
      store.dispatch(error());
    }
  }

  return next(action);
};
