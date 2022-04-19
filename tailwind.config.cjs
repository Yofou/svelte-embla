const plugin = require("tailwindcss/plugin")

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		fontFamily: {
			roboto: ["'Roboto'", 'san-serif']
		},
		extend: {
			colors: {
				svelte: '#ff9500',
				embla: {
					grey: 'rgb(202, 202, 202)',
					white: 'rgb(230, 230, 230)',
					gradient: 'linear-gradient(45deg, #ff9500, #ffcc00)',
					lowContrast: "rgb(170, 170, 170)",
					textBody: "rgb(222,222,222)",
					carousel: "rgb(12, 12, 12)"
				}
			}
		}
	},
	plugins: [
		plugin(({ addComponents, theme }) => {
			addComponents({
				'.text-svelte-gradient': {
					background: theme('colors.embla.gradient'),
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent'
				},
				'.svelte-bg': {
					background: theme('colors.embla.gradient'),
				}
			});
		})
	]
}
