import { session } from "$app/stores"
import { mode } from "$app/env"

export const changeTheme = async () => {
	const host =
		mode === 'development' ? 'http://localhost:3000' : 'https://svelte-embla.vercel.app';

	const theme = await fetch(`${host}/api/theme`, { method: 'POST' })
		.then((res) => res.json())
		.then((res) => res.theme as 'light' | 'dark');

	session.update( $session => {
		$session.theme = theme
		return $session
	} )
}
