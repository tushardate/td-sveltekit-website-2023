<script>
	import { onMount } from 'svelte';
	import videojs from 'video.js';
	import 'video.js/dist/video-js.css';
	import '../css/td-videojs-skin.scss';
	import merge from 'lodash.merge';
	import { isArrow, isDot, isNone } from './stores/CursorStore';

	let videoNode;
	let isPlaying = false;

	const defaultOptions = {
		autoplay: false,
		playbackRates: [0.5, 1, 1.25, 1.5, 2],
		aspectRatio: '16:9',
		responsive: true,
		controls: true,
		sources: []
	};
	let options = merge(defaultOptions, $$props);

	onMount(() => {
		let player = videojs(videoNode, options);
		if (videoNode) {
			videoNode.setAttribute('webkit-playsinline', true);
			videoNode.setAttribute('playsinline', true);
		}

		player.on('play', () => {
			isPlaying = true;
			isDot();
		});

		player.on('pause', () => {
			isPlaying = false;
			isArrow()
		});

		return () => {
			if (player) {
				player.dispose();
			}
		};
	});
</script>

<div
	on:mouseenter={() => (isPlaying ? isDot() : isArrow())}
	on:mouseleave={() => isNone()}
	class="video-js-box"
	data-vjs-player
>
	<video
		bind:this={videoNode}
		poster="https://d325dhkqvbsrkz.cloudfront.net/eae27e6e-76ec-47f3-8ade-dc0365ee1be1/Thumbnails/PayPal_NoPresents_1920x1080_THUMBS_16x9_1920x1080.0000008.jpg"
		src="https://d325dhkqvbsrkz.cloudfront.net/eae27e6e-76ec-47f3-8ade-dc0365ee1be1/AppleHLS1/PayPal_NoPresents_1920x1080.m3u8"
		type="application/x-mpegURL"
		id="my-video"
		class="video-js"
		controls
		preload="auto"
	/>
</div>
