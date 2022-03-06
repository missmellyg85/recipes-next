import { render, screen } from '@testing-library/react'

import About from '../pages/about'

describe('About Page', () => {
	it('renders', () => {
		render(<About />)
		expect(screen.getByText('About')).toBeInTheDocument()
	})

	it('uses name if provided', () => {
		render(<About name="Missy" />)
		expect(screen.getByText('About Missy')).toBeInTheDocument()
	})
})
