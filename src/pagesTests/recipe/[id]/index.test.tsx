import { render, screen } from '@testing-library/react'
import { generateTestRecipe } from 'src/test/utils'

import RecipePage from '../../../pages/recipe/[id]'

describe('Recipe Page', () => {
	it('renders', () => {
		const testRecipe = generateTestRecipe()
		render(<RecipePage {...testRecipe} />)

		expect(screen.getByRole('banner')).toBeInTheDocument()
	})
})
