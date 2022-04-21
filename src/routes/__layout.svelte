<script lang="ts">
	import Aside from '$components/aside.svelte';
	import Navbar from '$components/navbar.svelte';
	import '$components/global.css';
</script>

<Navbar />
<Aside class="hidden md:flex" />

<main class="w-full h-full">
	<slot />
</main>
