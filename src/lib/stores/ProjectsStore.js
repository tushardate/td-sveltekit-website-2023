import { writable } from 'svelte/store';

export const ProjectArray = writable([]);

export const setAllProjects = (payload) => {
	ProjectArray.set(payload);
};
