import { useState } from 'react'
const BlogForm = ({onSubmit}) => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [error, setError] = useState('')
	
	const handleTitleChanges = (e) => {
		const title = e.target.value
		setTitle(title)
	}
	const handleDescChanges = (e) => {
		const description = e.target.value
		setDescription(description)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if(!title || !description) {
			setError('Lütfen tüm alanları doldurunuz')
			return
		}else {
			setError('')
			const blog = {title: title, description: description}
			setTitle('')
			setDescription('')
			onSubmit(blog)
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<input placeholder='enter title' value={title} onChange={handleTitleChanges}/>
				</div>
				<div>
					<textarea placeholder='enter description'
					value={description}
					onChange={handleDescChanges}></textarea>
				</div>
				<div>
					{error && <p>{error}</p>}
				</div>
				<div>
					<button type='submit'>Add Blog</button>
				</div>
			</form>
		</div>
	)
}

export default BlogForm