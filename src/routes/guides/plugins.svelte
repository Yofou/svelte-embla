<script>
	import CodeBlock from "$components/code-block.svelte";
	import GuidePlugins from "$components/examples/guide-plugins";
	import GradientHr from "$components/gradient-hr.svelte";
</script>

<svelte:head>
	<title>Svelte Embla | Guides Plugins</title>
</svelte:head>

<section class="flex flex-col gap-6">
	<nav class="flex text-[0.875rem] gap-1 text-embla-grey items-center">
		<a href="/">Home</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<a href="/guides/">Guides</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<p>Plugins</p>
	</nav>

	<h1 class="text-3xl text-embla-white font-bold">Plugins</h1>
	<GradientHr />

	<p class="text-embla-white">
		Svelte-Embla is just an action wrapper for Embla-Carousel and because of that
		there is no reason why you could not use Embla-Carousel 
		<a class="text-svelte-gradient font-bold selection:bg-inherit" href="https://www.embla-carousel.com/plugins/">Plugins</a>. 
		the only minor difference is where you place them, there is now a <span class="bg-gray-900 p-1 rounded-md inline">plugins</span> option on the action that functions
		the same as the plugins parameter in Embla-Carousel.
	</p>
</section>

<section class="mt-6 mb-12">
	<CodeBlock lang="svelte" code={GuidePlugins} />
</section>
