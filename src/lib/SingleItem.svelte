<script>
	export let data;
</script>

<div>
	{#if data.fieldGroupName === 'Project_ProjectItem_groupRowRepeater_groupRowRepeaterItems_SingleItem_SingleItemTextBlock'}
		{#if data.contentTextItem !== ''}
			<div>{data.contentTextItem}</div>
		{/if}
	{:else if data.fieldGroupName === 'Project_ProjectItem_groupRowRepeater_groupRowRepeaterItems_SingleItem_SingleItemImage'}
		<div>Image Block</div>
	{:else if data.fieldGroupName === 'Project_ProjectItem_groupRowRepeater_groupRowRepeaterItems_SingleItem_SingleItemVideo'}
		<div>Video</div>
	{/if}
</div>
