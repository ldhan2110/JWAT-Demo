import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserState {
  username: string,
  password: string;
}

// Define the initial state using that type
const initialState: UserState = {
    username: 'dsadas',
    password: ''
}

export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      login:(state, action: PayloadAction<{username: string, password: string}>) => {
        return {
            username: action.payload.username,
            password: action.payload.password
        }
      }
    },
  });
  
  export const { login } = userSlice.actions
  
  export default userSlice.reducer