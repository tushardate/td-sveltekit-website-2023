<script>
	import ProjectThumbnail from '$lib/ProjectThumbnail.svelte';
	export let data;
	const projects = data.projects;
</script>

<p class="text-5.5xl uppercase px-14 py-9 leading-5.5 tracking-tightest">Projects</p>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-3 mx-3">
	{#each projects as project}
		<ProjectThumbnail {project} />
	{/each}
</div>
