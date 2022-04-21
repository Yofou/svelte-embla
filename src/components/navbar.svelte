<script lang="ts">
	import { page, session } from '$app/stores';
	import Logo from '$components/logo.svelte';
	import DarkTheme from './dark-theme.svelte';
	import LightTheme from './light-theme.svelte';
	import NavBarDrawer from './navbar-drawer.svelte'
	import { changeTheme } from "./changeTheme"

	let isDrawerOpen = false 
	const toggleOpen = () => isDrawerOpen = !isDrawerOpen
</script>

<nav
	class="grid grid-cols-[max-content,1fr] md:grid-cols-[max-content,1fr,repeat(4,max-content)] items-center gap-7 col-span-1 md:col-span-2 text-white"
>
	<button on:click={toggleOpen} class="md:hidden">
		<img src="/hamburger.svg" alt="">
	</button>

	<h1 class="flex text-2xl font-bold text-embla-white gap-2 items-center justify-self-center md:justify-self-start">
		<Logo class="w-[30px] h-[30px] text-svelte" />
		Svelte Embla
	</h1>

	<a class:on-page={$page.url.pathname === '/'} class="hidden md:inline justify-self-end" href="/">Get Started</a>
	<a class:on-page={$page.url.pathname.includes('/guides')} class="hidden md:inline" href="/guides">Guides</a>
	<a class:on-page={$page.url.pathname.includes('/examples')} class="hidden md:inline" href="/examples">Examples</a>
	<a class="hidden md:inline" href="https://www.embla-carousel.com/">Embla</a>
	<button class="hidden md:inline" on:click={changeTheme}>
		{#if $session.theme === 'light'}
			<DarkTheme />
		{:else}
			<LightTheme />
		{/if}
	</button>
</nav>

<NavBarDrawer bind:isDrawerOpen />

<style>
	a {
		@apply text-embla-grey;
	}

	.on-page {
		@apply text-svelte-gradient font-semibold;
	}
</style>
