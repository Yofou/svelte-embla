<script lang="ts">
	import ExampleBlock from '$components/example-block.svelte';
	import NavigationArrowDots from '$components/examples/navigation-arrow-dots.svelte';
	import NavigationThumbnails from '$components/examples/navigation-thumbnails.svelte';
	import GradientHr from '$components/gradient-hr.svelte';
</script>

<svelte:head>
	<title>Svelte Embla | Examples Navigation</title>
</svelte:head>

<section class="flex flex-col gap-6">
	<nav class="flex text-[0.875rem] gap-1 text-embla-grey items-center">
		<a href="/">Home</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<a href="/examples/">Examples</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<p>Navigation</p>
	</nav>

	<h1 class="text-3xl text-embla-white font-bold">Navigation</h1>
	<GradientHr />

	<p class="text-embla-white">
		Add navigation to your carousels by utilizing the Embla Carousel <a
			class="text-svelte-gradient font-bold selection:bg-inherit"
			href="https://www.embla-carousel.com/api/">API</a
		>.
	</p>
</section>

<section class="mt-6">
	<ExampleBlock title="Arrow & Dots" href="https://github.com/Yofou/svelte-embla/blob/main/src/components/examples/navigation-arrow-dots.svelte">
		<NavigationArrowDots />
	</ExampleBlock>
</section>

<section class="mt-6 mb-12">
	<ExampleBlock title="Thumbnails" href="https://github.com/Yofou/svelte-embla/blob/main/src/components/examples/navigation-thumbnails.svelte">
		<NavigationThumbnails />
	</ExampleBlock>
</section>
