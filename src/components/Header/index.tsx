import Link from 'next/link'

import { AppBar, Toolbar } from '@mui/material'

export default function Header() {
	return (
		<header>
			<AppBar>
				<Toolbar>
					<Link href="/">Home</Link>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</header>
	)
}
