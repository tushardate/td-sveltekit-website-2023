/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				tdblue: '#007eff'
			},
			columnCount: [1, 2, 3, 4, 5],
			fontFamily: {
				ppmori: ['PP Mori'],
				roobert: ['Roobert'],
				gosha: ['Gosha Sans'],
				sofia: ['Sofia Pro'],
				neuemachina: ['Neue Machina'],
				ttnorms: ['TT Norms Pro'],
				gilroy: ['Gilroy'],
				mori: ['Mori Gothic'],
				moret: ['Moret'],
				circular: ['Circular Std'],
				manrope: ['Manrope'],
				lanord: ['La Nord'],
				polysans: ['PolySans']
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
			maxHeight: {
				'10vh': '10vh',
				'20vh': '20vh',
				'25vh': '25vh',
				'30vh': '30vh',
				'40vh': '40vh',
				'50vh': '50vh',
				'60vh': '60vh',
				'70vh': '70vh',
				'75vh': '75vh',
				'80vh': '80vh',
				'90vh': '90vh',
				'100vh': '100vh'
			},
			spacing: {
				17: '4.25rem',
				18: '4.5rem',
				19: '4.75rem',
				22: '5.5rem',
				42: '10.5rem'
			}
		}
	},
	plugins: [require('tailwindcss-multi-column')()],
	safelist: [
		{ pattern: /^w-.*/ },
		{ pattern: /^justify-.*/ },
		{ pattern: /^items-.*/ },
		{ pattern: /^self-.*/ },
		{ pattern: /^gap-.*/ },
		{ pattern: /^place-.*/ },
		{ pattern: /^grid-.*/ },
		{ pattern: /^max-.*/ },
		{ pattern: /^p[tmrb]-.*/ },
		{ pattern: /^m[tmrb]-.*/ },
		'text-center',
		'text-left',
		'text-justify',
		'text-right'
	]
};
