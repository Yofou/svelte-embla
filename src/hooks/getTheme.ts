import type { Handle } from '@sveltejs/kit';
import cookie from 'cookie';

export const getTheme: Handle = async ({ event, resolve }) => {
	event.locals.theme = cookie.parse(event.request.headers.get('cookie') ?? '')?.theme ?? 'light';

	const response = await resolve(event);
	return response;
};
