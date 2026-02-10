import type { RequestEvent } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

const ACCESS_SECRET = 'ACCESS_SECRET_KEY';
const REFRESH_SECRET = 'REFRESH_SECRET_KEY';

enum UserRoles {
  ADMIN = "admin",
  USER = "user"
}

export const POST = async (event: RequestEvent) => {
  const { username, password } = await event.request.json();

  if (username === 'admin' && password === 'admin') {
    // Create tokens
    const accessToken = jwt.sign({ username, role: UserRoles.ADMIN }, ACCESS_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ username, role: UserRoles.USER }, REFRESH_SECRET, { expiresIn: '7d' });

    // Set cookies
    event.cookies.set('access-token', accessToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 15 * 60 // 15 minutes
    });

    event.cookies.set('refresh-token', refreshToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });

    return new Response(JSON.stringify({ success: true, message: 'Login successful' }), {
      status: 200
    });
  }

  return new Response(JSON.stringify({ success: false, message: 'Invalid username or password' }), {
    status: 401
  });
};
