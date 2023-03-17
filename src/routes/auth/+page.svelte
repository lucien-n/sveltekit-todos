<script lang="ts">
	import {
		signInWithEmailAndPassword,
		signUpWithEmailAndPassword,
	} from '../../lib/pocketbase';

	let email = '';
	let password = '';

	let email_regex = RegExp('^[^@]+@[^@]+.[^@]+$');

	function checkEmail() {
		if (email.match(email_regex)) return true;

		console.error('Email format not valid');
		return false;
	}

	async function signIn() {
		if (!checkEmail()) return;

		if (password.length < 8) {
			console.error('Password length must be 8 or greater');
			return;
		}

		signInWithEmailAndPassword(email, password);
	}

	async function signUp() {
		if (!checkEmail()) return;

		if (password.length < 8) {
			console.error('Password length must be 8 or greater');
			return;
		}

		signUpWithEmailAndPassword(email, password);
	}
</script>

<div class="pointer-events-none flex h-full w-full">
	<div
		class="pointer-events-auto mx-auto w-fit self-center border-2 border-black p-4"
	>
		<div class="flex justify-between">
			<div id="inputs">
				<div id="email">
					<span class="text-lg">Email</span>
					<input
						type="email"
						class="block w-full px-3 py-2 border-2 border-black"
						bind:value={email}
					/>
				</div>
				<div id="password">
					<span class="text-lg">Password</span>
					<input
						type="password"
						class="block w-full px-3 py-2 border-2 border-black"
						bind:value={password}
					/>
				</div>
			</div>
		</div>
		<br />
		<button
			class="mx-auto block border-2 border-black p-2"
			on:click={(_) => signIn()}>Sign In</button
		>
		<button
			class="mx-auto mt-2 block border-2 border-black p-2"
			on:click={(_) => signUp()}
		>
			Create an account
		</button>
	</div>
</div>
