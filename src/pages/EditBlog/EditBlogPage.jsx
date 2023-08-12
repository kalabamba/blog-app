import {useState} from 'react'
import { useParams, Navigate } from 'react-router-dom'
//components
import BlogForm from './components/BlogForm/BlogForm'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { editBlog } from '../../redux/slices/blogSlice'
import { deleteBlog } from '../../redux/slices/blogSlice'

const EditBlogPage = () => {
	const { id } = useParams();
	const [success, setSuccess] = useState(false)
	const blog = useSelector(state => state.blog.blogs.find(blog => blog.id === id))
	const dispatch = useDispatch()
	const handleSubmit = (blog) => {
		dispatch(editBlog(blog))
		setSuccess(true)
	}
	const handleDelete = () => {
		dispatch(deleteBlog(id));
		setSuccess(true)
	}
	return (
		<>
			{ success && <Navigate to="/blogs" replace={true}/> }
			<div>EditBlogPage</div>
			<BlogForm onSubmit={handleSubmit} {...blog}/>
			<br />
			<button onClick={handleDelete}>Delete The Blog</button>
		</>
	)
}

export default EditBlogPage