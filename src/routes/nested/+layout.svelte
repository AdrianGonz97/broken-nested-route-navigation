<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import { logout, me } from "$lib/auth.remote.js";

	let { children } = $props();

	const user = $derived(await me());
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if user}
	<form {...logout}>
		<button type="submit">Logout</button>
	</form>
{/if}

<br />
{@render children()}
