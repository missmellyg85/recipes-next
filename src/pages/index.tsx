import React from 'react'

import Link from 'next/link'

import { Prisma } from '@prisma/client'

import { Box, Container } from '@mui/material'

import { RecipeList } from '@/components/RecipeList'

import prisma from '@/lib/db/prisma'

type HomePageProps = {
	recipes?: Prisma.RecipeGetPayload<Prisma.RecipeArgs>[]
}

export default function HomePage({ recipes }: HomePageProps) {
	return (
		<Container sx={{ paddingTop: 4 }}>
			<Box sx={{ typography: 'h3' }}>Recipes Index</Box>
			<RecipeList recipes={recipes} />
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
