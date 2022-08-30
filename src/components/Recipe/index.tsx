import Link from 'next/link'

import { RecipeWithIngredientsAndInstructions } from '@/ts/types'

import { Box, List, ListItem, Typography } from '@mui/material'

type RecipeProps = {
	recipe: RecipeWithIngredientsAndInstructions
	isFeatureView?: boolean
}

export function Recipe({
	recipe: { id, title, ingredients, instructions },
	isFeatureView = false,
}: RecipeProps) {
	return (
		<>
			<Box>
				<Typography variant="h3">{title}</Typography>
				{isFeatureView ? (
					<Link href={`${id}`}>View</Link>
				) : (
					<Link href={`${id}/edit`}>Edit</Link>
				)}
			</Box>
			<Box>
				<Typography variant="h4">Ingredients</Typography>

				<List>
					{ingredients?.map(({ description, id }) => (
						<ListItem key={id}>{description}</ListItem>
					))}
				</List>
			</Box>
			<Box>
				<Typography variant="h4">Instructions</Typography>
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
