import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from "../store"
import { Provider } from "react-redux"
import Modal from 'react-modal';

// what store are you using, add provider 
Modal.setAppElement('#__next');
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>

	)
}

export default MyApp
