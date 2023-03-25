<script>
	import { onMount } from 'svelte';
	import videojs from 'video.js';
	import 'video.js/dist/video-js.css';
	import '../css/vim.css';
	let videoNode;

	const videoJsOptions = {
		autoplay: false,
		playbackRates: [0.5, 1, 1.25, 1.5, 2],
		aspectRatio: '16:9',
		responsive: true,
		controls: true,
		sources: [
			{
				src: 'https://d1e4580vw4aku3.cloudfront.net/2ac5c8a5-6428-48e9-bcfa-bf42dd02a098/AppleHLS1/Reddit_YIR-2022_056.m3u8',
				type: 'application/x-mpegURL'
			}
		]
	};

	onMount(() => {
		let player = videojs(videoNode, $$props, function onPlayerReady() {
			console.log('onPlayerReady');
		});

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
