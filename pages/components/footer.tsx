import React, { useState, useEffect } from "react"

const Footer = () => {
	// new date sets the current date, we want to set it every second with setDate(new Date())
	const [date, setDate] = useState(new Date())

	//setting how often we want it to be called


	useEffect(() => {
		// interval every 1000ms, clean up function to reset the process and avoid memory leaks 
		const timer = setInterval(() => setDate(new Date()), 1000)
		return function cleanup() {
			clearInterval(timer)
		}
	})


	return (
		<footer id="navbar-main" className="navbar flex w-full flex-row items-center navbar-main navbar-dark justify-between">
			<ul className="navbar-nav navbar-nav-hover flex flex-row items-center">
				<li className="nav-item">
					<a href="index.html" className="nav-link" role="button">
						<span className="nav-link-inner-text">📺 Start</span>
					</a>
				</li>
				<li className="nav-item">
					<a href="docs/introduction.html" className="nav-link" role="button">
						<span className="nav-link-inner-text">📕 Docs</span>
					</a>
				</li>
			</ul>
			<div className="time text-center">
				<span className="text-uppercase"> Time: {date.toLocaleTimeString()}</span>
			</div>

		</footer>
	)
}

export default Footer