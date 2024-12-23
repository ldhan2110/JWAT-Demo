import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/counterReducer'
import userReducer from './reducer/userReducer'

export const store = configureStore({
  reducer: {
    counters: counterReducer,
    users: userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch