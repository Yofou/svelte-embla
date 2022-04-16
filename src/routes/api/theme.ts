import type { RequestHandler } from '@sveltejs/kit';
import cookies from 'cookie';

const flipTheme = (value: string) => (value === 'light' ? 'dark' : 'light');
export const post: RequestHandler = async ({ request }) => {
	const parsed = cookies.parse(request.headers.get('cookie') ?? '');
	const value = parsed.theme ? flipTheme(parsed.theme) : 'dark';
	const theme = cookies.serialize('theme', value, {
		httpOnly: true,
		sameSite: 'lax',
		path: '/'
	});

	return {
		headers: { 'Set-Cookie': theme },
		body: { theme: value }
	};
};
