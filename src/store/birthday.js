import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  birthday: localStorage.getItem('birthday'),
}

const birthdaySlice = createSlice({
    name: 'birthday',
    initialState,
    reducers: {
        setBirthday: (state, action) => {
            state.birthday = action.payload;
            localStorage.setItem('birthday', action.payload);
        },

        clearBirthday: (state) => {
            state.birthday = null;
            localStorage.removeItem('birthday');
        },
    }
})

export const {setBirthday, clearBirthday} = birthdaySlice.actions
export default birthdaySlice.reducer;