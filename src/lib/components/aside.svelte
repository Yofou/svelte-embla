<script>
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import Caret from './caret.svelte';

	$: showExamples = $page.url.pathname.includes('/examples');
	const toggleExamples = () => (showExamples = !showExamples);
</script>

<aside class="flex flex-col gap-3 text-embla-white">
	<a class="flex gap-3 items-center" class:on-page={$page.url.pathname === '/'} href="/">
		<Caret />
		Get Started
	</a>
	<button
		class:on-page={$page.url.pathname.includes('/examples')}
		class="text-left flex gap-3 items-center"
		on:click={toggleExamples}
	>
		<Caret --rotate={showExamples ? '90deg' : '0deg'} />
		Examples
	</button>
	{#if showExamples}
		<nav
			transition:slide={{ duration: 250 }}
			class="flex flex-col gap-3 pl-9 py-[6px] border-l border-[rgb(25,25,25)]"
		>
			<a class:on-page={$page.url.pathname === '/examples'} href="/examples/">Overview</a>
			<a class:on-page={$page.url.pathname === '/examples/basics'} href="/examples/basics">Basics</a
			>
			<a class:on-page={$page.url.pathname === '/examples/navigation'} href="/examples/navigation"
				>Navigation</a
			>
		</nav>
	{/if}
	<a href="https://www.npmjs.com/package/svelte-embla" class="flex gap-2 items-center !font-normal">
		<img class="w-4 h-4" src="/npm.svg" alt="" />
		Npm
	</a>
	<a href="https://github.com/Yofou/svelte-embla" class="flex gap-2 items-center !font-normal">
		<img class="w-4 h-4" src="/github.svg" alt="" />
		Github
	</a>
</aside>

<style>
	a {
		@apply font-bold text-[rgb(202,202,202)];
	}

	.on-page {
		@apply text-svelte-gradient font-semibold;
	}
</style>
