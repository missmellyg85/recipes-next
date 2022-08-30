import Link from 'next/link'

import { Prisma } from '@prisma/client'

import { List, ListItem } from '@mui/material'

type RecipeListProps = {
	recipes?: Prisma.RecipeGetPayload<Prisma.RecipeArgs>[]
}

export function RecipeList({ recipes }: RecipeListProps) {
	if (recipes?.length) {
		return (
			<List>
				{recipes?.map(({ id, title }) => (
					<ListItem key={`recipe-${id}`}>
						<Link href={`/recipe/${id}`}>{title}</Link>
					</ListItem>
				))}
			</List>
		)
	} else {
		return <div>No Recipes found</div>
	}
}
