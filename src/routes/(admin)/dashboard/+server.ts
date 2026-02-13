import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  try {
    const stats = [
      { label: 'Projects', value: 212 },
      { label: 'Clients', value: 8 },
      { label: 'Deployments', value: 34 },
      { label: 'AI Models', value: 5 }
    ];

    const services = ['AI Solutions', 'Web Development', 'Mobile Apps', 'DevOps & Cloud'];

    return new Response(JSON.stringify({ stats, services }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ stats: [], services: [] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
