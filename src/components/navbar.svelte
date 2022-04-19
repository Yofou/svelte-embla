<script lang="ts">
	import { mode } from '$app/env';
	import { page, session } from '$app/stores';
	import Logo from '$components/logo.svelte';

	const changeTheme = async () => {
		const host = mode === "development" ? "http://localhost:3000" : "https://svelte-embla.vercel.app"
		const theme = await fetch(`${host}/api/theme`, { method: 'POST' })
			.then((res) => res.json())
			.then((res) => res.theme as 'light' | 'dark');

		$session.theme = theme;
	};
</script>

<nav
	class="grid grid-cols-[max-content,1fr,repeat(3,max-content)] items-center gap-7 col-span-2 text-white"
>
	<h1 class="flex text-2xl font-bold text-embla-white gap-2 items-center">
		<Logo class="w-[30px] h-[30px] text-svelte" />
		Svelte Embla
	</h1>

	<a class:on-page={$page.url.pathname === '/'} class="justify-self-end" href="/">Get Started</a>
	<a class:on-page={$page.url.pathname.includes('/examples')} href="/examples">Examples</a>
	<a href="https://www.embla-carousel.com/">Embla</a>
	<button on:click={changeTheme}>
		{#if $session.theme === "light"}
			<svg
				fill="currentColor"
				width="40px"
				height="40px"
				viewBox="0 0 24 24"
				><path
					d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
					fill="currentColor"
				/></svg
			>
		{:else}
			<svg
				fill="currentColor"
				width="40px"
				height="40px"
				viewBox="0 0 24 24"
				><path
					d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"
					fill="currentColor"
				/></svg
			>
		{/if}
	</button>
</nav>

<style>
	a {
		@apply text-embla-grey;
	}

	.on-page {
		@apply text-svelte-gradient font-semibold;
	}

	button > svg {
		@apply w-6 h-6;
	}
</style>
