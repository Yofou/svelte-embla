<script>
	import GradientHr from "$components/gradient-hr.svelte";
	import CodeBlock from "$components/code-block.svelte";
	import EventExample from "$components/examples/guide-events";
</script>

<svelte:head>
	<title>Svelte Embla | Guides Events</title>
</svelte:head>

<section class="flex flex-col gap-6">
	<nav class="flex text-[0.875rem] gap-1 text-embla-grey items-center">
		<a href="/">Home</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<a href="/guides/">Guides</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<p>Events</p>
	</nav>

	<h1 class="text-3xl text-embla-white font-bold">Events</h1>
	<GradientHr />

	<p class="text-embla-white">
		Events in Embla are usually handled by the <span class="block">.on()</span>
		function, however in Svelte-Embla I dispatch and destroy these events
		to the element automatically with the sveltes action life-cycle hooks, meaning
		you can assign any of the embla event function in a normal svelte like manor, however due to conflicting
		event names I have prefixed <span class="font-bold text-white">all</span> of the <a href="https://www.embla-carousel.com/api/events/#init">Embla Events</a> with <span class="block">e-</span>
		so for like example the event select has now become <span class="block">e-select</span>. 
	</p>

	<p class="text-embla-white">Here is an example:</p>
</section>

<section class="mt-6 mb-12">
	<CodeBlock lang="svelte" code={EventExample} />
</section>

<style>
	.block {
		@apply bg-gray-900 p-1 rounded-md inline;
	}

	p > a {
		@apply font-bold text-svelte-gradient;
	}
	
	p > a::selection {
		@apply bg-inherit;
	}
</style>
