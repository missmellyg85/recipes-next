import React from 'react'

import Link from 'next/link'

import recipesList from './api/recipesList.json'

export default function HomePage() {
	return (
		<>
			<h1>Welcome to Next.js!</h1>
			<ul>
				{recipesList.map(({ id, title }) => (
					<li key={`recipe-${id}`}>
						<Link href={`/recipes/${id}`}>
							<a>{title}</a>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
