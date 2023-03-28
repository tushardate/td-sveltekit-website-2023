<script>
	let paused = true;
</script>

<video
	bind:paused
	on:mouseenter={() => (paused = false)}
	on:mouseleave={() => (paused = true)}
	width="100%"
	loop
	muted
>
	<slot />
</video>
