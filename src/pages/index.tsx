import React from 'react'

import { Box, Container, Link, List, ListItem } from '@mui/material'

import { recipesList } from '@/lib/consts/data'

export default function HomePage() {
	return (
		<Container sx={{ paddingTop: 4 }}>
			<Box sx={{ typography: 'h3' }}>Recipes Index</Box>
			<List>
				{recipesList.map(({ id, title }) => (
					<ListItem key={`recipe-${id}`}>
						<Link href={`/recipes/${id}`} underline="none">
							{title}
						</Link>
					</ListItem>
				))}
			</List>
		</Container>
	)
}
