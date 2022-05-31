import { useDispatch } from "react-redux"
import { increment } from "../slices/cardSlice"
const Increment = () => {

	const dispatch = useDispatch()

	return (
		<>
			<button onClick={() => dispatch(openModal())}>Increment state</button>

		</>
	)
}

export default Increment 