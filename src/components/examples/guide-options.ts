
export default `<script>
	import embla from "svelte-embla"
</script>

<div class="embla" use:embla={{ axis: "y" }}>
	<div class="embla__container">
		<div class="embla__slide">Slide 1</div>
		<div class="embla__slide">Slide 2</div>
		<div class="embla__slide">Slide 3</div>
	</div>
</div>
`
