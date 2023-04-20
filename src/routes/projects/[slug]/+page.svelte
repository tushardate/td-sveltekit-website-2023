<script>
	import SingleItem from '$lib/SingleItem.svelte';
	// import VideoJs from '$lib/VideoJS.svelte';
	// import VideoPoster from '$lib/VideoPoster.svelte';
	// import { onMount } from 'svelte';
	// import VideoJs2 from '$lib/VideoJS2.svelte';
	import { isNone } from '$lib/stores/CursorStore';
	import { tweened } from 'svelte/motion';
	export let data;
	const { prev, next } = data;
	const { project, title } = data.project;
	const { summary, headline, client, role, thumbnailImage, thumbnailVideo, sections } = project;

	let opacity = tweened(0, { duration: 1000 });
</script>

<div class="w-full h-80 overflow-hidden relative rounded-b-2xl">
	<img
		class="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full blur-3xl scale-125"
		src={`${thumbnailImage}tr=w-1920`}
		alt=""
	/>

	<div class="overflow-hidden w-full h-full relative">
		{#if thumbnailVideo}
			<video
				on:canplay={() => opacity.set(1)}
				style="opacity: {$opacity}"
				class="h-full w-full object-cover"
				autoplay
				muted
				loop
				src={thumbnailVideo}
			/>
		{:else}
			<div class="absolute inset-0 bg-black opacity-40" />
			<img class="object-cover w-full h-full" src={`${thumbnailImage}tr=w-1920`} alt="" />
		{/if}
	</div>
	<div class="w-4/5 absolute left-0 bottom-0 px-20 py-16 text-white">
		<p class="text-2xl mb-4 ml-1">{`${client}`}</p>
		<p class="w-4/5 text-8xl font-neuemachina title text-white">{`${title}`}</p>
	</div>
</div>

<div class="w-full px-20 pt-18">
	<div class="project-details-wrapper flex justify-between">
		<div class="w-6/12">
			<p class="headline text-5xl leading-tighter">
				{headline ? headline : title}
			</p>
		</div>
		<div class="w-4/12">
			<p class="text-xl pb-6">{summary}</p>
			<p>{`Role: ${role}`}</p>
		</div>
	</div>

	<div class="project-details-wrapper mt-20 grid gap-4">
		<div class="w-full grid gap-24 text-xl">
			{#each sections as section}
				<div class={`grid`}>
					<div class={`${section.sectionClasses}`}>
						{#each section.items as item}
							<SingleItem data={item} />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="z-50 px-9 pt-20 pb-12 flex justify-between text-5xl font-bold">
	<a data-sveltekit-noscroll href={`/projects/${prev.slug}`}>Prev</a>
	<a data-sveltekit-noscroll href={`/projects/${next.slug}`}>Next</a>
</div>

<style>
	.h-80 {
		height: 100vh;
		min-height: 400px;
	}
	.td-letter-spacing {
		letter-spacing: -0.015em;
	}

	.title {
		letter-spacing: -0.035em;
		font-size: 7.5vw;
		line-height: 0.9em;
	}

	.headline {
		font-size: 3.25vw;
		letter-spacing: -0.0075em;
	}
	.pt {
		padding-top: 56.25%;
	}
</style>
