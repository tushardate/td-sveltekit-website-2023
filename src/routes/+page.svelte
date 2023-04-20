<script>
	import ProjectThumbnail from '$lib/ProjectThumbnail.svelte';
	import { ProjectArray, setAllProjects } from '$lib/stores/ProjectsStore.js';
	export let data;
	const projects = data.projects;
	setAllProjects(projects)
</script>

<div class="px-3 mt-40">
	<!-- <p class="text-5.5xl font-neuemachina px-16 pb-4 leading-5.5">Work</p> -->
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
		{#each projects as project}
			<ProjectThumbnail {project} />
		{/each}
	</div>
</div>
