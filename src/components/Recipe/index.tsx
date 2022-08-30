import Link from 'next/link'

import { RecipeWithIngredientsAndInstructions } from '@/ts/types'

import { Box, List, ListItem } from '@mui/material'

export function Recipe({
	id,
	title,
	ingredients,
	instructions,
}: RecipeWithIngredientsAndInstructions) {
	return (
		<>
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
		</>
	)
}
