<script>
	import { onMount } from 'svelte';
	import videojs from 'video.js';
	import 'video.js/dist/video-js.css';

	let videoRef;
	let playerRef;
	export let options;
	export let onReady;

	onMount(() => {
		let player = playerRef;
		if (!playerRef) {
			const videoElement = document.createElement('video-js');
			videoElement.classList.add('vjs-big-play-centered');
			videoRef.appendChild(videoElement);

			const player = (playerRef = videojs(videoElement, options, () => {
				videojs.log('player is ready');
				onReady && onReady(player);
			}));
		} else {
			const player = playerRef;
			player.autoplay(options.autoplay);
			player.src(options.sources);
		}

		return () => {
			if (player && !player.isDisposed()) {
				player.dispose();
				playerRef.current = null;
			}
		};
	});
</script>

<div data-vjs-player>
	<div bind:this={videoRef} />
</div>
