<script lang="ts">
	  export let data: {
	    user: { name: string; address: string; phone: string } | null;
	    stats: { label: string; value: number }[];
	    services: string[];
	  };
	// let { data } = $props();
	// console.log(data)
</script>

<h2 class="mb-6 text-3xl font-bold">Dashboard</h2>

{#if data.user}
	<div class="mb-6 text-gray-300">
		<p><strong>Name:</strong> {data.user.name}</p>
		<p><strong>Address:</strong> {data.user.address}</p>
		<p><strong>Phone:</strong> {data.user.phone}</p>
	</div>
{/if}

<!-- Stats -->
<div class="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
	{#each data.stats as stat}
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
		{#each data.services as service}
			<li>• {service}</li>
		{/each}
	</ul>
</div>
