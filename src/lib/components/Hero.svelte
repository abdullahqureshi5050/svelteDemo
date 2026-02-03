<script lang="ts">
	import logo from '$lib/assets/logo.jpg';
</script>

<section class="min-h-screen flex items-center bg-light">
	<div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
		
		<!-- Left -->
		<div>
			<h1 class="text-5xl font-bold leading-tight">
				<span class="text-primary">ILI Digital</span><br />
				Engineering Intelligent Software
			</h1>

			<p class="mt-6 text-lg text-muted">
				We build AI-powered digital products with modern engineering and DevOps excellence.
			</p>

			<div class="mt-8 flex gap-4">
				<a href="#contact" class="bg-primary text-white px-6 py-3 rounded-lg font-semibold">
					Start a Project
				</a>
				<a href="#services" class="border border-dark px-6 py-3 rounded-lg font-semibold">
					Our Services
				</a>
			</div>
		</div>

		<!-- Right (Image) -->
		<div class="flex items-center justify-center">
			<img
				src={logo}
				alt="ILI Digital Logo"
				class="w-full max-w-xl md:max-w-2xl rounded-2xl object-contain shadow-lg"
			/>
		</div>

	</div>
</section>
