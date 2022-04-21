<script>
	import { page } from '$app/stores';
	import Accordion from './accordion.svelte';
	import Caret from './caret.svelte';
</script>

<aside class="{$$props.class} flex-col gap-3 text-embla-white">
	<a class="flex gap-3 items-center" class:on-page={$page.url.pathname === '/'} href="/">
		<Caret />
		Get Started
	</a>

	<Accordion active={$page.url.pathname.includes('/guides')} title="Guides">
		<a class:on-page={$page.url.pathname === '/guides'} href="/guides">Overview</a>
		<a class:on-page={$page.url.pathname === '/guides/actions'} href="/guides/actions">Actions</a>
		<a class:on-page={$page.url.pathname === '/guides/stores'} href="/guides/stores">Stores</a>
		<a class:on-page={$page.url.pathname === '/guides/plugins'} href="/guides/plugins">Plugins</a>
	</Accordion>

	<Accordion active={$page.url.pathname.includes('/examples')} title="Examples">
		<a class:on-page={$page.url.pathname === '/examples'} href="/examples/">Overview</a>
		<a class:on-page={$page.url.pathname === '/examples/basics'} href="/examples/basics">Basics</a>
		<a class:on-page={$page.url.pathname === '/examples/navigation'} href="/examples/navigation"
			>Navigation</a
		>
	</Accordion>

	<a href="https://www.npmjs.com/package/svelte-embla" class="flex gap-2 items-center !font-normal">
		<img class="w-4 h-4" src="/npm.svg" alt="" />
		Npm
	</a>
	<a href="https://github.com/Yofou/svelte-embla" class="flex gap-2 items-center !font-normal">
		<img class="w-4 h-4" src="/github.svg" alt="" />
		Github
	</a>
</aside>

<style>
	a {
		@apply font-bold text-[rgb(202,202,202)];
	}

	.on-page {
		@apply text-svelte-gradient font-semibold;
	}
</style>
