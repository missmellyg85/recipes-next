import { AppProps } from 'next/app'

import { EmotionCache } from '@emotion/cache'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { clientSideEmotionCache } from 'src/styles/styleCache'
import { theme } from 'src/styles/theme'

import { CssBaseline } from '@mui/material'

type MyAppProps = AppProps & {
	emotionCache: EmotionCache
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
				<CssBaseline />
			</ThemeProvider>
		</CacheProvider>
	)
}
