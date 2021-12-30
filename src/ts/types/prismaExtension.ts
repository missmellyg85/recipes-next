import { Prisma } from '@prisma/client'

const recipeWithIngredientsAndInstructions =
	Prisma.validator<Prisma.RecipeArgs>()({
		include: {
			ingredients: true,
			instructions: true,
		},
	})

export type RecipeWithIngredientsAndInstructions = Prisma.RecipeGetPayload<
	typeof recipeWithIngredientsAndInstructions
>
