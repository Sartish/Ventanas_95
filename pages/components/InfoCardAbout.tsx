


const InfoCardAbout = (props: any) => {
	return (
		<>
			<div className="card border-2 border-solid border-red h-[100px]">
				<div className="card-header text-center bg-tertiary"> <span>Ventanas95</span>
				</div>
				<div className="card-body">
					<p className="card-text"> We build awesome websites <span className="text-italic">just contact us here</span>
					</p>
					<button
						onClick={() => props.setOpenInfoBoxAbout(false)}
						className="btn btn-sm mr-2 btn-primary border-dark" type="button"><span className="btn-text">OK</span></button>
				</div>
			</div>
		</>
	)
}

export default InfoCardAbout

