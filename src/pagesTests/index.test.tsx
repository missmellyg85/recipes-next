import { render, screen } from '@testing-library/react'

import HomePage from '../pages'

describe('HomePage', () => {
	it('renders', () => {
		render(<HomePage />)

		expect(screen.getByText('Recipes Index')).toBeInTheDocument()
	})
})
