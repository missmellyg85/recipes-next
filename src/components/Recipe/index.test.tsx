import { render, screen } from '@testing-library/react'
import { generateTestRecipe } from 'src/test/utils'

import { Recipe } from '.'

describe('Recipe Page', () => {
	it('renders the recipe', () => {
		const testRecipe = generateTestRecipe()
		render(<Recipe recipe={testRecipe} />)

		expect(
			screen.getByText(testRecipe.title, { exact: false })
		).toBeInTheDocument()
	})

	it('shows a View link instead of Edit when featuredRecipe is true', () => {
		const testRecipe = generateTestRecipe()
		render(<Recipe isFeatureView={true} recipe={testRecipe} />)

		expect(screen.getByRole('link', { name: 'View' })).toBeInTheDocument()
	})
})
