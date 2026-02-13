<script lang="ts">
	import { page } from '$app/state';
	import { loadBlogPost, blogState, type BlogPost } from '$lib/domains/blog';
	import { canUpdateBlog } from '$lib/domains/permissions';
	import { loading, loaded, error } from '$lib/redux/blog/blogSlice';
	import { store } from '$lib/redux/store';
	import { reduxState } from '$lib/redux/svelteStore';
	import { get } from 'svelte/store';

	// Load blog post when blogId changes
	$effect(() => {
		page.params.blogId && loadBlogPost(page.params.blogId);
	});

// State for new blog form
let newTitle = '';
let newContent = '';

// const state = $derived.by(() => {
// 	return get(reduxState);
// });

const state = $derived(() => $reduxState);

$effect(()=>{
	console.log($reduxState.blog.status);
	console.log($reduxState.blog.post?.title);
})

function updateBlogState() {
	if (!canUpdateBlog()) return;

	const newBlog: BlogPost = {
		id: Math.random().toString(36).slice(2),
		title: newTitle,
		content: newContent,
		publishedAt: new Date().toISOString().split('T')[0]
	};

	blogState.post = newBlog;
	blogState.status = 'loaded';
}

	const updateBlogPost = () => {
    console.info("ewrrrwr",newTitle)
		store.dispatch(
			loaded({
				id: '1',
				title: newTitle,
				content: newContent
			})
		);
	};
</script>

<h1>From Redux</h1>
	<article class="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
		<h1 class="mb-4 text-3xl font-bold text-gray-800">{$reduxState.blog.post?.title}</h1>
		<div class="prose max-w-full text-gray-700">{$reduxState.blog.post?.content}</div>
	</article>
  <h1>From Domain-Driven State Design</h1>

{#if blogState.status === 'loading'}
	<p class="text-gray-500 italic">Loading…</p>
{:else if blogState.status === 'error'}
	<p class="font-semibold text-red-500">Blog not found</p> 
{:else if blogState.post}
	<article class="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
		<h1 class="mb-4 text-3xl font-bold text-gray-800">{blogState.post?.title}</h1>
		<div class="prose max-w-full text-gray-700">{blogState.post?.content}</div>
	</article>
{/if}

<!-- Update Blog Form for Admin -->
{#if canUpdateBlog()}
	<section class="rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-inner">
		<h2 class="mb-4 text-2xl font-semibold text-gray-800">Update Blog</h2>
		<input
			type="text"
			placeholder="Title"
			bind:value={newTitle}
			class="mb-4 w-full rounded-md border border-gray-300 p-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
		/>
		<textarea
			placeholder="Content (HTML allowed)"
			bind:value={newContent}
			rows={6}
			class="mb-4 w-full rounded-md border border-gray-300 p-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 focus:outline-none"
		></textarea>
		<button
			on:click={// updateBlogState
			updateBlogPost}
			class="rounded-md bg-black px-6 py-3 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-black"
		>
			Update Blog State From Redux
		</button>
    <button
			on:click={// updateBlogState
			updateBlogPost}
			class="rounded-md bg-black px-6 py-3 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-black"
		>
			Update Blog State From Domain Driven State
		</button>
	</section>
{/if}
