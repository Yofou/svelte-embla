<script lang="ts">
	import DarkTheme from "./dark-theme.svelte";
	import LightTheme from "./light-theme.svelte";
	import Aside from "./aside.svelte";
	import { session } from "$app/stores"
	import { fly } from "svelte/transition";
	import Logo from "./logo.svelte";
	import { onMount } from "svelte";
	import { changeTheme } from "./changeTheme";
	import { clickOutside } from "svelte-use-click-outside"
	import { fade } from "svelte/transition";
	import { page } from "$app/stores"

	export let isDrawerOpen: boolean
	const onToggleOpen = () => isDrawerOpen = !isDrawerOpen

	let isMobile = false
	const onWindowResize = () => {
		isMobile = window.matchMedia("(max-width: 768px)").matches	
	}

	$: {
		$page.url.pathname
		isDrawerOpen = false
	}

	onMount( onWindowResize )
</script>

<svelte:window on:resize={onWindowResize} />

{#if isMobile && isDrawerOpen}
	<div transition:fade={{ duration: 250 }} class="backdrop" />
	<dialog use:clickOutside={() => isDrawerOpen = false} transition:fly={{ duration: 250, x: -375, opacity: 1 }} open class="fixed top-0 left-0 w-full max-w-[375px] m-0 h-full bg-black px-6 z-30">
		<div class="grid grid-cols-[max-content,1fr,max-content] gap-4">
			<h1 class="flex text-2xl font-bold text-embla-white gap-2 items-center justify-self-center md:justify-self-start">
				<Logo class="w-[30px] h-[30px] text-svelte" />
				Svelte Embla
			</h1>

			<button class="text-white justify-self-end" on:click={changeTheme}>
				{#if $session.theme === 'light'}
					<DarkTheme />
				{:else}
					<LightTheme />
				{/if}
			</button>

			<button class="w-[30px] h-[30px] grid place-items-center rounded-full [background:linear-gradient(45deg,#ff9500,#ffcc00)]" on:click={onToggleOpen}>
				<img class="w-5 h-5"src="/cross.svg" alt="">
			</button>
		</div>

		<Aside class="flex mt-4" />
	</dialog>
{/if}

<style>
	.backdrop {
		@apply fixed top-0 left-0 w-full h-full bg-black/50 z-10;
	}
</style>
