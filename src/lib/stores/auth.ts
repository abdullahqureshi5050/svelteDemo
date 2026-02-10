import { writable } from 'svelte/store';

export const auth = writable({
  isAdmin: false
});
