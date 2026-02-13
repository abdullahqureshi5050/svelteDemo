<script lang="ts">
	// src/routes/(admin)/login/+page.sevelte
	import { goto } from '$app/navigation';
	import { auth } from '$lib/stores/auth';

	let username = '';
	let password = '';
	let error = '';

	async function login() {
		error = '';

		try {
			const res = await fetch('/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password })
			});

			const data = await res.json();
			auth.set({
				isAdmin: true
			});

			if (res.ok && data.success) {
				alert(data?.message);
				goto('/dashboard');
			} else {
				error = 'Invalid credentials';
			}
		} catch (e) {
			console.error(e);
			error = 'Server error';
		}
	}
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="w-full max-w-sm rounded-xl border p-6 shadow">
		<h2 class="mb-4 text-2xl font-bold">Admin Login</h2>

		<input placeholder="Username" bind:value={username} class="mb-3 w-full rounded border p-2" />

		<input
			type="password"
			placeholder="Password"
			bind:value={password}
			class="mb-3 w-full rounded border p-2"
		/>

		{#if error}
			<p class="mb-2 text-red-500">{error}</p>
		{/if}

		<button on:click={login} class="w-full rounded bg-orange-500 p-2 text-white"> Login </button>
	</div>
</div>
