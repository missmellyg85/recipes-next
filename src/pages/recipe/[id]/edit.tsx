import { Params } from 'next/dist/server/router'

import { RecipeWithIngredientsAndInstructions } from '@/ts/types'

import { Box, Container } from '@mui/material'

import Header from '@/components/Header'

import prisma from '@/lib/db/prisma'

export default function EditRecipePage({
	id,
	title,
}: // ingredients,
// instructions,
RecipeWithIngredientsAndInstructions) {
	return (
		<>
			<Header />
			<Container id={`recipe-${id}`} sx={{ marginTop: 4 }}>
				<Box typography="h3">Edit {title}</Box>
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
