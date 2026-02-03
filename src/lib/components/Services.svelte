<script lang="ts">
	const services = [
		{ title: 'AI', desc: 'ML, LLMs, automation & data intelligence' },
		{ title: 'Web', desc: 'Fast, scalable modern web apps' },
		{ title: 'Mobile', desc: 'iOS & Android apps with clean UX' },
		{ title: 'DevOps', desc: 'CI/CD, cloud & infrastructure automation' }
	];
</script>

<section id="services" class="py-24 bg-black text-white">
	<div class="max-w-7xl mx-auto px-6">
		<h2 class="text-4xl font-bold text-center">
			Our <span class="text-primary">Services</span>
		</h2>

		<div class="grid md:grid-cols-4 gap-8 mt-16">
			{#each services as s}
				<div class="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary transition">
					<h3 class="text-xl font-semibold">{s.title}</h3>
					<p class="mt-3 text-muted">{s.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
