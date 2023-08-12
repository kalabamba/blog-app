import { useSelector } from 'react-redux'
import BlogListItem from './BlogListItem'


const BlogList = () => {
	const { blogs } = useSelector(state => state.blog)

	return (
		<>
			<ul>
				{blogs && blogs.map(blog => (
					<BlogListItem key={blog.id} {...blog}/>
					))}
			</ul>
			{(blogs=== undefined || blogs.length === 0) && <p>No Blogs</p>}
		</>
	)
}

export default BlogList