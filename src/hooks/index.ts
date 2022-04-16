import type { GetSession, Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { getTheme } from './getTheme';

export const handle: Handle = sequence(getTheme);

export const getSession: GetSession = (event) => {
	return event.locals;
};
