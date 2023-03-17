import { writable } from 'svelte/store';
import { pb } from './pocketbase';

export const user = writable(pb.authStore.model);
export const reload_todo = writable(0);
