<script>
	import CodeBlock from "$components/code-block.svelte";
	import GuideOptions from "$components/examples/guide-options";
	import GradientHr from "$components/gradient-hr.svelte";
</script>

<svelte:head>
	<title>Svelte Embla | Guides Options</title>
</svelte:head>

<section class="flex flex-col gap-6">
	<nav class="flex text-[0.875rem] gap-1 text-embla-grey items-center">
		<a href="/">Home</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<a href="/guides/">Guides</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<p>Options</p>
	</nav>

	<h1 class="text-3xl text-embla-white font-bold">Options</h1>
	<GradientHr />

	<p class="text-embla-white">
		You can pass <a href="https://www.embla-carousel.com/api/options/#axis">Embla options</a> 
		object through the <a href="https://svelte.dev/tutorial/adding-parameters-to-actions">action params</a> with some very minor
		additions that you can find through the rest of this guide.
	</p>
</section>

<section class="mt-6 mb-12">
	<CodeBlock lang="svelte" code={GuideOptions} />
</section>

<style>
	p > a {
		@apply text-svelte-gradient font-bold;
	}

	p > a::selection {
		@apply bg-inherit;
	}
</style>
