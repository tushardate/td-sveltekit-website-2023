<script>
	import '../css/app.css';
	import { fly } from 'svelte/transition';
	import { circIn, circOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import VideoJS from '$lib/VideoJS.svelte';
	import Navigation from '$lib/Navigation.svelte';

	onMount(() => {
		console.log('mounted');
	});

	let playerRef;

	const videoJsOptions = {
		autoplay: true,
		controls: true,
		responsive: true,
		fluid: true,
		sources: [
			{
				src: 'https://d1e4580vw4aku3.cloudfront.net/2ac5c8a5-6428-48e9-bcfa-bf42dd02a098/AppleHLS1/Reddit_YIR-2022_056.m3u8',
				type: 'application/x-mpegURL'
			}
		]
	};

	const handlePlayerReady = (player) => {
		playerRef.current = player;

		// You can handle player events here, for example:
		player.on('waiting', () => {
			videojs.log('player is waiting');
		});

		player.on('dispose', () => {
			videojs.log('player will dispose');
		});
	};

	export let data;
</script>

<Navigation />

{#key data.pathname}
	<div
		class="my-14 mx-0.5"
		id="main"
		in:fly={{ easing: circOut, y: 10, duration: 300, delay: 450 }}
		out:fly={{ easing: circIn, y: -10, duration: 300 }}
	>
		<slot />
	</div>
{/key}

<!-- <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
<VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> -->
<style lang="postcss">
	:global(html) {
		/* background-color: theme(colors.gray.900); */
		background-color: #f1f1e9;
	}
</style>
