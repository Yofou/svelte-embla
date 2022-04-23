<script lang="ts">
	import { onMount } from 'svelte';
	import HighlightSvelte from 'highlightjs-svelte';
	import bash from "highlight.js/lib/languages/bash"
	import xml from "highlight.js/lib/languages/xml"
	import javascript from "highlight.js/lib/languages/javascript"

	export let lang: string;
	export let code: string;

	let ref: HTMLElement;
	onMount(async () => {
		const { default: Highlight } = await import('highlight.js/lib/core');
		Highlight.registerLanguage("bash", bash)
		Highlight.registerLanguage("xml", xml)
		Highlight.registerLanguage("javascript", javascript)
		HighlightSvelte(Highlight);

		Highlight.highlightElement(ref);
	});
</script>

<pre class="w-full !m-0 !py-0"><code class="language-{lang} rounded-[8px]" bind:this={ref}>{code}</code></pre>
