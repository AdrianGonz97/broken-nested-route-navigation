<script lang="ts">
	import { logout, me } from "$lib/auth.remote.js";

	let { children } = $props();

	const user = $derived(await me());
</script>

{#if user}
	<form {...logout}>
		<button type="submit">Logout</button>
	</form>
{/if}

<br />
{@render children()}
