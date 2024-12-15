import type { Config } from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				navLayout: '#1E1E1E',
				defaultText: '#B3B3B3',
				mainBg: '#2C2C2C',
				icon: '#757575',
				iconHovered: '#a8a7a7',
				accent: '#4285F4',
				secondary: '#767676',
				blueButtonHover: '#8EB6F8',
				lightBg: '#5A5A5A',
				borderColor: '#424242'
			}
		}
	},
	plugins: []
} satisfies Config;
