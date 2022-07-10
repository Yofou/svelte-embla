export default `<script>
	import embla from "svelte-embla"
	const onSettle = () => console.log("the user has stopped scroll on the carousel")
</script>

<div class="embla" use:embla on:embla-settle={onSettle}>
	<div class="embla__container">
		<div class="embla__slide">Slide 1</div>
		<div class="embla__slide">Slide 2</div>
		<div class="embla__slide">Slide 3</div>
	</div>
</div>
`
