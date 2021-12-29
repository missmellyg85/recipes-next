import { AppBar, Link, Toolbar } from '@mui/material'

export default function Header() {
	return (
		<header>
			<AppBar>
				<Toolbar>
					<Link color="secondary" href="/" underline="none">
						Home
					</Link>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</header>
	)
}
