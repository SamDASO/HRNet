import { createSlice } from "@reduxjs/toolkit";

  
  /**
 * userProfile reducer for the store.
 *
 * @reducer
*/

  const initialState  = {
    userData: []
  };

const profileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData.push(action.payload);
        },
        getUserDataList: (state) => {
            return state.userData;
          },
          
    }
})

export const {setUserData, getUserDataList} = profileSlice.actions
export default profileSlice.reducer;