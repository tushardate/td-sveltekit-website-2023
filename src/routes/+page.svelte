<script>
	import ProjectThumbnail from '$lib/ProjectThumbnail.svelte';

	export const prerender = true;
	export let data;
	const projects = data.projects;
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-0.5">
	{#each projects as project}
		<ProjectThumbnail {project} />
	{/each}
</div>
