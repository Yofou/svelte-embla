<script lang="ts">
	import GradientHr from '$components/gradient-hr.svelte';
</script>

<svelte:head>
	<title>Svelte Embla | Examples Overview</title>
</svelte:head>

<section class="flex flex-col gap-6 border-b border-b-embla-textBody/10 pb-6">
	<nav class="flex text-[0.875rem] gap-1 text-embla-grey items-center">
		<a href="/">Home</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<p>Examples</p>
	</nav>

	<h1 class="text-3xl text-embla-white font-bold">Overview</h1>
	<GradientHr />

	<p class="text-embla-white">
		Here are all the examples from <a
			
			href="https://www.embla-carousel.com">Embla Carousel</a
		>
		in Svelte Embla. from basic to more advanced examples. All examples are within my
		<a href="https://github.com/Yofou/svelte-embla"
			>Github Repository</a
		>.
	</p>
</section>

<section class="text-embla-white flex flex-col gap-6 mt-12">
	<h1 class="text-2xl font-bold">Choose type of example</h1>
	<p>Choose what type of examples you would like to browse:</p>

	<ul class="list-disc list-inside flex flex-col gap-4 ml-5">
		<li>
			<a href="/examples/basics">Basics</a>
		</li>
		<li>
			<a href="/examples/navigation">Navigation</a>
		</li>
	</ul>
</section>

<style>
	li > a, p > a {
		@apply text-svelte-gradient font-semibold;
	}
</style>
