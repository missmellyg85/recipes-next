import { Params } from 'next/dist/server/router'

import { Recipe } from '@/ts/types'

import Header from '@/components/Header'

import { recipesList } from '@/lib/consts/data'

export default function RecipePage({ id, title }: Recipe) {
	return (
		<>
			<Header />
			<p>
				Recipe: {id}, {title}
			</p>
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
