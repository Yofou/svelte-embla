import EmblaCarousel from 'embla-carousel';
import type { EmblaPluginType } from 'embla-carousel';

export const emblaEventType = [
	"init",
	"pointerDown",
	"pointerUp",
	"scroll",
	"select",
	"settle",
	"destroy",
	"reInit",
	"resize",
] as const;

export function sortAndMapPluginToOptions(plugins: EmblaPluginType[]) {
	return plugins
		.concat()
		.sort((a, b) => (a.name > b.name ? 1 : -1))
		.map((plugin) => plugin.options);
}

export function arePluginsEqual(pluginsA: EmblaPluginType[], pluginsB: EmblaPluginType[]) {
	if (pluginsA.length !== pluginsB.length) return false;

	const { areEqual } = EmblaCarousel?.optionsHandler();
	const optionsA = sortAndMapPluginToOptions(pluginsA);
	const optionsB = sortAndMapPluginToOptions(pluginsB);

	return optionsA.every((optionA, index) => {
		const optionB = optionsB[index];
		return areEqual(optionA, optionB);
	});
}
