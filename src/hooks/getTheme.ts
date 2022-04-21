import type { Handle } from '@sveltejs/kit';
import cookie from 'cookie';

export const getTheme: Handle = async ({ event, resolve }) => {
	const parsed = cookie.parse(event.request.headers.get('cookie') ?? '')?.theme ?? 'light';
	event.locals.theme = parsed as 'light' | 'dark';

	const response = await resolve(event);
	return response;
};
