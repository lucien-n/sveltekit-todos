<script lang="ts">
	import '../app.css';
	import { goto } from '$app/navigation';
	import { user } from '$lib/store';
	import { signOut } from '$lib/pocketbase';
</script>

<nav class="fixed z-50 p-3 w-full">
	<div class="mx-auto flex w-2/3 p-2 border-2 border-black justify-between">
		<!-- Home -->
		<div class="flex self-center">
			<button class="text-lg" on:click={(_) => goto('/')}>Todos</button>
		</div>

		<!-- New todo -->
		<div class="flex self-center" class:hidden={!$user}>
			<button
				class="text-lg underline font-bold"
				on:click={(_) => goto('/new')}>New Todo</button
			>
		</div>

		<!-- Auth -->
		<div class="flex cursor-pointer self-center" class:hidden={$user}>
			<button
				class="border-2 border-black p-2"
				on:click={(_) => goto('/auth')}>Sign In</button
			>
		</div>
		<div class="flex cursor-pointer self-center" class:hidden={!$user}>
			<button
				class="border-2 border-black p-2"
				on:click={(_) => signOut()}>Sign Out</button
			>
		</div>
	</div>
</nav>
