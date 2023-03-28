<script>
	import SingleItem from '$lib/SingleItem.svelte';
	import VideoJs from '$lib/VideoJS.svelte';
	import VideoPoster from '$lib/VideoPoster.svelte';
	import Vidstack from '$lib/Vidstack.svelte';
	import VimeoJs from '$lib/VimeoJS.svelte';
	export let data;
	const { project } = data;
	const { projectDetails, title, featuredImage, project_item } = project;
	const { projectHeadline, generalProjectDescription, clientName } = projectDetails;
	const { groupRowRepeater } = project_item;
</script>

<div class="w-full h-80 p-3 overflow-hidden relative td-letter-spacing">
	<div class="rounded-lg overflow-hidden w-full h-full relative">
		<video
			class="h-full w-full object-cover"
			autoplay
			muted
			loop
			src="https://dyjkfe4bneuj4.cloudfront.net/exports/VideoThumb-PayPal-NoPresents.mp4"
		/>
	</div>
	<!-- <img class="h-full w-full object-cover" src="https://ik.imagekit.io/tsswunfp0/Thumbnails_Hi-Res/thumb-1800Tequila_Zri0FONR0.jpg?updatedAt=1679617997883" alt=""> -->
	<div class="w-3/5 absolute left-0 bottom-0 p-14 text-white">
		<p class="text-2xl ml-1 mb-3">{`${clientName}`}</p>
		<p class="text-8xl ml-1 text-white">{`${title}`}</p>
	</div>
</div>

<div class="w-full px-14 pt-14 td-letter-spacing">
	<div class="project-details-wrapper mb-16 flex justify-between">
		<div class="w-2/5">
			<p class="headline text-4xl">
				{projectHeadline ? projectHeadline : title}
			</p>
		</div>
		<div class="w-2/6">
			<p class="text-lg">{generalProjectDescription}</p>
		</div>
	</div>

	<Vidstack
		aspect-ratio="16/9"
		src="https://d325dhkqvbsrkz.cloudfront.net/cc605cfe-5ef9-441c-86b1-98c26fc4bccb/MP4/1800_60_Unslated_MP4_16x9_1920x2080p_qvbr.mp4"
		poster="https://d325dhkqvbsrkz.cloudfront.net/cc605cfe-5ef9-441c-86b1-98c26fc4bccb/Thumbnails/1800_60_Unslated_THUMBS_16x9_1920x1080.0000004.jpg"
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
