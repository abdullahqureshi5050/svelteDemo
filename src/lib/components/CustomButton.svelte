<script lang="ts">
	let { title } = $props();
	import { createEventDispatcher } from 'svelte';
	// store.ts
	import { writable } from 'svelte/store';

	type Events = {
		customClick: { msg: string }; // event name → payload type
	};
	export const user = writable({ name: 'Abdullah', role: 'admin' });

	const dispatch = createEventDispatcher<Events>();

	function handleClick() {
		dispatch('customClick', { msg: 'Hello from child' });
	}
</script>

<div style:background-color="red">
	{title}
	<button on:click={handleClick}>Click dispatch</button>
	<slot></slot>
</div>
