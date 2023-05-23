/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#eff6ff',
					100: '#dbebfe',
					200: '#bfdbfe',
					300: '#93c2fd',
					400: '#60a4fa',
					500: '#3b8ef6',
					600: '#257deb',
					700: '#1d70d8',
					800: '#1e5eaf',
					900: '#1e4e8a',
					950: '#173254',
				},
				success: '#206856',
				error: '#c81c1c',
				warning: '#a44d0e',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};

// View theme in action
// https://uicolors.app/edit?sv1=french-pass:50-eff6ff/100-dbebfe/200-bfdbfe/300-93c2fd/400-60a4fa/500-3b8ef6/600-257deb/700-1d70d8/800-1e5eaf/900-1e4e8a/950-173254

// tailwind components
// https://tailwindui.com/components/preview
