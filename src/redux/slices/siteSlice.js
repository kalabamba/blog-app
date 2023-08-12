import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dark: false,
  language: 'tr'
}

export const site = createSlice({
  name: 'site',
  initialState,
  reducers: {
    toggleDark: (state) => {
      state.dark = !state.dark
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    }
  },
})

export const { toggleDark, setLanguage } = site.actions
export default site.reducer