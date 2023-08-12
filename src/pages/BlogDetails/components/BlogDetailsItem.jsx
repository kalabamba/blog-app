import React from 'react'

const BlogDetailsItem = ({id, title, description }) => {
  return (
	<div>
		<p>blog id: { id }</p>
		<p>blog title: { title }</p>
		<p>blog desc: { description }</p>
	</div>
  )
}

export default BlogDetailsItem