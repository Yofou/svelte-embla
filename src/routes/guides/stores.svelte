<script>
	import CodeBlock from "$components/code-block.svelte";
	import GuideStores from "$components/examples/guide-stores";
	import GradientHr from "$components/gradient-hr.svelte";
</script>

<svelte:head>
	<title>Svelte Embla | Guides Stores</title>
</svelte:head>

<section class="flex flex-col gap-6">
	<nav class="flex text-[0.875rem] gap-1 text-embla-grey items-center">
		<a href="/">Home</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<a href="/guides/">Guides</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<p>Stores</p>
	</nav>

	<h1 class="text-3xl text-embla-white font-bold">Stores</h1>
	<GradientHr />

	<p class="text-embla-white">
		Due to the limitaitons of svelte actions there is no good way for me to expose
		the Embla instance outside of the action itself, which would be good for cases like 
		<a class="font-bold text-svelte-gradient selection:bg-inherit" href="/examples/navigation">Navigations</a>.

		one approach I took was to use Svelte stores to emit up the instance to your component/page
		like so...
	</p>
</section>

<section class="mt-6 mb-12">
	<CodeBlock lang="svelte" code={GuideStores} />
</section>
