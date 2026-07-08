export const handle = async ({ event, resolve }) => {
	const { cookies } = event;
	const user = cookies.get("test-user");

	event.locals.user = user ? { name: user } : null;

	return resolve(event);
};
