<script lang="ts">
	import Todo from '$lib/Todo.svelte';
	import { pb } from '$lib/pocketbase';
	import { reload_todo, user } from '$lib/store';

	let get_todos: any;

	async function getTodos() {
		const query = await pb.collection('todos').getFullList(10, {
			sort: 'created',
		});

		return query;
	}

	const _ = reload_todo.subscribe((_) => {
		get_todos = getTodos();
	});
</script>

<main class="mx-auto h-full w-full">
	{#if $user}
		<section
			id="todos"
			class="mx-auto w-3/5 h-full overflow-y-scroll pt-24"
		>
			{#await get_todos then todos}
				{#each todos as todo}
					<Todo {todo} />
					<br />
				{/each}
			{/await}
		</section>
	{:else}
		<section class="flex w-full h-full">
			<div class="m-auto text-xl">
				Please <a href="/auth" class=" underline">sign in</a> to
				<b>create</b>
				and
				<b>access</b> your todos
			</div>
		</section>
	{/if}
</main>
