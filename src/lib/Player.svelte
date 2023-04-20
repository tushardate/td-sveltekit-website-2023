<script lang="ts">
	import { Plyr } from 'svelte-plyr';
	import '@vime/core/themes/default.css';
	// import pkg from '@vime/core';
	import VideoPoster from './VideoPoster.svelte';
	// import Vidstack from './Vidstack.svelte';
	// import { Player, Video, DefaultUi, DefaultControls } from '@vime/svelte';
	import { onMount } from 'svelte';
	let showPlayer = false;
	// let player;
	export let type;
	export let poster;
	export let src;

	onMount(async () => {
		const { defineCustomElements } = await import('@vime/core');
		defineCustomElements();
		showPlayer = true;
	});
</script>

{#if showPlayer}
	{#if type == 'MP4'}
		{#if src !== undefined && poster !== undefined}
			<!-- <Vidstack {src} {poster} /> -->
			<Plyr autoplay="true" muted="false">
				<video id="player" playsinline controls data-poster={poster}>
					<source {src} type="video/mp4" />
				</video>
			</Plyr>
			<!-- <Player onmouseenter={() => console.log("etnere")}>
				<Video crossorigin="" {poster}>
					<source data-src={src} type="video/mp4" />
				</Video>
				<DefaultUi noControls>
					<DefaultControls hideOnMouseLeave activeDuration={2000} />
				</DefaultUi>
			</Player> -->
		{/if}
	{:else if type == 'HLS'}
		{#if src !== undefined && poster !== undefined}
			<vm-player>
				<vm-hls version="latest" config={{}} {poster}>
					<source data-src={src} type="application/x-mpegURL" />
				</vm-hls>
				<vm-default-ui>
					<vm-default-controls hideOnMouseLeave activeDuration={2000} />
					<!-- We can place our own UI components here to extend the default UI. -->
				</vm-default-ui>
			</vm-player>
		{/if}
	{:else if type == 'VIMEO'}
		<Plyr>
			<div class="plyr__video-embed" id="player">
				<iframe
					src={`https://player.vimeo.com/video/${src}?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`}
					allowfullscreen
					allowtransparency
					allow="autoplay"
				/>
			</div>
		</Plyr>
	{:else if type == 'VIDEOPOSTER'}
		<VideoPoster {src} />
	{:else}
		<div class="text-4xl">Incorrect Type Defined</div>
	{/if}
{/if}

<style>
	:root {
		--plyr-color-main: #0055ff;
		--plyr-control-icon-size: 24px;
		--plyr-control-radius: 6px;
	}
</style>
