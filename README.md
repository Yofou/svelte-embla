# Svelte Embla
Svelte Embla is a Svelte Action Wrapper for [Embla Carousel](https://www.embla-carousel.com/)
which allows you to easily integrate any kind of carousel to your heart disires
using Embla Carousel in a Svelte project.

## Quich Start

```bash
npm install svelte-embla
```

```svelte
<script>
	import embla from "svelte-embla"
</script>

<div class="embla" use:embla>
	<div class="embla__container">
		<div class="embla__slide">Slide 1</div>
		<div class="embla__slide">Slide 2</div>
		<div class="embla__slide">Slide 3</div>
	</div>
</div>
```
