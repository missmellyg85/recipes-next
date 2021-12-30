import { render } from '@testing-library/react'

import HomePage from '../pages'

describe('HomePage', () => {
	it('renders', () => {
		const { getByText } = render(<HomePage />)

		expect(getByText('Recipes Index')).toBeInTheDocument()
	})
})
