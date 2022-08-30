import Link from 'next/link'

import { AppBar, Toolbar } from '@mui/material'

export function Header() {
	return (
		<>
			<AppBar>
				<Toolbar>
					<Link href="/">Home</Link>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	)
}
