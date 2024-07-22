import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  startDay: localStorage.getItem('birthday'),
}

const startDaySlice = createSlice({
    name: 'startDay',
    initialState,
    reducers: {
        setStartDay: (state, action) => {
            state.startDay = action.payload;
            localStorage.setItem('startDay', action.payload);
        },

        clearStartDay: (state) => {
            state.startDay = null;
            localStorage.removeItem('startDay');
        },
    }
})

export const {setStartDay, clearStartDay} = startDaySlice.actions
export default startDaySlice.reducer;