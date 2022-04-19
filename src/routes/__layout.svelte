<script lang="ts">
	import Aside from '$components/aside.svelte';
	import Navbar from '$components/navbar.svelte';
</script>

<Navbar />
<Aside />

<main class="w-full h-full">
	<slot />
</main>

<style global>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	* {
		@apply font-roboto;
	}

	html {
		@apply min-h-full bg-black;
	}

	body {
		@apply grid grid-cols-[minmax(0,270px),minmax(0,730px)] justify-center grid-rows-[60px,minmax(calc(100vh-60px-24px),1fr)] gap-y-6 gap-x-10 h-full;
	}

	body > div {
		@apply contents;
	}
</style>
