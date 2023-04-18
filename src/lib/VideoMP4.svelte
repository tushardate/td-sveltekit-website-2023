<script>
	import { tweened } from 'svelte/motion';

	let classname = '';
	export { classname as class };
	export let src;

	let opacity = tweened(0, { duration: 1000 });
</script>

<div style="opacity: {$opacity}">
	<video on:canplay={() => opacity.set(1)} class={`w-full  ${classname}`} autoplay muted loop {src} />
</div>
