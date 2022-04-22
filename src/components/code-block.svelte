<script lang="ts">
	import { onMount } from 'svelte';
	import HighlightSvelte from 'highlightjs-svelte';

	export let lang: string;
	export let code: string;

	let ref: HTMLElement;
	onMount(async () => {
		const { default: Highlight } = await import('highlight.js');
		HighlightSvelte(Highlight);

		Highlight.highlightElement(ref);
	});
</script>

<pre class="w-full !m-0 !py-0"><code class="language-{lang} rounded-[8px]" bind:this={ref}>{code}</code></pre>
