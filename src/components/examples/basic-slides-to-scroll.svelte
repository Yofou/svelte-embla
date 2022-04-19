<script lang="ts">
	import embla from "$lib/index"
</script>

<div class="w-full max-w-[682px] bg-embla-carousel p-4 rounded-[.25rem] overflow-hidden" >
	<div class="overflow-hidden" use:embla={{ slidesToScroll: 2 }}>
		<div class="grid grid-flow-col auto-cols-[50%] grid-rows-[190px] gap-x-[10px] px-[5px]">
			{#each Array.from({ length: 6 }) as _, index}
				<div class="relative">
					<p class="absolute top-[8px] right-[9px] font-semibold text-svelte z-20 w-12 h-12 rounded-full bg-embla-carousel grid place-items-center">{index + 1}</p>
					<img class="relative w-full h-full object-cover rounded-[.25rem] z-10" src="/slide-{(index % 4) + 1}.jpg" alt="">
				</div>
			{/each}
		</div>
	</div>
</div>
