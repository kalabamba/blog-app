import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import BlogDetailsItem from './components/BlogDetailsItem';

const BlogDetailsPage = () => {
  const { id } = useParams();
  const blog = useSelector(state => state.blog.blogs.find(blog => blog.id === id))

  return (
    <div>
      <BlogDetailsItem {...blog}/>
    </div>
  )
}

export default BlogDetailsPage