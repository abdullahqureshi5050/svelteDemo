// src/routes/(admin)/dashboard/+page.ts
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch('/dashboard');
  if (res.ok) {
    const data = await res.json();
    return { stats: data.stats, services: data.services };
  } else {
    return { stats: [], services: [] }; // fallback on error
  }
};
