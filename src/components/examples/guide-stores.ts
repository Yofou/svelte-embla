export default `<script lang="ts">
	import embla from "svelte-embla"
	import type { EmblaCarouselType } from "embla-carousel";
	import { writable } from "svelte/store";

	const carousel = writable<EmblaCarouselType>()
	const toLeft = () => $carousel?.canScrollPrev() && $carousel?.scrollPrev();
	const toRight = () => $carousel?.canScrollNext() && $carousel?.scrollNext();
</script>

<div class="embla" use:embla={{ store: carousel }}>
	<div class="embla__container">
		<div class="embla__slide">Slide 1</div>
		<div class="embla__slide">Slide 2</div>
		<div class="embla__slide">Slide 3</div>
	</div>
</div>

<button on:click={toLeft}>scroll to the left</button>
<button on:click={toRight}>scroll to the right</button>
`
