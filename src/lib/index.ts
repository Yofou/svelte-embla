import EmblaCarousel from 'embla-carousel';
import type { Action } from 'svelte/action';
import type { EmblaOptionsType, EmblaPluginType, EmblaCarouselType } from 'embla-carousel';
import type { Writable } from 'svelte/store';
import { paramCase } from "param-case"

export const emblaEventType = [
	'init',
	'pointerDown',
	'pointerUp',
	'scroll',
	'select',
	'settle',
	'destroy',
	'reInit',
	'resize'
] as const;

export type EmblaEventType = typeof emblaEventType[number];

export type EmbaOptionsActionType = EmblaOptionsType &
	Partial<{
		plugins: EmblaPluginType[];
		store: Writable<EmblaCarouselType>;
	}>;

const action: Action<HTMLElement, EmbaOptionsActionType> = (node, options = {}) => {
	const plugins = options?.plugins ?? [];
	const embla = EmblaCarousel(node, options, plugins);
	options?.store?.set(embla);

	emblaEventType.forEach((eventType) => {
		const options: CustomEventInit<{ embla?: EmblaCarouselType }> = { detail: {} }
		const eventName = `e-${paramCase(eventType)}`
		if (eventType === "init") options.detail.embla = embla
		embla.on(eventType, () => node.dispatchEvent(new CustomEvent(eventName, options)));
	});

	return {
		destroy: () => {
			embla.destroy();
			options?.store?.set(undefined);
		}
	};
};

export default action;
