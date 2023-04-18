<script>
	import hlsjs from 'hls.js';
	import 'mediaelement';
	// Import stylesheet and shims
	import 'mediaelement/build/mediaelementplayer.min.css';
	import { onMount } from 'svelte';

	let state = {};

	function success(media, node, instance) {
		// Your action when media was successfully loaded
	}

	function error(media) {
		// Your action when media had an error loading
	}

	const props = $$props,
		sources = JSON.parse($$props.sources),
		tracks = JSON.parse($$props.tracks),
		sourceTags = [],
		tracksTags = [];

	onMount(() => {
		console.log(sources);
	});
</script>
