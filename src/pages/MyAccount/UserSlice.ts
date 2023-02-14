import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  fullname:string;
  username: string;
  email: string;
  password:string;
  isLoggedin: boolean;
};

const initialState: UserState = {
  fullname:"",
  username: "",
  email: "",
  password:"",
  isLoggedin: false,
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState> )=> {
      state.fullname = action.payload.fullname;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedin = action.payload.isLoggedin;
    },
  }
});

export const { login } = userSlice.actions;

export const selectUser = (state: { user: { user: string; }; }) => state.user.user;


export const userReducer = userSlice.reducer;


