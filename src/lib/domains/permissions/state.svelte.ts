import { auth } from "$lib/stores/auth";
import { get } from "svelte/store";

const _role = $derived(() => {
  return get(auth).isAdmin;
});

export function role() {
  // return _role;
  return get(auth).isAdmin;
}
