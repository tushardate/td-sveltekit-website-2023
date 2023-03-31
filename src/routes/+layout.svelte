<script>
	import '../css/app.css';
	import { fly } from 'svelte/transition';
	import { quadIn, cubicOut } from 'svelte/easing';
	import VideoJS from '$lib/VideoJS.svelte';
	import Navigation2 from '$lib/Navigation2.svelte';
	import Cursor from '$lib/Cursor.svelte';
	import { isNone } from '$lib/stores/CursorStore';
	export let data;
</script>

<div class="page-elem">
	<Cursor />
	<Navigation2 />

	{#key data.pathname}
		<div
			id="main"
			out:fly={{ easing: quadIn, y: -20, duration: 500 }}
			in:fly={{ easing: cubicOut, y: -10, duration: 1000, delay: 600 }}
			on:outroend={() => {
				window.scrollTo(0, 0);
				isNone();
			}}
		>
			<slot />
		</div>
	{/key}
</div>

<style lang="postcss">
	:global(html) {
		background-color: #101214;
		color: white;
		/* background-color: #e5e5e5;
		color: #171717; */
		font-family: theme(fontFamily.ppmori);
		letter-spacing: theme(letterSpacing.tight);
	}
</style>
