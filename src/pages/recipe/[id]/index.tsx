import { Params } from 'next/dist/server/router'
import Link from 'next/link'

import { RecipeWithIngredientsAndInstructions } from '@/ts/types'

import { Box, Container, List, ListItem } from '@mui/material'

import Header from '@/components/Header'

import prisma from '@/lib/db/prisma'

export default function RecipePage({
	id,
	title,
	ingredients,
	instructions,
}: RecipeWithIngredientsAndInstructions) {
	return (
		<>
			<Header />
			<Container id={`recipe-${id}`} sx={{ marginTop: 4 }}>
				<Box typography="h3">
					{title} <Link href={`${id}/edit`}>Edit</Link>
				</Box>
				<Box>
					<Box typography="h4">Ingredients</Box>

					<List>
						{ingredients?.map(({ description, id }) => (
							<ListItem key={id}>{description}</ListItem>
						))}
					</List>
				</Box>
				<Box>
					<Box typography="h4">Instructions</Box>
					<List>
						{instructions?.map(({ description, id, order }, idx) => (
							<ListItem key={id}>
								{`${order || idx + 1}. `}
								{description}
							</ListItem>
						))}
					</List>
				</Box>
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
