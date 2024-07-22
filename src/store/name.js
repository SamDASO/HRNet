import { createSlice } from "@reduxjs/toolkit";

  
  const initialState= {
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),
  };

const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            localStorage.setItem('firstName', action.payload.firstName);
            localStorage.setItem('lastName', action.payload.lastName);
          },
          clearName: (state) => {
            state.firstName = null;
            state.lastName = null;
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');
          },
    }
})

export const {setName, clearName} = nameSlice.actions
export default nameSlice.reducer;