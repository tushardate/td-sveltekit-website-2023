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

<Plyr>
    <video
    crossorigin
    playsinline
    poster="https://d325dhkqvbsrkz.cloudfront.net/cc605cfe-5ef9-441c-86b1-98c26fc4bccb/Thumbnails/1800_60_Unslated_THUMBS_16x9_1920x1080.0000004.jpg"
    src="https://d325dhkqvbsrkz.cloudfront.net/eae27e6e-76ec-47f3-8ade-dc0365ee1be1/AppleHLS1/PayPal_NoPresents_1920x1080.m3u8"
  >
</Plyr>