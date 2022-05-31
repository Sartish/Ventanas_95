

import React, { useState } from "react"
import clients from "/img/clients.png"
import contact from "/img/contact.png"
import aboutus from "/img/aboutus.png"
import pricing from "/img/pricing.png"
import Image from 'next/image'
import InfoCardClient from "./InfoCardClient"
import InfoCardContact from "./InfoCardContact"
import InfoCardAbout from "./InfoCardAbout"
import InfoCardPricing from "./InfoCardPricing"
import Modal from 'react-modal';

const Navbar = () => {



	const [openInfoBox, setOpenInfoBox] = useState(false)
	const [openInfoBoxContact, setOpenInfoBoxContact] = useState(false)
	const [openInfoBoxAbout, setOpenInfoBoxAbout] = useState(false)
	const [openInfoBoxPricing, setOpenInfoBoxPricing] = useState(false)


	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
	}

	function closeModal() {
		setIsOpen(false);
	}


	return (
		<>
			<div className="flex md:flex-col p-2 mt-10 md:w-[100px] md:top-0 border-4 border-solid border-black">
				<button
					onClick={() => setOpenInfoBox(true)}
					className="p-2">
					<Image
						src={clients}
						alt="client icon"
						width="50px"
						height="50px"
					/>
					<p>clients</p>
				</button>


				<button
					onClick={() => setOpenInfoBoxContact(true)}
					className="p-2">
					<Image
						src={contact}
						alt="contact icon"
						width="50px"
						height="50px"
					/>
					<p>contact us</p>
				</button>


				<button
					onClick={() => setOpenInfoBoxAbout(true)}
					className="p-2"
				>
					<Image
						src={aboutus}
						alt="about us icon"
						width="50px"
						height="50px"
					/>
					<p>about us</p>
				</button>


				<button
					onClick={() => setOpenInfoBoxPricing(true)}
					className="p-2">
					<Image
						src={pricing}
						alt="pricing icon"
						width="50px"
						height="50px"
					/>
					<p>pricing</p>
				</button>

			</div>
			<div>
				<button onClick={openModal}>Open Modal</button>
				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={afterOpenModal}
					onRequestClose={closeModal}
					contentLabel="Example Modal"
				>
					<h2>Hello</h2>
					<button onClick={closeModal}>close</button>
					<div>I am a modal</div>
					<form>
						<input />
						<button>tab navigation</button>
						<button>stays</button>
						<button>inside</button>
						<button>the modal</button>
					</form>
				</Modal>
			</div>


			<div>
				{openInfoBox && <InfoCardClient setOpenInfoBox={setOpenInfoBox} />}
				{openInfoBoxContact && <InfoCardContact setOpenInfoBoxContact={setOpenInfoBoxContact} />}
				{openInfoBoxAbout && <InfoCardAbout setOpenInfoBoxAbout={setOpenInfoBoxAbout} />}
				{openInfoBoxPricing && <InfoCardPricing setOpenInfoBoxPricing={setOpenInfoBoxPricing} />}
			</div>
		</>
	)
}

export default Navbar