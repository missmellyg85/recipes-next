import { render, screen } from '@testing-library/react'
import { generateTestRecipes } from 'src/test/utils'

import { RecipeList } from '.'

describe('RecipeList', () => {
	it('renders the recipes', () => {
		const recipes = generateTestRecipes(5)

		render(<RecipeList recipes={recipes} />)

		recipes.forEach(({ title }) => {
			expect(screen.getByRole('link', { name: title })).toBeInTheDocument()
		})
	})

	it.each([undefined, []])('displays a message if no recipes', recipes => {
		render(<RecipeList recipes={recipes} />)

		expect(screen.getByText('No Recipes found'))
	})
})
