<script lang="ts">
	export let title: string
	export let href: string
</script>


<div class="text-embla-white">
	<a class="text-2xl font-bold" href="/#{title.toLowerCase()}">
		<h1>{title}</h1>
	</a>

	<div class="flex gap-1 text-[.875rem] text-embla-lowContrast">
		Edit code: <a class="ml-3 text-svelte-gradient font-semibold" {href}>Svelte</a>
	</div>

	<slot />
</div>
