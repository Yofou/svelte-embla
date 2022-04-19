/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	interface Locals {
		theme: "light" | "dark";
	}
	// interface Platform {}
	interface Session {
		theme: "light" | "dark";
	}
	// interface Stuff {}
}
