<script>
	import '../css/app.css';
	import { fly } from 'svelte/transition';
	import { circIn, circOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import VideoJS from '$lib/VideoJS.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import { afterNavigate } from '$app/navigation';

	onMount(() => {
		console.log('mounted');
	});

	afterNavigate(() => {
		console.log('after');
	});

	export let data;
</script>

<Navigation />

{#key data.pathname}
	<div
		id="main"
		in:fly={{ easing: circOut, y: 10, duration: 300, delay: 450 }}
		out:fly={{ easing: circIn, y: -10, duration: 300 }}
	>
		<slot />
	</div>
{/key}

<style lang="postcss">
	:global(html) {
		/* background-color: #101214;
		color: white; */
		background-color: #f2f1eb;
		color: black;
		font-family: theme(fontFamily.ppmori);
		letter-spacing: theme(letterSpacing.tight);
	}
</style>
