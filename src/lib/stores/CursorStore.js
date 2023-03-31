import { writable } from 'svelte/store';

export const cursorStore = writable({
	shape: 'none'
});

export function isArrow() {
	cursorStore.update((state) => ({
		...state,
		shape: 'arrow'
	}));
}

export function isDot() {
	cursorStore.update((state) => ({
		...state,
		shape: 'dot'
	}));
}

export function isNone() {
	cursorStore.update((state) => ({
		...state,
		shape: 'none'
	}));
}
