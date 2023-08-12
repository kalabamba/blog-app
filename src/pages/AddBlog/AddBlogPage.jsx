import {useState} from 'react'
import BlogForm from './components/BlogForm/BlogForm'
import { useDispatch } from 'react-redux'
import { addBlog } from '../../redux/slices/blogSlice'
import { Navigate } from 'react-router-dom'

const AddBlogPage = () => {
	const [success, setSuccess] = useState(false)
	const dispatch = useDispatch()
	const handleSubmit = (blog) => {
		dispatch(addBlog(blog))
		setSuccess(true)
	}
	return (
		<>
			{ success && <Navigate to="/blogs" replace={true}/> } 
			<p>Add Blog Page</p>
			<BlogForm onSubmit={handleSubmit}/>
		</>
	)
}

export default AddBlogPage