import { configureStore } from '@reduxjs/toolkit'
import siteReducer from "../slices/siteSlice"
import blogsReducer from "../slices/blogSlice"

const store = configureStore({
  reducer: {
    site: siteReducer,
	  blog: blogsReducer
  },
  devTools: true,
})

export default store