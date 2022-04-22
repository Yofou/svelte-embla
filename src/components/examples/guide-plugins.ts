export default `<script>
	import embla from "svelte-embla"
	import AutoPlay from "embla-carousel-autoplay"

	const autoplay = AutoPlay({ delay: 4000 })
</script>

<div class="embla" use:embla={{ plugins: [autoplay] }}>
	<div class="embla__container">
		<div class="embla__slide">Slide 1</div>
		<div class="embla__slide">Slide 2</div>
		<div class="embla__slide">Slide 3</div>
	</div>
</div>
`
