<script lang="ts">
	import { me } from "$lib/auth.remote.js";

	const user = $derived(await me());
</script>

{user.name}, you can press the logout button now...
