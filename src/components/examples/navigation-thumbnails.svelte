<script lang="ts">
	import embla from '$lib/index';
	import type { EmblaCarouselType } from 'embla-carousel';
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	const images = Array.from({ length: 10 }, (_, index) => `/slide-${(index % 4) + 1}.jpg`);

	const gallery = writable<EmblaCarouselType>();
	const thumbnails = writable<EmblaCarouselType>();

	const onThumbnailSelect = (index: number) => () => {
		if (!$thumbnails?.clickAllowed()) return;
		$gallery?.scrollTo(index);
		$thumbnails?.scrollTo(index);
	};

	$: selected = $gallery?.selectedScrollSnap() ?? 0;
	const onGallerySelect = () => {
		selected = $gallery?.selectedScrollSnap() ?? 0;
		$thumbnails?.scrollTo(selected);
	};
</script>

<div class="bg-embla-carousel p-4 rounded-[.25rem] overflow-hidden">
	<div class="overflow-hidden" use:embla={{ store: gallery }} on:e-select={onGallerySelect}>
		<div class="grid grid-flow-col auto-cols-[100%] grid-rows-[190px] gap-x-[10px]">
			{#each images as src, index}
				<div class="relative rounded-[.25rem] overflow-hidden">
					<p
						class="absolute top-2 right-[9px] grid place-items-center bg-embla-carousel rounded-full text-svelte w-12 h-12"
					>
						{index + 1}
					</p>
					<img class="w-full h-full object-cover" {src} alt="" />
				</div>
			{/each}
		</div>
	</div>

	<div
		class="overflow-hidden mt-[10px]"
		use:embla={{ dragFree: true, align: 'start', containScroll: 'keepSnaps', store: thumbnails }}
	>
		<div class="grid grid-flow-col auto-cols-[89px] grid-rows-[70px] gap-x-[10px]">
			{#each images as src, index}
				<button
					class="group relative rounded-[.25rem] overflow-hidden"
					disabled={selected === index}
					on:click={onThumbnailSelect(index)}
				>
					<img class="w-full h-full object-cover" {src} alt="" />

					{#if selected === index}
						<div
							class="absolute top-0 left-0 w-full h-full bg-black opacity-60"
							transition:fade={{ duration: 250 }}
						/>
					{/if}

					<p
						class="absolute top-1 right-1 grid place-items-center bg-embla-carousel rounded-full text-svelte w-8 h-8"
					>
						{index + 1}
					</p>
				</button>
			{/each}
		</div>
	</div>
</div>
