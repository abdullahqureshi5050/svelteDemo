<script lang="ts">
	import { auth } from '$lib/stores/auth';
	import { goto } from '$app/navigation';

	async function logout() {
		try {
			const res = await fetch('/auth/logout', { method: 'POST' });

			if (res.redirected) {
				auth.set({ isAdmin: false });
				goto(res.url); // navigate to login
			}
		} catch (err) {
			console.error(err);
		}
	}
</script>

<div class="flex min-h-screen bg-black">
	<!-- Sidebar -->
	<aside class="w-64 border-r border-purple-500/30 bg-zinc-900 p-4">
		<h1 class=" mb-8 text-xl font-bold">ILI Admin</h1>

		<nav class="space-y-3">
			<a href="/dashboard" class="block text-gray-300 hover:text-purple-400"> Dashboard </a>
			<a href="#" class="block text-gray-300 hover:text-purple-400"> Projects </a>
			<a href="#" class="block text-gray-300 hover:text-purple-400"> Users </a>
		</nav>

		<button on:click={logout} class="mt-10 text-sm text-red-400 hover:text-red-300">
			Logout
		</button>
	</aside>

	<!-- Main Content -->
	<main class="flex-1 p-8">
		<slot />
	</main>
</div>
