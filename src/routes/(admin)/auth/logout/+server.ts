// src/routes/logout/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const POST: RequestHandler = ({ cookies }) => {
  // Delete tokens
  cookies.delete('access-token', { path: '/' });
  cookies.delete('refresh-token', { path: '/' });

  // Redirect to login page
  throw redirect(303, '/login');
};
