const plugin = require('tailwindcss/plugin');

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
					gradient: 'linear-gradient(45deg, #ff9500, #ffcc00)'
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
				}
			});
		})
	]
};
