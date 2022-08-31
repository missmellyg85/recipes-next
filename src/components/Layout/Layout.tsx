import { Grid } from '@mui/material'

import { Header } from '../Header'

type LayoutProps = {
	children?: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<Grid container>{children}</Grid>
		</>
	)
}
