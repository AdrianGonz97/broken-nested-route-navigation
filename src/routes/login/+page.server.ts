import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { resolve } from "$app/paths";

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		redirect(307, resolve("/nested/[name]/foo", { name: locals.user.name }));
	}
};
