import { Params } from 'next/dist/server/router'

import { Recipe } from '@/ts/types'

import { Box, Container } from '@mui/material'

import Header from '@/components/Header'

import { recipesList } from '@/lib/consts/data'

export default function RecipePage({ id, title }: Recipe) {
	return (
		<>
			<Header />
			<Container id={`recipe-${id}`} sx={{ marginTop: 4 }}>
				<Box
					sx={{
						typography: 'h3',
					}}
				>
					{title}
				</Box>
			</Container>
		</>
	)
}

export async function getStaticProps({ params }: Params) {
	const data = recipesList.find(({ id }) => id.toString() === params.id)

	return {
		props: {
			...data,
		},
	}
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: recipesList.map(({ id }) => ({ params: { id: id.toString() } })),
	}
}
