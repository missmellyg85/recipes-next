import { render, screen } from '@testing-library/react'

import { RecipeWithIngredientsAndInstructions } from '@/ts/types'

import HomePage from '../pages'

describe('HomePage', () => {
	it('renders', () => {
		render(<HomePage />)

		expect(screen.getByText('Recipes Index')).toBeInTheDocument()
	})

	it('renders the recipes', () => {
		const recipes: RecipeWithIngredientsAndInstructions[] = Array(5)
			.fill({})
			.map((val, idx) => ({
				createdAt: new Date(),
				id: parseInt(`10${idx}`),
				ingredients: [],
				instructions: [],
				title: `Test Recipe ${idx}`,
				updatedAt: new Date(),
			}))
		expect(recipes.length).toBeGreaterThan(0)

		render(<HomePage recipes={recipes} />)

		recipes.forEach(({ title }) => {
			expect(screen.getByRole('link', { name: title })).toBeInTheDocument()
		})
	})
})
