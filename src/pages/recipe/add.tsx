import { useState } from 'react'

import axios from 'axios'

import { Box, Button, Container, TextField } from '@mui/material'

import { Header } from '@/components/Header'

export default function AddRecipe() {
	const [title, setTitle] = useState<string>('')
	const [message, setMessage] = useState<string | undefined>()
	const [ingredients, setIngredients] = useState<string[]>([''])
	const [instructions, setInstructions] = useState<string[]>([''])

	function setIngredient(index: number, ingredient: string) {
		const newIngredients = [...ingredients]
		newIngredients[index] = ingredient
		setIngredients(newIngredients)
	}

	function addIngredient() {
		setIngredients([...ingredients, ''])
	}

	function setInstruction(index: number, instruction: string) {
		const newInstructions = [...instructions]
		newInstructions[index] = instruction
		setInstructions(newInstructions)
	}

	function addInstruction() {
		setInstructions([...instructions, ''])
	}

	function onSuccess(title: string) {
		setMessage(`"${title}" was created successfully`)
		setTitle('')
	}

	function validStringSetting(val: string) {
		return val && val !== ''
	}

	function formatSetting(val: string) {
		return { description: val }
	}

	function formatRecipe() {
		if (!title || !ingredients.length || !instructions.length) {
			return null
		}
		return {
			ingredients: ingredients.filter(validStringSetting).map(formatSetting),
			instructions: instructions.filter(validStringSetting).map(formatSetting),
			title,
		}
	}

	async function addRecipe() {
		const formattedRecipe = formatRecipe()
		if (formattedRecipe) {
			const response = await axios.post('/api/recipe/add', formattedRecipe)

			if (response.data) {
				onSuccess(response.data.title)
			}
		}
	}

	return (
		<>
			<Header />
			<Container data-testid="add-recipe-container" sx={{ paddingTop: 4 }}>
				{message}
				<Box component="form">
					<Box sx={{ marginBottom: 2 }}>
						<TextField
							fullWidth
							id="new-recipe-title"
							label="New Recipe Title"
							onChange={event => setTitle(event.target.value)}
							value={title}
						/>
					</Box>
					<Box sx={{ marginBottom: 1 }}>Ingredients:</Box>
					<Box>
						{ingredients.map((ingredient, idx) => {
							const ingrNum = idx + 1
							return (
								<TextField
									data-testid={`new-ingredient-${ingrNum}`}
									fullWidth
									id={`new-ingredient-${ingrNum}`}
									key={`new-ingredient-${ingrNum}`}
									label="Ingredient"
									onChange={event => setIngredient(idx, event.target.value)}
									sx={{
										marginBottom: 0.5,
									}}
									value={ingredient}
								/>
							)
						})}
					</Box>
					<Box sx={{ marginBottom: 2, textAlign: 'right' }}>
						<Button data-testid="add-ingredient" onClick={addIngredient}>
							Add Another
						</Button>
					</Box>
					<Box sx={{ marginBottom: 1 }}>Instructions:</Box>
					<Box>
						{instructions.map((instruction, idx) => {
							const instNum = idx + 1
							return (
								<TextField
									data-testid={`new-instruction-${instNum}`}
									fullWidth
									id={`new-instruction-${instNum}`}
									key={`new-instruction-${instNum}`}
									label="Instruction"
									onChange={event => setInstruction(idx, event.target.value)}
									sx={{
										marginBottom: 0.5,
									}}
									value={instruction}
								/>
							)
						})}
					</Box>
					<Box sx={{ marginBottom: 2, textAlign: 'right' }}>
						<Button data-testid="add-instruction" onClick={addInstruction}>
							Add Another
						</Button>
					</Box>
					<Box>
						<Button onClick={addRecipe} variant="contained">
							Save Recipe
						</Button>
					</Box>
				</Box>
			</Container>
		</>
	)
}
