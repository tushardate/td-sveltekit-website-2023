<script lang="ts">
	import '@vime/core/themes/default.css';
	import { Player, Video, DefaultUi, DefaultControls, Hls, Vimeo } from '@vime/svelte';
	import TapSideToSeek from './components/TapSideToSeek.svelte';
	import VideoPoster from './VideoPoster.svelte';
	import { onMount } from 'svelte';
	export let type;
	export let poster;
	export let src;

	onMount(() => {
		console.log(src);

		console.log('started');
	});
</script>

{#if type == 'MP4'}
	{#if src !== undefined && poster !== undefined}
		<Player>
			<Video crossorigin="" {poster}>
				<source data-src={src} type="video/mp4" />
			</Video>
			<DefaultUi noControls>
				<DefaultControls hideOnMouseLeave activeDuration={2000} />
				<!-- We can place our own UI components here to extend the default UI. -->
			</DefaultUi>
		</Player>
	{/if}
{:else if type == 'HLS'}
	{#if src !== undefined && poster !== undefined}
		<Player>
			<Hls version="latest" config={{}} {poster}>
				<source data-src={src} type="application/x-mpegURL" />
			</Hls>
			<DefaultUi noControls>
				<DefaultControls hideOnMouseLeave activeDuration={2000} />
				<!-- We can place our own UI components here to extend the default UI. -->
			</DefaultUi>
		</Player>
	{/if}
{:else if type == 'Vimeo'}
	<Player>
		<Vimeo videoId="212630585" />
		<DefaultUi noControls>
			<DefaultControls hideOnMouseLeave activeDuration={2000} />
			<!-- We can place our own UI components here to extend the default UI. -->
		</DefaultUi>
	</Player>
{:else if type == 'VIDEOPOSTER'}
	<VideoPoster {src} />
{:else}
	<div class="text-4xl">Incorrect Type Defined</div>
{/if}
