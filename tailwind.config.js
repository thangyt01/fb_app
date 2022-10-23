/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: require('tailwind-rn/unsupported-core-plugins'),
	content: [
		'./components/screen/**/*.{jsx,js}',
		'./components/layout/**/*.{jsx,js}',
		'./components/common/**/*.{jsx,js}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
