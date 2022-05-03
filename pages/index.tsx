import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from './components/footer'

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="header-global">
				<h1>Ventanas 95</h1>
			</header>
			<main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
				<h1>some kind of body here</h1>
			</main>

			<Footer />
		</div>
	)
}

export default Home
