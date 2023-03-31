<script>
	import { ProjectArray, setAllProjects } from '$lib/stores/ProjectsStore.js';
	import { query } from '$lib/queries/homepageProjectQuery.js';
	import SingleItem from '$lib/SingleItem.svelte';
	import VideoJs from '$lib/VideoJS.svelte';
	import VideoPoster from '$lib/VideoPoster.svelte';
	import Vidstack from '$lib/Vidstack.svelte';
	import Plyr from '$lib/Plyr.svelte';
	import VimeoJs from '$lib/VimeoJS.svelte';
	import { onMount } from 'svelte';
	import { isNone } from '$lib/stores/CursorStore';
	export let data;
	const { project } = data;
	const { projectDetails, title, featuredImage, project_item } = project;
	const { projectHeadline, generalProjectDescription, clientName } = projectDetails;
	const { groupRowRepeater } = project_item;

	// let currentIdx;
	// let next;
	// let prev;

	// $: console.log(prev, next)

	// onMount(async () => {
	// 	if ($ProjectArray == null || $ProjectArray.length == 0) {
	// 		const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify({ query })
	// 		});

	// 		if (response.ok) {
	// 			const responseObj = await response.json();
	// 			const projects = responseObj.data.projects.nodes;

	// 			setAllProjects(projects);
	// 			currentIdx = projects.findIndex((e) => e.id == project.id);
	// 			next = projects[(currentIdx + 1) % projects.length];
	// 			prev = projects[(currentIdx - 1 + projects.length) % projects.length];
	// 		}
	// 	} else {
	// 		currentIdx = $ProjectArray.findIndex((e) => e.id == project.id);
	// 		next = (currentIdx + 1) % $ProjectArray.length;
	// 		prev = (currentIdx - 1 + $ProjectArray.length) % $ProjectArray.length;
	// 	}
	// });
</script>

<div class="w-full h-80 overflow-hidden relative td-letter-spacing">
	<div class="overflow-hidden w-full h-full relative">
		<video
			class="h-full w-full object-cover"
			autoplay
			muted
			loop
			src="https://dyjkfe4bneuj4.cloudfront.net/exports/VideoThumb-PayPal-NoPresents.mp4"
		/>
	</div>
	<!-- <img class="h-full w-full object-cover" src="https://ik.imagekit.io/tsswunfp0/Thumbnails_Hi-Res/thumb-1800Tequila_Zri0FONR0.jpg?updatedAt=1679617997883" alt=""> -->
	<div class="w-3/5 absolute left-0 bottom-0 p-20 text-white">
		<p class="text-2xl mb-3">{`${clientName}`}</p>
		<p class="text-8xl font-neuemachina font-bold text-white">{`${title}`}</p>
	</div>
</div>

<div class="w-full px-20 pt-20 td-letter-spacing">
	<div class="project-details-wrapper mb-20 flex justify-between">
		<div class="w-2/5">
			<p class="headline text-5xl">
				{projectHeadline ? projectHeadline : title}
			</p>
		</div>
		<div class="w-2/6">
			<p class="text-lg">{generalProjectDescription}</p>
		</div>
	</div>

	<div class="py-6">
		<Plyr />
	</div>

	<Vidstack
		aspect-ratio="16/9"
		src="https://d325dhkqvbsrkz.cloudfront.net/eae27e6e-76ec-47f3-8ade-dc0365ee1be1/AppleHLS1/PayPal_NoPresents_1920x1080.m3u8"
		poster="https://d325dhkqvbsrkz.cloudfront.net/eae27e6e-76ec-47f3-8ade-dc0365ee1be1/Thumbnails/PayPal_NoPresents_1920x1080_THUMBS_16x9_1920x1080.0000008.jpg"
	/>

	<div class="project-details-wrapper mt-24 mb-16 grid gap-4">
		{#each groupRowRepeater as groupRow}
			{#each groupRow.groupRowRepeaterItems as row}
				{#each row.singleItem as singleItem}
					<div class="grid grid-flow-col gap-6">
						<SingleItem data={singleItem} />
					</div>
				{/each}
			{/each}
		{/each}
	</div>
</div>

<!-- {#if prev && next}
	<div
		class="z-50 text-red-600 px-20 pt-9 py-18 flex justify-between text-6xl font-neuemachina font-bold"
	>
		<a data-sveltekit-noscroll href={`/projects/${prev.slug}`}>PREV</a>
		<a data-sveltekit-noscroll href={`/projects/${next.slug}`}>NEXT</a>
	</div>
{/if} -->

<!-- <script>
	const videoJsOptions = {
		poster:
			'https://d325dhkqvbsrkz.cloudfront.net/eae27e6e-76ec-47f3-8ade-dc0365ee1be1/Thumbnails/PayPal_NoPresents_1920x1080_THUMBS_16x9_1920x1080.0000008.jpg',
		autoplay: false,
		playbackRates: [0.5, 1, 1.25, 1.5, 2],
		aspectRatio: '16:9',
		responsive: true,
		controls: true,
		sources: [
			{
				src: 'https://d325dhkqvbsrkz.cloudfront.net/eae27e6e-76ec-47f3-8ade-dc0365ee1be1/AppleHLS1/PayPal_NoPresents_1920x1080.m3u8',
				type: 'application/x-mpegURL'
			}
		]
	};
</script> -->
<!-- 
<VideoPoster>
	<source
		src="https://dyjkfe4bneuj4.cloudfront.net/exports/PRXJ0074000H-DRIP_15.mp4"
		type="video/mp4"
	/>
</VideoPoster>
<VideoPoster>
	<source
		src="https://dyjkfe4bneuj4.cloudfront.net/exports/VideoThumb-PayPal-NoPresents.mp4"
		type="video/mp4"
	/>
</VideoPoster>
<div class="w-3/5">
	<VideoJs {...videoJsOptions} />
</div>
<div style="position: relative; padding-top: 56.25%;">
	<iframe
		src="https://iframe.mediadelivery.net/embed/107379/b43b0acd-8af0-476c-af79-9884fb32f9c6?autoplay=true"
		loading="lazy"
		style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"
		allow="accelerometer; gyroscope; encrypted-media; picture-in-picture;"
		allowfullscreen="true"
	/>
</div> -->

<style>
	.h-80 {
		height: 90vh;
		min-height: 400px;
	}
	.td-letter-spacing {
		letter-spacing: -0.02em;
	}

	.headline {
		letter-spacing: -0.035em;
	}
	.pt {
		padding-top: 56.25%;
	}
</style>
