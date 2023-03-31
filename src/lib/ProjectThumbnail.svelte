<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { isArrow, isNone } from './stores/CursorStore';
	export let project;

	const n = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
	$: opacity = $n;
	$: bgOpacity = $n - 0.2;
	$: yPos = (1 - $n) * 12;
	$: scale = $n * 0.05 + 1;

	function handleEnter() {
		n.set(1);
		isArrow();
	}

	function handleOut() {
		n.set(0);
		isNone();
	}
</script>

{#if project !== null}
	<a
		on:mouseenter={() => handleEnter()}
		on:mouseleave={() => handleOut()}
		data-sveltekit-noscroll
		href={`/projects/${project.slug}`}
	>
		<div class="project-thumbnail">
			<div class="thumbnailRatio relative w-full rounded-lg">
				<div style:transform={`scale(${scale})`} class="thumbnail absolute w-full h-full">
					<img
						class="object-cover w-full"
						src={`${project.projectDetails.thumbnailCdn}tr=w-1024`}
						srcSet={`${project.projectDetails.thumbnailCdn}tr=w-1024 1024w, ${project.projectDetails.thumbnailCdn}tr=w-1920 1920w,`}
						sizes="(min-width: 1024px) 50vw, 100vw"
						alt=""
					/>
				</div>
				<div class="w-full h-full">
					<div style={`opacity: ${bgOpacity}`} class="absolute top-0 left-0 w-full h-full bg" />
					<div
						class="absolute top-0 left-0 w-full h-full p-17 flex flex-col gap-2 justify-center items-start"
					>
						<p
							style={`opacity: ${opacity}; transform: translate3d(0, ${yPos}px, 0)`}
							class=" text-white"
						>
							{project.projectDetails.clientName}
						</p>
						<p
							style={`opacity: ${opacity}; transform: translate3d(0, ${yPos}px, 0)`}
							class="text-5xl text-white w-3/5"
						>
							{project.title}
						</p>
					</div>
				</div>
			</div>
		</div>
	</a>
{:else}
	<div>Loading</div>
{/if}

<style lang="postcss">
	.bg {
		background-color: theme(colors.black);
	}

	.thumbnailRatio {
		overflow: hidden;
		width: 100%;
		padding-bottom: 56.25%;
	}

	/* .project-thumbnail:hover {
		cursor: url(/cursor/cursor-project.svg), auto;
	} */
</style>
