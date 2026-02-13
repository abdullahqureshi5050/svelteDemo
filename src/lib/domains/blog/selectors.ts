import { blogState } from "./state.svelte";

export const blogTitle = () => blogState.post?.title ?? "";
export const blogContent = () => blogState.post?.content ?? "";
