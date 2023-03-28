<script>
	import 'vidstack/styles/defaults.css';
	import { defineCustomElements } from 'vidstack/elements';
	import { onMount } from 'svelte';

	export let src;
	export let poster = '';

	onMount(() => {
		defineCustomElements();
	});
</script>

<!-- remove `controls` attribute if you're designing a custom UI -->
<media-player class="video-player" {src} {poster} controls {...$$props}>
	<media-outlet />
</media-player>

<style>
	.video-player {
		color: red !important;
	}
</style>
