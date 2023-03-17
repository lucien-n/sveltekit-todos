import PocketBase from 'pocketbase';
import { goto } from '$app/navigation';

const url = 'https://todos.pockethost.io';
export const pb = new PocketBase(url);

export async function signInWithEmailAndPassword(
	email: string,
	password: string
) {
	try {
		await pb.collection('users').authWithPassword(email, password);
		goto('/');
	} catch (error) {
		console.error(error);
	}
}

export async function signUpWithEmailAndPassword(
	email: string,
	password: string
) {
	email = email.toLowerCase();
	try {
		await pb.collection('users').create({
			username: email.split('@')[0].split('.')[0],
			email: email,
			password: password,
			passwordConfirm: password,
		});
	} catch (error) {
		console.error(error);
	}
}

export function signOut() {
	pb.authStore.clear();
	goto('/');
}

export async function postTodo(
	title: string,
	description: string,
	user_id: string
) {
	try {
		await pb.collection('todos').create({
			title: title,
			description: description,
			completed: false,
			user_id: user_id,
		});
	} catch (error) {
		console.error(error);
	}
}

export async function deleteTodo(todo_id: string) {
	try {
		await pb.collection('todos').delete(todo_id);
	} catch (error) {
		console.error(error);
	}
}

export async function updateTodo(todo: any) {
	try {
		await pb.collection('todos').update(todo.id, todo);
	} catch (error) {
		console.error(error);
	}
}
