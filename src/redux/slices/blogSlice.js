import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'


const getInitialState = () => {
  const blogs = localStorage.getItem('blogs')
  if(blogs) {
    return (JSON.parse(blogs))
  }else {
    return ([])
  }
}
const initialState = {
  blogs: getInitialState()
}

export const blog = createSlice({
  name: 'blog',
  initialState,
  reducers: {
	  addBlog: (state, action) => {
	    state.blogs.push({id: nanoid(), ...action.payload, createdAt: new Date().toISOString(), editedAt: null})
      state.blogs && localStorage.setItem('blogs', JSON.stringify(state.blogs))
	  },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(blog => blog.id !== action.payload)
      state && localStorage.setItem('blogs', JSON.stringify(state.blogs))
    },
    editBlog: (state, action) => {
      state.blogs = state.blogs.map(blog => {
        if(blog.id === action.payload.id) {
          return {...blog, ...{title: action.payload.title, description: action.payload.description}, editedAt: new Date().toISOString()}
        }
        return blog
      })
      state && localStorage.setItem('blogs', JSON.stringify(state.blogs))
    }
  },
})

export const { addBlog, deleteBlog, editBlog } = blog.actions
export default blog.reducer