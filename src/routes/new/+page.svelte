<script lang="ts">
	import { goto } from '$app/navigation';
	import { postTodo } from '$lib/pocketbase';
	import { user } from '$lib/store';

	let title = '';
	let description = '';

	function createTodo() {
		if (!$user) {
			console.log('User not found');
			return;
		}

		postTodo(title, description, $user.id);
		goto('/');
	}
</script>

<div class="pointer-events-none flex h-full w-full">
	<div
		class="pointer-events-auto mx-auto w-3/5 self-center border-2 border-black p-4"
	>
		<div class="flex justify-between">
			<div id="inputs" class="w-full">
				<div id="title">
					<span class="text-lg">Title</span>
					<input
						type="text"
						class="block w-full px-3 py-2 border-2 border-black"
						bind:value={title}
					/>
				</div>
				<div id="description">
					<span class="text-lg">Description</span>
					<textarea
						rows="6"
						class="block w-full px-3 py-2 border-2 border-black"
						bind:value={description}
					/>
				</div>
			</div>
		</div>
		<br />
		<button
			class="mx-auto block border-2 border-black p-2"
			on:click={(_) => createTodo()}>Create</button
		>
	</div>
</div>
