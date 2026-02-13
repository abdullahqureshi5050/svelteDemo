export type BlogPost = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
};

export const blogState = $state({
  currentId: null as string | null,
  post: null as BlogPost | null,
  status: "idle" as "idle" | "loading" | "loaded" | "error"
});

const _hasPost = $derived(() => blogState.post !== null);

export function hasPost() {
  return _hasPost;
}
