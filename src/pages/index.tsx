import React from 'react'

import Link from 'next/link'

import { Prisma } from '@prisma/client'

import { Box, Container, List, ListItem } from '@mui/material'

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
						<Link href={`/recipe/${id}`}>{title}</Link>
					</ListItem>
				))}
			</List>
			<Box>
				<Link href="/recipe/add">Add New</Link>
			</Box>
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
