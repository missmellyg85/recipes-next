import { fireEvent, render, waitFor, within } from '@testing-library/react'
import axios from 'axios'

import AddRecipe from '@/pages/recipe/add'

jest.mock('axios')

describe('AddRecipe Page', () => {
	const axiosSpy = jest.spyOn(axios, 'post')

	beforeEach(() => {
		jest.resetAllMocks()
	})

	it('renders', () => {
		const { getByTestId } = render(<AddRecipe />)

		expect(getByTestId('add-recipe-container')).toBeInTheDocument()
	})

	it('calls the api with the data', async () => {
		const title = 'Test Recipe Title'
		axiosSpy.mockResolvedValueOnce({ data: { title } })
		const ingredients = Array(2)
			.fill({})
			.map((val, idx) => ({
				description: `Test Ingredient ${idx}`,
			}))
		const instructions = Array(3)
			.fill({})
			.map(idx => ({
				description: `Test Instruction ${idx}`,
			}))

		const { getByLabelText, getByTestId, getByText } = render(<AddRecipe />)

		fireEvent.change(getByLabelText('New Recipe Title'), {
			target: { value: title },
		})

		async function addSetting(
			idx: number,
			setting: string,
			settingVals: any[],
			nextButton: HTMLElement
		) {
			if (idx >= settingVals.length) return

			const settingBlock = getByTestId(`new-${setting}-${idx + 1}`)
			const input = within(settingBlock).getByLabelText(
				setting[0].toUpperCase() + setting.slice(1)
			)

			fireEvent.change(input, {
				target: { value: settingVals[idx].description || '' },
			})
			fireEvent.click(nextButton)

			await waitFor(() => {
				expect(getByTestId(`new-${setting}-${idx + 2}`)).toBeInTheDocument()
			})

			await addSetting(idx + 1, setting, settingVals, nextButton)
		}

		const addIngredientButton = getByTestId('add-ingredient')
		await addSetting(0, 'ingredient', ingredients, addIngredientButton)

		const addInstructionButton = getByTestId('add-instruction')
		await addSetting(0, 'instruction', instructions, addInstructionButton)

		fireEvent.click(getByText('Save Recipe'))

		await waitFor(() => expect(axiosSpy).toBeCalledTimes(1))
		expect(axiosSpy).toBeCalledWith(
			'/api/recipe/add',
			expect.objectContaining({
				ingredients,
				instructions,
				title,
			})
		)
	})

	it('filters out empty ingredients', async () => {
		const title = 'Test Recipe Title'
		axiosSpy.mockResolvedValueOnce({ data: { title } })

		const { getByLabelText, getByTestId, getByText } = render(<AddRecipe />)

		fireEvent.change(getByLabelText('New Recipe Title'), {
			target: { value: title },
		})

		async function addSetting(
			idx: number,
			setting: string,
			settingVal: string,
			nextButton: HTMLElement
		) {
			const settingBlock = getByTestId(`new-${setting}-${idx + 1}`)
			const input = within(settingBlock).getByLabelText(
				setting[0].toUpperCase() + setting.slice(1)
			)

			fireEvent.change(input, {
				target: { value: settingVal },
			})
			fireEvent.click(nextButton)

			await waitFor(() => {
				expect(getByTestId(`new-${setting}-${idx + 2}`)).toBeInTheDocument()
			})
		}

		const addIngredientButton = getByTestId('add-ingredient')
		await addSetting(0, 'ingredient', 'ingredient-1', addIngredientButton)
		await addSetting(1, 'ingredient', '', addIngredientButton)

		const addInstructionButton = getByTestId('add-instruction')
		await addSetting(0, 'instruction', '', addInstructionButton)
		await addSetting(1, 'instruction', 'instruction-2', addInstructionButton)

		fireEvent.click(getByText('Save Recipe'))

		await waitFor(() => expect(axiosSpy).toBeCalledTimes(1))
		expect(axiosSpy).toBeCalledWith(
			'/api/recipe/add',
			expect.objectContaining({
				ingredients: [{ description: 'ingredient-1' }],
				instructions: [{ description: 'instruction-2' }],
				title,
			})
		)
	})
})
