import { render } from '@testing-library/react'

import { RecipeWithIngredientsAndInstructions } from '@/ts/types'

import RecipePage from '../../pages/recipe/[id]'

describe('Recipe Page', () => {
	it('renders the recipe', () => {
		const testRecipe: RecipeWithIngredientsAndInstructions = {
			createdAt: new Date(),
			id: 1234,
			ingredients: [],
			instructions: [],
			title: 'Some Test',
			updatedAt: new Date(),
		}
		const { getByText } = render(<RecipePage {...testRecipe} />)

		expect(getByText(testRecipe.title, { exact: false })).toBeInTheDocument()
	})
})
