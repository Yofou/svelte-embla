<script>
	import CodeBlock from '$components/code-block.svelte';
	import Overview1 from '$components/examples/overview-1.svelte';
	import Overview2 from '$components/examples/overview-2.svelte';
	import GradientHr from '$components/gradient-hr.svelte';

	import 'highlight.js/styles/tokyo-night-dark.css';
</script>

<svelte:head>
	<title>Svelte Embla</title>
</svelte:head>

<section class="flex flex-col gap-6 border-b border-b-embla-textBody/10 pb-6">
	<small class="text-embla-lowContrast text-[0.875rem]">Home</small>

	<h1 class="font-bold text-3xl text-embla-white">Getting Started</h1>
	<GradientHr />

	<p class="text-embla-white leading-[1.65] font-normal">
		Svelte Embla is a Svelte Action Wrapper for <a
			class="font-semibold text-svelte-gradient"
			href="https://www.embla-carousel.com/">Embla Carousel</a
		>
		which allows you to easily integrate any kind of carousel to your heart disires using Embla Carousel
		in a Svelte project.
	</p>
</section>

<section class="flex flex-col gap-6 my-6">
	<h1 class="text-embla-white font-bold text-2xl -mb-2">Installation</h1>
	<CodeBlock lang="bash" code={Overview1} />

	<h1 class="text-embla-white font-bold text-2xl -mb-2">The component structure</h1>
	<CodeBlock lang="svelte" code={Overview2} />
</section>
