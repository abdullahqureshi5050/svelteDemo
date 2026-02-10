// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

// JWT secrets
const ACCESS_SECRET = 'ACCESS_SECRET_KEY';
const REFRESH_SECRET = 'REFRESH_SECRET_KEY';

// Routes
const PUBLIC_ROUTES = ['/login', '/']; // anyone can access
const ADMIN_ROUTES = ['/dashboard'];   // admin-only routes

export const handle: Handle = async ({ event, resolve }) => {
  const accessToken = event.cookies.get('access-token');
  let user: { username: string; role: string } | null = null;

  // verify token
  if (accessToken) {
    try {
      user = jwt.verify(accessToken, ACCESS_SECRET) as { username: string; role: string };
    } catch (err) {
      user = null; // expired or invalid
    }
  }

  // If no valid access-token, try refresh-token
  if (!user) {
    const refreshToken = event.cookies.get('refresh-token');
    if (refreshToken) {
      try {
        // Verify refresh-token
        user = jwt.verify(refreshToken, REFRESH_SECRET) as { username: string; role: string };

        // Issue new access-token
        const newAccessToken = jwt.sign(
          { username: user.username, role: user.role },
          ACCESS_SECRET,
          { expiresIn: '15m' }
        );

        // Set new access-token cookie
        event.cookies.set('access-token', newAccessToken, {
          path: '/',
          httpOnly: true,
          sameSite: 'strict',
          maxAge: 15 * 60 // 15 minutes
        });

        event.locals.user = user;
      } catch {
        user = null; // refresh-token invalid
      }
    }
  }

  // 4️⃣ Store user in locals for pages/APIs
  event.locals.user = user;

  const path = event.url.pathname;

  // 5️⃣ Public routes → allow everyone
  if (PUBLIC_ROUTES.includes(path)) {
    return resolve(event);
  }

  // 6️⃣ Admin routes → must be logged in
  if (ADMIN_ROUTES.some(route => path.startsWith(route))) {
    if (!user) {
      throw redirect(303, '/login');
    }
    if (path.startsWith('/admin') && user.role !== 'admin') {
      throw redirect(303, '/dashboard'); // not admin
    }
  }

  // 7️⃣ All other routes → require login
  if (!user) {
    throw redirect(303, '/login');
  }

  // 8️⃣ Resolve the request
  return resolve(event);
};
