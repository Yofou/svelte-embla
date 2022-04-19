<script lang="ts">
	import { onMount } from "svelte";
	import HighlightSvelte from "highlightjs-svelte"

	export let lang: string
	export let code: any
	
	let ref: HTMLElement
	onMount(async () => {
		const { default: Highlight } = await import("highlight.js")
		HighlightSvelte( Highlight )

		Highlight.highlightElement( ref )
	})
</script>

<pre class="max-w-[500px] !m-0 !py-0"><code class="language-{lang} rounded-[8px]" bind:this={ref}><svelte:component this={code} /></code></pre>
