import { useRouter } from 'next/router'

import { Prisma } from '@prisma/client'

import { List, ListItem, ListItemButton } from '@mui/material'

type RecipeListProps = {
	recipes?: Prisma.RecipeGetPayload<Prisma.RecipeArgs>[]
}

export function RecipeList({ recipes }: RecipeListProps) {
	const router = useRouter()
	if (recipes?.length) {
		return (
			<List>
				{recipes?.map(({ id, title }) => (
					<ListItem disablePadding key={`recipe-${id}`}>
						<ListItemButton onClick={() => router.push(`/recipe/${id}`)}>
							{title}
						</ListItemButton>
					</ListItem>
				))}
			</List>
		)
	} else {
		return <div>No Recipes found</div>
	}
}
