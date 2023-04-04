<script>
	import { Plyr } from 'svelte-plyr';
</script>

<h1>YouTube</h1>
<Plyr>
	<div class="plyr__video-embed">
		<iframe
			allow="autoplay"
			allowfullscreen
			allowtransparency
			src="https://www.youtube.com/embed/bTqVqk7FSmY?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
		/>
	</div>
</Plyr>