<script lang="ts">
	import { deleteTodo, updateTodo } from '$lib/pocketbase';
	import { reload_todo } from '$lib/store';

	export let todo: any;

	let edit_mode: boolean = false;

	function removeTodo() {
		deleteTodo(todo.id);
	}

	function saveEdit() {
		updateTodo({
			id: todo.id,
			title: todo.title,
			description: todo.description,
		});
	}

	function complete() {
		todo.completed = !todo.completed;
		updateTodo({
			id: todo.id,
			completed: todo.completed,
		});
	}
</script>

<div id="todo-{todo.id}" class="flex w-full">
	<div
		class="flex mx-auto w-full p-2 h-fit border-2 border-black "
		class:opacity-30={todo.completed}
	>
		<div class="h-full w-full">
			{#if !edit_mode}
				<h1 class="text-2xl font-bold underline">
					{todo.title}
				</h1>
				<div class="mt-2">
					{todo.description}
				</div>
				<hr class="my-2 border-black" />
				<div class="flex w-full">
					<button
						class="ml-auto p-1 border-2 text-green-500 border-green-500 hover:bg-green-100"
						on:click={(_) => {
							edit_mode = true;
						}}>Edit</button
					>
					<button
						class="p-1 ml-2 border-2 text-red-500 border-red-500 hover:bg-red-100"
						on:click={(_) => removeTodo()}>Delete</button
					>
				</div>
			{:else}
				<div id="edit_title">
					<span class="text-lg">Title</span>
					<input
						class="outline-none focus:underline block w-fit px-3 py-2 border-2 border-black"
						bind:value={todo.title}
					/>
				</div>
				<div id="edit_description">
					<span class="text-lg">Description</span>
					<textarea
						class="flex mt-2 w-full px-3 py-2 border-2 border-black"
						rows="3"
						bind:value={todo.description}
					/>
				</div>
				<div class="mt-2 flex w-full">
					<button
						class="w-1/2 mx-auto p-1 border-2 text-blue-500 border-blue-500 hover:bg-blue-100"
						on:click={saveEdit}>Save</button
					>
				</div>
			{/if}
		</div>
	</div>
	<div class="block">
		<button
			class="border-2 border-black border-l-0 p-1"
			class:border-zinc-400={todo.completed}
			on:click={complete}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="3"
				stroke="currentColor"
				class="w-6 h-6 hover:underline text-green-500"
				class:hidden={todo.completed}
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M4.5 12.75l6 6 9-13.5"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="3"
				stroke="currentColor"
				class="w-6 h-6 hover:underline text-blue-500"
				class:hidden={!todo.completed}
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M19.5 12h-15"
				/>
			</svg>
		</button>
	</div>
</div>
