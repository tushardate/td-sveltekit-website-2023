<script>
	import { onMount } from 'svelte';
	import { isArrow, isDot, isNone } from './stores/CursorStore';

	onMount(() => {
		let atags = document.querySelectorAll('.nav a');
		for (let elem of atags) {
			elem.addEventListener('mouseover', isDot);
			elem.addEventListener('mouseleave', isNone);
		}

		return () => {
			for (let elem of atags) {
				elem.removeEventListener('mouseover', isDot);
				elem.removeEventListener('mouseleave', isNone);
			}
		};
	});
</script>

<div
	class="nav flex text-lg text-white p-9 w-full justify-between items-baseline fixed top-0 z-50 mix-blend-difference"
>
	<a class="" href="/" data-sveltekit-noscroll>
		<div class="flex gap-3 items-baseline logo">
			<!-- <img src="/tdlogo.svg" alt="" /> -->
			<svg width="31" height="30" viewBox="0 0 31 30" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M30.0391 0V9.13044H20.2434L17.6347 4.57827L15.026 0.0130562L12.4173 4.57827L9.80862 9.13044H0.0390625V0H30.0391ZM9.82167 9.13044V30H20.2565V9.13044H9.82167Z"
				/>
			</svg>

			<p>Tushar Date</p>
		</div>
	</a>
	<div class="flex gap-8">
		<a class="p-2 hover:underline" href="/" data-sveltekit-noscroll>Projects</a>
		<a class="p-2" href="/about" data-sveltekit-noscroll>About</a>
	</div>
</div>

<style>
	.logo svg path {
		fill: white;
	}
</style>
