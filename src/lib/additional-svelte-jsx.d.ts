/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */

type EmblaEventType = import('embla-carousel').EmblaEventType;
type EmblaCarouselType = import('embla-carousel').EmblaCarouselType;
type SvelteEmblaEvents = `onembla-${EmblaEventType}` | `on:embla-${EmblaEventType}`;
type HTMLAttributesEmbla<T> = {
	[key in SvelteEmblaEvents]?: (event: CustomEvent<{ embla?: EmblaCarouselType }>) => void;
};

declare namespace svelte.JSX {
	interface HTMLAttributes<T extends EventTarget> extends HTMLAttributesEmbla<T> {}
}
