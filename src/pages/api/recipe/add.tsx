import { NextApiRequest, NextApiResponse } from 'next'

import { Prisma } from '@prisma/client'

import prisma from '@/lib/db/prisma'

export default async function addRecipeHandler(
	req: NextApiRequest,
	res: NextApiResponse<Prisma.RecipeGetPayload<Prisma.RecipeArgs>>
) {
	try {
		const { title } = req.body

		const response = await prisma.recipe.create({ data: { title } })
		res.status(200).json(response)
	} catch (e) {
		console.warn('An error occurred adding recipe')
		res.status(500)
	}
}
