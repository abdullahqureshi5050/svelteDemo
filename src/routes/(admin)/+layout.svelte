<script lang="ts">
	import '../../styles/theme-admin.css';
	let { children } = $props();
</script>

<main class="bg-dark"
style="color: var(--text-color)"
>
	{@render children()}
</main>
