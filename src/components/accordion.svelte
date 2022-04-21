<script lang="ts">
	import Caret from '$components/caret.svelte';
	import { slide } from 'svelte/transition';

	export let active: boolean;
	$: open = active;

	export let title: string;
	const toggle = () => (open = !open);
</script>

<button class:highlight={active} class="text-left flex gap-3 items-center" on:click={toggle}>
	<Caret --rotate={open ? '90deg' : '0deg'} />
	{title}
</button>
{#if open}
	<nav
		transition:slide={{ duration: 250 }}
		class="flex flex-col gap-3 pl-9 py-[6px] border-l border-[rgb(25,25,25)]"
	>
		<slot />
	</nav>
{/if}

<style>
	.highlight {
		@apply text-svelte-gradient font-bold;
	}
</style>
