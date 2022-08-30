import React from 'react'

import Link from 'next/link'

import { Prisma } from '@prisma/client'

import { RecipeWithIngredientsAndInstructions } from '@/ts/types'

import { Box, Grid, Typography } from '@mui/material'

import { Recipe } from '@/components/Recipe'
import { RecipeList } from '@/components/RecipeList'

import prisma from '@/lib/db/prisma'

type HomePageProps = {
	recipes?: Prisma.RecipeGetPayload<Prisma.RecipeArgs>[]
	featuredRecipe?: RecipeWithIngredientsAndInstructions
}

export default function HomePage({ recipes, featuredRecipe }: HomePageProps) {
	return (
		<Grid container sx={{ paddingTop: 4 }}>
			<Grid item xs={12}>
				<Typography variant="h1">Home</Typography>
			</Grid>
			<Grid item xs={6}>
				<Typography variant="h2">Recipes Index</Typography>
				<RecipeList recipes={recipes} />
				<Box>
					<Link href="/recipe/add">Add New</Link>
				</Box>
			</Grid>
			<Grid item xs={6}>
				<Typography variant="h2">Featured Recipe</Typography>
				{featuredRecipe && (
					<Recipe isFeatureView={true} recipe={featuredRecipe} />
				)}
			</Grid>
		</Grid>
	)
}

export async function getStaticProps() {
	const recipes = await prisma.recipe.findMany()

	const featuredRecipeId =
		recipes[Math.floor(Math.random() * recipes.length)].id

	const featuredRecipe = await prisma.recipe.findFirst({
		include: {
			ingredients: true,
			instructions: true,
		},
		where: { id: featuredRecipeId },
	})

	return {
		props: {
			featuredRecipe,
			recipes,
		},
	}
}
