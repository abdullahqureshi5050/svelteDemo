<script lang="ts">
	const stats = [
		{ label: 'Projects', value: 12 },
		{ label: 'Clients', value: 8 },
		{ label: 'Deployments', value: 34 },
		{ label: 'AI Models', value: 5 }
	];

	const services = ['AI Solutions', 'Web Development', 'Mobile Apps', 'DevOps & Cloud'];
</script>

<h2 class="font-bol mb-6 text-3xl">Dashboard</h2>

<!-- Stats -->
<div class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
	{#each stats as stat}
		<div class="rounded-xl border border-purple-500/20 bg-zinc-900 p-5">
			<p class="text-sm text-gray-400">{stat.label}</p>
			<p class="mt-1 text-2xl font-bold">{stat.value}</p>
		</div>
	{/each}
</div>

<!-- Services -->
<div class="rounded-xl border border-purple-500/20 bg-zinc-900 p-6">
	<h3 class="mb-4 text-xl font-semibold">Services Offered</h3>

	<ul class="space-y-2 text-gray-300">
		{#each services as service}
			<li>• {service}</li>
		{/each}
	</ul>
</div>
