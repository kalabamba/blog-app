import { useEffect, useState } from 'react'
const BlogForm = ({onSubmit, id, title, description}) => {
	const [updatedTitle, setUpdatedTitle] = useState('')
	const [updatedDescription, setUpdatedDescription] = useState('')
	const [error, setError] = useState('')
	
	const handleTitleChanges = (e) => {
		const title = e.target.value
		setUpdatedTitle(title)
	}
	const handleDescChanges = (e) => {
		const description = e.target.value
		setUpdatedDescription(description)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if(updatedTitle === "" || updatedDescription === "") {
			setError('Lütfen tüm alanları doldurunuz')
			return
		}else {
			setError('')
			const blog = {id: id, title: updatedTitle, description: updatedDescription}
			setUpdatedTitle('')
			setUpdatedDescription('')
			onSubmit(blog)
		}
	}
	useEffect(() => {
		if(title && description) {
			setError('')
			setUpdatedTitle(title)
			setUpdatedDescription(description)
		}
	}, [title, description])

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<input placeholder='enter title' value={updatedTitle} onChange={handleTitleChanges}/>
				</div>
				<div>
					<textarea placeholder='enter description'
					value={updatedDescription}
					onChange={handleDescChanges}></textarea>
				</div>
				<div>
					{error && <p>{error}</p>}
				</div>
				<div>
					<button type='submit'>Save Changes</button>
				</div>
			</form>
		</div>
	)
}

export default BlogForm