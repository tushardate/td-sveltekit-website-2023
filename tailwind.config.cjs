/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				tdblue: '#007eff'
			},
			fontFamily: {
				ppmori: ['PP Mori']
			},
			fontSize: {
				'5.5xl': '5.5rem'
			},
			lineHeight: {
				tighter: '1.125',
				tightest: '1.0625',
				5.5: '5.5rem'
			},
			letterSpacing: {
				ultra: '-.125rem',
				tightest: '-.075rem',
				tighter: '-.05rem',
				tight: '-.025rem',
				normal: '0',
				wide: '.025rem',
				wider: '.05rem',
				widest: '.1rem',
				widestest: '.25rem'
			},
			spacing: {
				'42': '10.5rem'
			}
		}
	},
	plugins: []
};
