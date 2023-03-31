<script>
	import 'vidstack/styles/base.css';
	import { defineCustomElements } from 'vidstack/elements';
	import { onMount } from 'svelte';

	export let src;
	export let poster = '';

	onMount(() => {
		defineCustomElements();
	});
</script>

<!-- remove `controls` attribute if you're designing a custom UI -->
<media-player {src} {poster} controls>
	<media-outlet />
</media-player>

