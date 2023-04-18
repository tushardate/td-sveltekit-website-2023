<script>
	import { onMount } from 'svelte';
	import Player from './Player.svelte';

	export let data;
</script>

{#if data.fieldGroupName === 'Project_Project_sections_Items_Text'}
	{#if data.content !== ''}
		<div class={`single-item ${data.textClasses}`}>
			<div>{data.content}</div>
		</div>
	{/if}
{:else if data.fieldGroupName === 'Project_Project_sections_Items_Image'}
	<div class={`single-item ${data.imageClasses}`}>
		<img src={data.url} alt="" />
	</div>
{:else if data.fieldGroupName === 'Project_Project_sections_Items_Video'}
	<div class={`single-item ${data.videoClasses}`}>
		<Player type={data.type} src={data.url} poster={data.poster} />
	</div>
{:else if data.fieldGroupName === 'Project_Project_sections_Items_Embed'}
	<div class={`single-item ${data.embedClasses}`}>
		<div>{@html data.content}</div>
	</div>
{/if}
