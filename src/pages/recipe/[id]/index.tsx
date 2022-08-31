import { Params } from 'next/dist/server/router'

import { RecipeWithIngredientsAndInstructions } from '@/ts/types'

import { Container } from '@mui/material'

import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout/Layout'
import { Recipe } from '@/components/Recipe'

import prisma from '@/lib/db/prisma'

export default function RecipePage(
	recipe: RecipeWithIngredientsAndInstructions
) {
	return (
		<Layout>
			<Container id={`recipe-${recipe.id}`} sx={{ marginTop: 4 }}>
				<Recipe recipe={recipe} />
			</Container>
		</Layout>
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
