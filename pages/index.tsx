import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from './components/Footer'
import InfoCard from './components/InfoCardClient'
import Navbar from './components/Navbar'
import WelcomeCard from './components/WelcomeCard'


const Home: NextPage = () => {
	return (
		<div className="w-screen h-screen bg-secondary">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="header-global">
				<h1>Ventanas 95</h1>
			</header>
			<main className="flex justify-between flex-col md:flex-row border-2 border-solid border-black">
				<Navbar />
				<div className="border-2 border-solid border-black flex items-center">
					<WelcomeCard />
				</div>
				<div>
				</div>
			</main>
			<footer className="fixed bottom-0 w-full">
				<Footer />
			</footer>
		</div >
	)
}

export default Home
