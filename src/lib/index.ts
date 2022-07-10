import EmblaCarousel from 'embla-carousel';
import type { Action } from 'svelte/action';
import type { EmblaOptionsType, EmblaPluginType, EmblaCarouselType } from 'embla-carousel';
import type { Writable } from 'svelte/store';
import { arePluginsEqual, emblaEventType } from './utils';

export type EmbaOptionsActionType = EmblaOptionsType &
	Partial<{
		plugins: EmblaPluginType[];
		store: Writable<EmblaCarouselType>;
	}>;

const areOptionsEqual = EmblaCarousel.optionsHandler().areEqual;
const action: Action<HTMLElement, EmbaOptionsActionType> = (node, options = {}) => {
	let cachedOptions = options;
	const plugins = options?.plugins ?? [];
	const embla = EmblaCarousel(node, cachedOptions, plugins);
	options?.store?.set(embla);

	emblaEventType.forEach((eventType) => {
		const options: CustomEventInit<{ embla?: EmblaCarouselType }> = { detail: {} };
		const eventName = `embla-${eventType}`;
		if (eventType === 'init') options.detail.embla = embla;
		embla.on(eventType, () => node.dispatchEvent(new CustomEvent(eventName, options)));
	});

	return {
		destroy: () => {
			embla.destroy();
			options?.store?.set(undefined);
		},
		update: (newEmblaConfig) => {
			const optionsChanged = !areOptionsEqual(cachedOptions, newEmblaConfig);
			const pluginsChanged = !arePluginsEqual(cachedOptions.plugins, newEmblaConfig.plugins);

			// If new options or plugins are equal to current, bail here.
			if (!optionsChanged && !pluginsChanged) return;

			// If options or plugins have changed, store them and reInit embla
			cachedOptions = newEmblaConfig;
			embla.reInit(cachedOptions, cachedOptions.plugins);
			options?.store?.set(embla)
		}
	}
};

export default action;
