import { createTheme } from '@mui/material'

export const theme = createTheme({
	// This doesn't work
	// components: {
	// 	MuiLink: {
	// 		defaultProps: {
	// 			underline: 'none',
	// 		},
	// 	},
	// },
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
