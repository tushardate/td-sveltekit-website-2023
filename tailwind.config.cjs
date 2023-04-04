/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				tdblue: '#007eff'
			},
			fontFamily: {
				ppmori: ['PP Mori'],
				roobert: ['Roobert'],
				gosha: ['Gosha Sans'],
				sofia: ['Sofia Pro'],
				neuemachina: ['Neue Machina']
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
				'17': '4.25rem',
				'18': '4.5rem',
				'19': '4.75rem',
				'22': '5.5rem',
				'42': '10.5rem'
			}
		}
	},
	plugins: []
};
