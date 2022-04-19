<script>
	import ExampleBlock from "$components/example-block.svelte";
	import BasicExample1 from "$components/examples/basic-example-1.svelte";
	import GradientHr from "$components/gradient-hr.svelte";
</script>

<svelte:head>
	<title>Svelte Embla | Examples Basics</title>
</svelte:head>

<section class="flex flex-col gap-6">
	<nav class="flex text-[0.875rem] gap-1 text-embla-grey">
		<a href="/">Home</a>
		>
		<a href="/examples/">Examples</a>
		>
		<p>Basic</p>
	</nav>

	<h1 class="text-3xl text-embla-white font-bold">Basic Examples</h1>
	<GradientHr />

	<p class="text-embla-white">Basic carousel setups that require minimal effort to get started with.</p>
</section>

<section class="mt-6">
	<ExampleBlock title="Default" href="/">
		<BasicExample1 />
	</ExampleBlock>
</section>
