<script>
	import VideoJs from '$lib/VideoJS.svelte';
	export let data;
	const { project } = data;
	const { projectDetails, title, featuredImage } = project;
	const { projectHeadline, generalProjectDescription, clientName } = projectDetails;
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
</script>

<div class="project-details-wrapper mt-24 mb-16 mx-14 grid gap-4">
	<p class="text-xl tracking-tightest ml-1">{`${clientName} - ${title}`}</p>
	<div class="w-4/5 tracking-tightest">
		<p class="text-8xl leading-tightest">
			{projectHeadline ? projectHeadline : title}
		</p>
	</div>
</div>
<img srcset={featuredImage.node.srcSet} alt="" />
<p>{generalProjectDescription}</p>
<div style="position: relative; padding-top: 56.25%;">
	<iframe
		src="https://iframe.mediadelivery.net/embed/107379/797ac6fd-084f-4d8e-b6b2-858f896b8c46?autoplay=true"
		loading="lazy"
		style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"
		allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
		allowfullscreen="true"
	/>
</div>
<VideoJs {...videoJsOptions} />
