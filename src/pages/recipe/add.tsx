import { useState } from 'react'

import axios from 'axios'

import { Box, Button, Container, TextField } from '@mui/material'

import Header from '@/components/Header'

export default function AddRecipe() {
	const [title, setTitle] = useState<string>('')
	const [message, setMessage] = useState<string | undefined>()

	function onSuccess(title: string) {
		setMessage(`"${title}" was created successfully`)
		setTitle('')
	}

	async function addRecipe() {
		if (title) {
			const response = await axios.post('/api/recipe/add', { title })

			if (response.data) {
				onSuccess(response.data.title)
			}
		}
	}

	return (
		<>
			<Header />
			<Container sx={{ paddingTop: 4 }}>
				{message}
				<Box sx={{ typography: 'h3' }}>Add New Recipe</Box>
				<Box component="form">
					<Box>
						<TextField
							id="new-recipe-title"
							label="Title"
							onChange={event => setTitle(event.target.value)}
							value={title}
						/>
					</Box>
					<Box>
						<Button onClick={addRecipe}>Add</Button>
					</Box>
				</Box>
			</Container>
		</>
	)
}
