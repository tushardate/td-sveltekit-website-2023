<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	export let project;
	console.log(project)

	const n = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
	$: opacity = $n;
	$: bgOpacity = $n - 0.2;
	$: yPos = (1 - $n) * 12;
	$: scale = $n * 0.05 + 1;
</script>

{#if project !== null}
	<a
		on:mouseenter={() => n.set(1)}
		on:mouseleave={() => n.set(0)}
		data-sveltekit-noscroll
		href={`/projects/${project.slug}`}
	>
		<div class="">
			<div class="thumbnailRatio relative w-full rounded-sm">
				<div style:transform={`scale(${scale})`} class="thumbnail absolute w-full h-full">
					<img
						class="object-cover w-full"
						src={`${project.projectDetails.thumbnailCdn}`}
						alt=""
					/>
				</div>
				<div class="w-full h-full">
					<div style={`opacity: ${bgOpacity}`} class="absolute top-0 left-0 w-full h-full bg" />
					<div class="absolute top-0 left-0 w-full h-full py-4 px-12 flex flex-col gap-3 justify-center items-center">
						<p
							style={`opacity: ${opacity}; transform: translate3d(0, ${yPos}px, 0)`}
							class="text-xs ext-center tracking-tight text-white"
						>
							{project.projectDetails.clientName}
						</p>
						<p
							style={`opacity: ${opacity}; transform: translate3d(0, ${yPos}px, 0)`}
							class="text-3xl text-center tracking-tight text-white"
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
		background-color: blue;
	}
</style>
