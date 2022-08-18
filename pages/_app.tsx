import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CoursesProvider } from '../context/CoursesContext'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CoursesProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CoursesProvider>
	)
}

export default MyApp
