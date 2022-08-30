import { createTheme } from '@mui/material'

export const theme = createTheme({
	palette: {
		primary: {
			contrastText: 'white',
			main: '#3f51b5',
		},
		secondary: {
			contrastText: 'black',
			main: '#f50057',
		},
	},
})
