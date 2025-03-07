import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    name: null,
    email: null,
    mobile: null,
  } as any,
  reducers: {
    setUserData: (state, action: PayloadAction<any>) => {
      state.mobile = action.payload.mobile;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    logout: state => {
      state.mobile = null;
      state.name = null;
      state.email = null;
      state.token = null;
    },
    setUserToken: (state, action: PayloadAction<any>) => {
      state.token = action.payload.token;
    },
  },
});

// Export actions and reducer
export const {setUserData, logout, setUserToken} = userSlice.actions;
export default userSlice.reducer;
