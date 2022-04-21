<script>
	import GradientHr from "$components/gradient-hr.svelte";
</script>

<svelte:head>
	<title>Svelte Embla | Guides Overview</title>
</svelte:head>

<section class="flex flex-col gap-6 border-b border-b-embla-textBody/10 pb-6">
	<nav class="flex text-[0.875rem] gap-1 text-embla-grey items-center">
		<a href="/">Home</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<p>Guides</p>
	</nav>

	<h1 class="text-3xl text-embla-white font-bold">Overview</h1>
	<GradientHr />

	<p class="text-embla-white">
		Svelte-Embla is just an action wrapper for Embla-Carousel therefore
		you should refer to there <a href="https://www.embla-carousel.com/guides/">Guides</a> 
		too as any skills/knowledge from their will also traverse over to here. However I have changed very minor things
		with how you interface with Embla to suit towards more of Sveltier experience. 
	</p>
</section>

<section class="text-embla-white flex flex-col gap-6 mt-12 mb-6">
	<h1 class="text-2xl font-bold">Pick your guide</h1>
	<p>Learn more about how to use Embla-Svelte:</p>

	<ul class="list-disc list-inside flex flex-col gap-4 ml-5">
		<li>
			<a href="/guides/actions">Actions</a>
		</li>
		<li>
			<a href="/guides/stores">Stores</a>
		</li>
		<li>
			<a href="/guides/plugins">Plugins</a>
		</li>
	</ul>
</section>

<style>
	li > a, p > a {
		@apply text-svelte-gradient font-semibold;
	}
</style>
