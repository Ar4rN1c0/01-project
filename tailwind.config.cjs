/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-background': "url('/public/HeroBack.webp')",
				'banner-background': "url('/public/BannerMiddle.webp')"
			},
			textColor: {
				'themepink': '#ffa98f',
				'themeblue': '#1a2456',
				'themeblack': '#080b1b',
				'themewhite': '#f0efed'
			},
			backgroundColor: {
				'themegrey': '#c4c4c4'
			}
		},
	},
	plugins: [],
}