<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	export let before = '';
	export let after = '';

	let timer;
	let wrapperWidth;
	const pos = tweened(50, { duration: 3000, easing: cubicInOut });

	function getPos(e) {
		let bounds = e.target.getBoundingClientRect();
		var x = e.clientX - bounds.left;
		var y = e.clientY - bounds.top;
		pos.set((x / wrapperWidth) * 100, { duration: 0 });
	}

	function startTimer() {
		let arr = [0, 100];
		let idx = 0;
		function animate() {
			pos.set(arr[idx % arr.length], { duration: 3000 });
			idx++;
		}
		animate();
		timer = setInterval(() => {
			animate();
		}, 3000);
	}

	function endTimer() {
		clearInterval(timer);
		pos.set(50, { duration: 0 });
	}

	onMount(() => {
		startTimer();

		return () => {
			clearInterval(timer);
		};
	});
</script>

<div
	bind:clientWidth={wrapperWidth}
	class="wrapper"
	on:mousemove={getPos}
	on:mouseover={endTimer}
	on:mouseout={startTimer}
>
	<img class="image image-before" src={before} />
	<div class="image-after-wrapper">
		<img
			style={`clip-path: polygon(calc(${$pos}% + 1px) 0, 100% 0, 100% 100%, calc(${$pos}% + 1px) 100%);`}
			class="image image-after"
			src={after}
		/>
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		position: relative;
	}
	.wrapper:hover {
		cursor: col-resize;
	}
	.image-after-wrapper {
		width: 100%;
		position: absolute;
		top: 0;
		display: block;
		filter: drop-shadow(-2px 0 0 hsla(0, 0%, 100%, 0.9));
	}
	.image-after {
		position: absolute;
		top: 0;
		display: block;
	}
	.image {
		width: 100%;
		display: block;
	}
	.bar {
		width: 2px;
		background-color: red;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
