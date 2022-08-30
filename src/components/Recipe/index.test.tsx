import { render, screen } from '@testing-library/react'
import { generateTestRecipe } from 'src/test/utils'

import { RecipeWithIngredientsAndInstructions } from '@/ts/types'

import { Recipe } from '.'

describe('Recipe Page', () => {
	it('renders the recipe', () => {
		const testRecipe = generateTestRecipe()
		render(<Recipe {...testRecipe} />)

		expect(
			screen.getByText(testRecipe.title, { exact: false })
		).toBeInTheDocument()
	})
})
