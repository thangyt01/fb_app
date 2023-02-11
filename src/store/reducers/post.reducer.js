import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    images: [],
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        set(state, action) {
            state.images = action.payload
        },
        remove(state, action) {
            state.images = state.images.filter((image, index) => index !== action.payload)
        },
        reset(state) {
            state.images = []
        }
    }
})

export const postSelector = (state) => state.postReducer

export const { set, reset, remove } = postSlice.actions

export default postSlice.reducer