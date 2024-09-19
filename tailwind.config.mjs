/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				customDark: '#0E1726',
				tmg: '#3366CC'
			}
		},
	},
	plugins: [
		 require('@tailwindcss/typography')
	],
}
