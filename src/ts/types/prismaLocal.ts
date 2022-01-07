import { Prisma } from '@prisma/client'

const localRecipe = Prisma.validator<Prisma.RecipeArgs>()({
	select: {
		id: true,
		title: true,
	},
})

export type LocalRecipe = Prisma.RecipeGetPayload<typeof localRecipe>
