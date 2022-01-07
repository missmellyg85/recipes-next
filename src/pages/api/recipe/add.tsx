import { NextApiRequest, NextApiResponse } from 'next'

import { Prisma } from '@prisma/client'

import prisma from '@/lib/db/prisma'

export default async function addRecipeHandler(
	req: NextApiRequest,
	res: NextApiResponse<Prisma.RecipeGetPayload<Prisma.RecipeArgs>>
) {
	try {
		const { title, ingredients, instructions } = req.body

		const response = await prisma.recipe.create({
			data: {
				ingredients: { createMany: { data: [...ingredients] } },
				instructions: { createMany: { data: [...instructions] } },
				title,
			},
		})
		res.status(200).json(response)
	} catch (e) {
		console.warn('An error occurred adding recipe', e)
		res.status(500)
	}
}
