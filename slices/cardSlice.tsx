import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: false,
	//username
	//email
	//
}

export const cardSlice = createSlice({
	name: "card",
	initialState,
	reducers: {
		openModal: (state) => {
			state.value = true
		},
		closeModal: (state) => {
			state.value = false
		},
		changeModal: (state, action) => {
			state.value += action.payload
		}
	}

})

export const { openModal, closeModal, changeModal } = cardSlice.actions;
export default cardSlice.reducer;
