import { render, screen } from '@testing-library/react'
import { generateTestRecipe } from 'src/test/utils'

import EditRecipePage from '@/pages/recipe/[id]/edit'

describe('Edit Recipe Page', () => {
	it('renders', () => {
		const testRecipe = generateTestRecipe()
		render(<EditRecipePage {...testRecipe} />)

		expect(
			screen.getByText(testRecipe.title, { exact: false })
		).toBeInTheDocument()
	})
})
