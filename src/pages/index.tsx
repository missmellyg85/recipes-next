import React from 'react'

import { Prisma } from '@prisma/client'

import { Box, Container, Link, List, ListItem } from '@mui/material'

import prisma from '@/lib/db/prisma'

type HomePageProps = {
	recipes?: Prisma.RecipeGetPayload<Prisma.RecipeArgs>[]
}

export default function HomePage({ recipes }: HomePageProps) {
	return (
		<Container sx={{ paddingTop: 4 }}>
			<Box sx={{ typography: 'h3' }}>Recipes Index</Box>
			<List>
				{recipes?.map(({ id, title }) => (
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

export async function getStaticProps() {
	const recipes = await prisma.recipe.findMany()

	return {
		props: {
			recipes,
		},
	}
}
