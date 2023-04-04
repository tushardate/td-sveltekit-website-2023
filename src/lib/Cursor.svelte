<script>
	import { onMount } from 'svelte';
	import { spring, tweened } from 'svelte/motion';
	import { cubicOut, quartOut } from 'svelte/easing';
	import { cursorStore, isNone } from '$lib/stores/CursorStore.js';

	// let coords = spring(
	// 	{ x: 300, y: 0 },
	// 	{
	// 		stiffness: 0.15,
	// 		damping: 0.5
	// 	}
	// );

	let coords = tweened(
		{ x: 300, y: 0 },
		{
			duration: 150,
			easing: cubicOut
		}
	);

	// let size = spring(0.2, {
	// 	stiffness: 0.1,
	// 	damping: 0.5
	// });

	// let opacity = spring(0);

	let tweenProps = {
		duration: 300,
		easing: quartOut
	};

	let size = tweened(0.2, tweenProps);

	let opacity = tweened(0, tweenProps);

	$: {
		if ($cursorStore.shape === 'arrow') {
			opacity.set(1);
			size.set(1);
		} else if ($cursorStore.shape === 'dot') {
			opacity.set(0);
			size.set(1);
		} else {
			opacity.set(0);
			size.set(0.2);
		}
	}

	const updatePosition = (e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	};

	const handleCursorDown = (e) => {
		if ($cursorStore.shape !== 'none') {
			size.set(0.85, { duration: 100 });
		}
	};
	const handleCursorUp = (e) => {
		if ($cursorStore.shape !== 'none') {
			size.set(1, { duration: 100 });
		}
	};

	$: cursorMove = `transform: translate(${$coords.x}px, ${$coords.y}px)`;

	onMount(() => {
		isNone();
		// let atags = document.querySelectorAll('a');
		// for (let elem of atags) {
		// 	elem.addEventListener('mouseover', handleNavigationHover);
		// 	elem.addEventListener('mouseleave', handleNavigationLeave);
		// }
		document.addEventListener('mousemove', updatePosition);
		document.addEventListener('mousedown', handleCursorDown);
		document.addEventListener('mouseup', handleCursorUp);

		return () => {
			document.removeEventListener('mousemove', updatePosition);
			document.removeEventListener('mousedown', handleCursorDown);
			document.removeEventListener('mouseup', handleCursorUp);
			// for (let elem of atags) {
			// 	elem.removeEventListener('mouseover', handleNavigationHover);
			// 	elem.removeEventListener('mouseleave', handleNavigationLeave);
			// }
		};
	});
</script>

<div class="cursor" style={cursorMove}>
	<div class="dotWrapper">
		<svg
			style={`transform: translate(-50%, -50%) scale(${$size}); opacity: ${1 - $opacity}`}
			viewBox="0 0 84 84"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="42" cy="42" r="42" />
		</svg>
	</div>
	<div class="arrowWrapper">
		<svg
			style={`transform: translate(-50%, -50%) scale(${$size}); opacity: ${$opacity}`}
			viewBox="0 0 84 84"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84ZM67.4647 41.3393L46.9808 20.8554L43.4591 24.3771L57.9659 38.8192L20.455 38.7869L20.455 43.8271L57.9659 43.8594L43.4914 58.3339L47.0131 61.791L67.4647 41.3393Z"
			/>
		</svg>
	</div>
</div>

<style>
	:global(html) {
		cursor: none;
	}
	:global(html a) {
		cursor: none;
	}
	.cursor {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		pointer-events: none;
		background: black;
		mix-blend-mode: difference;
	}

	.cursor circle {
		fill: white;
	}

	.cursor path {
		fill: white;
	}

	.dotWrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 84px;
		height: 84px;
	}
	.arrowWrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 84px;
		height: 84px;
	}
</style>
