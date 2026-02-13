//src/lib/redux/svelteStore.ts
import { readable } from "svelte/store";
import type { RootState } from "./store";
import { store } from "./store";

export const reduxState = readable<RootState>(
  store.getState(),
  (set) => {
    const unsubscribe = store.subscribe(() => {
      set(store.getState());
    });
    return unsubscribe;
  }
);
