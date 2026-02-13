// src/routes/(admin)/dashboard/+page.server.ts
import type { PageServerLoad } from './$types';

// export const load: PageServerLoad = async ({ fetch }) => {
//   try {
//     const user = {
//       name: 'Abdullah Qureshi',
//       address: '123 Main Street Gulberg, Lahore, Pakistan',
//       phone: '+92 300 1234567'
//     };

//     const dashboardRes = await fetch('/dashboard'); // calls +server.ts GET
//     const dashboardData = dashboardRes.ok
//       ? await dashboardRes.json()
//       : { stats: [], services: [] };

//     return {
//         stats: dashboardData.stats,
//         services: dashboardData.services,
//         user
//     };
//   } catch (err) {
//     console.error('Error in page server load:', err);
//     return { user: null, stats: [], services: [] };
//   }
// };

export const load: PageServerLoad = async ({ fetch }) => {
  // Fast data
  const user = {
    name: 'Abdullah Qureshi',
    address: '123 Main St',
    phone: '+92 300 1234567'
  };

  // Slow data simulation
  const dashboardPromise = new Promise<{ stats: any[]; services: string[] }>((resolve) =>
    setTimeout(() => {
      resolve({
        stats: [
          { label: 'Projects', value: 212 },
          { label: 'Clients', value: 8 },
          { label: 'Deployments', value: 34 },
          { label: 'AI Models', value: 5 }
        ],
        services: ['AI Solutions', 'Web Development', 'Mobile Apps']
      });
    }, 2000) 
  );

  return {
    user,
    dashboard: dashboardPromise
  };
};
