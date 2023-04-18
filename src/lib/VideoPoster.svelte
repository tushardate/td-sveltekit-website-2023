<script>
	import { tweened } from 'svelte/motion';
	let opacity = tweened(0, { duration: 1000 });
	export let src;
</script>

{#if src !== undefined}
	<div class="h-full w-full bg-black">
		<video
			on:canplay={() => opacity.set(1)}
			style="opacity: {$opacity}"
			class="h-full w-full object-cover"
			autoplay
			muted
			loop
			{src}
		/>
	</div>
{:else}
	<div class="text-2xl">Incorrect Source</div>
{/if}
