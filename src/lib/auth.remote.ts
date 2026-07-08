import { resolve } from "$app/paths";
import { form, getRequestEvent, query } from "$app/server";
import { redirect } from "@sveltejs/kit";

export const login = form(() => {
	const { locals, cookies } = getRequestEvent();

	const name = "JohnDoe";

	locals.user = { name };

	cookies.set("test-user", name, { path: "/" });

	redirect(303, resolve("/nested/[name]/foo", { name }));
});

export const logout = form(async () => {
	const { locals, cookies } = getRequestEvent();

	locals.user = null;

	cookies.delete("test-user", { path: "/" });

	redirect(303, resolve("/login"));
});

export const me = query(() => {
	const { locals } = getRequestEvent();

	return locals.user ?? redirect(307, resolve("/login"));
});
