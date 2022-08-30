import { Params } from 'next/dist/server/router'
import Link from 'next/link'

import { RecipeWithIngredientsAndInstructions } from '@/ts/types'

import { Box, Container, List, ListItem } from '@mui/material'

import { Header } from '@/components/Header'
import { Recipe } from '@/components/Recipe'

import prisma from '@/lib/db/prisma'

export default function RecipePage(
	recipe: RecipeWithIngredientsAndInstructions
) {
	return (
		<>
			<Header />
			<Container id={`recipe-${recipe.id}`} sx={{ marginTop: 4 }}>
				<Recipe {...recipe} />
			</Container>
		</>
	)
}

export async function getStaticProps({ params }: Params) {
	const recipe = await prisma.recipe.findFirst({
		include: {
			ingredients: true,
			instructions: true,
		},
		where: { id: parseInt(params.id) },
	})

	return {
		props: {
			...recipe,
		},
	}
}

export async function getStaticPaths() {
	const recipes = await prisma.recipe.findMany()

	return {
		fallback: false,
		paths: recipes.map(({ id }) => ({ params: { id: id.toString() } })),
	}
}
