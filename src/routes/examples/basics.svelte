<script>
	import ExampleBlock from '$components/example-block.svelte';
	import BasicDefault from '$components/examples/basic-default.svelte';
	import BasicDragFree from '$components/examples/basic-drag-free.svelte';
	import BasicLoop from '$components/examples/basic-loop.svelte';
	import BasicSlidesToScroll from '$components/examples/basic-slides-to-scroll.svelte';
	import BasicAlign from '$components/examples/basic-align.svelte';
	import GradientHr from '$components/gradient-hr.svelte';
	import BasicYAxis from '$components/examples/basic-y-axis.svelte';
</script>

<svelte:head>
	<title>Svelte Embla | Examples Basics</title>
</svelte:head>

<section class="flex flex-col gap-6">
	<nav class="flex text-[0.875rem] gap-1 text-embla-grey items-center">
		<a href="/">Home</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<a href="/examples/">Examples</a>
		<img class="w-[6px] h-[6px]" src="/breadcrumb.svg" alt=">" />
		<p>Basic</p>
	</nav>

	<h1 class="text-3xl text-embla-white font-bold">Basic Examples</h1>
	<GradientHr />

	<p class="text-embla-white">
		Basic carousel setups that require minimal effort to get started with.
	</p>
</section>

<section class="mt-6">
	<ExampleBlock
		title="Default"
		href="https://github.com/Yofou/svelte-embla/tree/main/src/components/examples/basic-default.svelte"
	>
		<BasicDefault />
	</ExampleBlock>
</section>

<section class="mt-6">
	<ExampleBlock
		title="Loop"
		href="https://github.com/Yofou/svelte-embla/tree/main/src/components/examples/basic-loop.svelte"
	>
		<BasicLoop />
	</ExampleBlock>
</section>

<section class="mt-6">
	<ExampleBlock
		title="Slides To Scroll"
		href="https://github.com/Yofou/svelte-embla/tree/main/src/components/examples/basic-slides-to-scroll.svelte"
	>
		<BasicSlidesToScroll />
	</ExampleBlock>
</section>

<section class="mt-6">
	<ExampleBlock
		title="Drag Free"
		href="https://github.com/Yofou/svelte-embla/tree/main/src/components/examples/basic-drag-free.svelte"
	>
		<BasicDragFree />
	</ExampleBlock>
</section>

<section class="mt-6">
	<ExampleBlock
		title="Align"
		href="https://github.com/Yofou/svelte-embla/tree/main/src/components/examples/basic-align.svelte"
	>
		<BasicAlign />
	</ExampleBlock>
</section>

<section class="mt-6 mb-12">
	<ExampleBlock
		title="Y-axis"
		href="https://github.com/Yofou/svelte-embla/tree/main/src/components/examples/basic-y-axis.svelte"
	>
		<BasicYAxis />
	</ExampleBlock>
</section>
