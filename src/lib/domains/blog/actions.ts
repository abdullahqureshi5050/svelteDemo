// mutations and update domain state.
import { blogState } from "./state.svelte";

const BLOG_RESPONSE = [
  {
    id: "1",
    title: "Blockchain",
    content: "<p>This is a Blockchain blog post.</p>",
    publishedAt: "2026-02-01"
  },
  {
    id: "2",
    title: "Domain-Driven State in Svelte",
    content: "<p>Svelte makes state modeling clean.</p>",
    publishedAt: "2026-02-05"
  },
  {
    id: "3",
    title: "Frontend",
    content: "<p>This is a Frontend blog post.</p>",
    publishedAt: "2026-02-03"
  },
];

function getBlogResponse() {
  return Promise.resolve(BLOG_RESPONSE);
}

export async function loadBlogPost(blogId: string) {
  if (blogState.currentId === blogId) return; // cache guard

  blogState.status = "loading";
  blogState.currentId = blogId;

   try {
    const posts = await getBlogResponse();
    const post = posts.find((p) => p.id === blogId);

    if (!post) throw new Error("Not found");

    blogState.post = post;
    blogState.status = "loaded";
  } catch {
    blogState.post = null;
    blogState.status = "error";
  }
}
