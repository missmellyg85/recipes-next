import { render } from '@testing-library/react'

import About from '../pages/about'

describe('About Page', () => {
	it('renders', () => {
		const { getByText } = render(<About />)
		expect(getByText('About')).toBeInTheDocument()
	})

	it('uses name if provided', () => {
		const { getByText } = render(<About name="Missy" />)
		expect(getByText('About Missy')).toBeInTheDocument()
	})
})
