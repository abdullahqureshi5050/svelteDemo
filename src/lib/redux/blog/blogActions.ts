// src/lib/redux/blogActions.ts
import { createAction } from '@reduxjs/toolkit';

export const loadBlogFromApi = createAction<string>('blog/loadFromApi');
