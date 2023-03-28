<script>
	import { onMount } from 'svelte';
	import videojs from 'video.js';
	import 'video.js/dist/video-js.css';
	import '../css/td-videojs-skin.scss';
	import '../css/vim.css';
	import merge from 'lodash.merge';

	let videoNode;

	const defaultOptions = {
		autoplay: false,
		playbackRates: [0.5, 1, 1.25, 1.5, 2],
		aspectRatio: '16:9',
		responsive: true,
		controls: true,
		sources: []
	};

	let options = merge(defaultOptions, $$props);

	console.log(options);

	onMount(() => {
		let player = videojs(videoNode, options);

		if (videoNode) {
			videoNode.setAttribute('webkit-playsinline', true);
			videoNode.setAttribute('playsinline', true);
		}

		return () => {
			if (player) {
				player.dispose();
			}
		};
	});
</script>

<div class="video-js-box vim-css" data-vjs-player>
	<video bind:this={videoNode} class="video-js" />
</div>
