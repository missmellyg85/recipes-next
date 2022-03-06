import { render, screen } from '@testing-library/react'

import { RecipeWithIngredientsAndInstructions } from '@/ts/types'

import EditRecipePage from '@/pages/recipe/[id]/edit'

describe('Edit Recipe Page', () => {
	it('renders', () => {
		const testRecipe: RecipeWithIngredientsAndInstructions = {
			createdAt: new Date(),
			id: 1234,
			ingredients: [],
			instructions: [],
			title: 'Some Test',
			updatedAt: new Date(),
		}
		render(<EditRecipePage {...testRecipe} />)

		expect(
			screen.getByText(testRecipe.title, { exact: false })
		).toBeInTheDocument()
	})
})
