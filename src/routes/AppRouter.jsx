import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from '../components/Header/Header'
import AddBlogPage from '../pages/AddBlog/AddBlogPage'
import HomePage from '../pages/Home/HomePage'
import BlogListPage from '../pages/BlogList/BlogListPage'
import BlogDetailsPage from '../pages/BlogDetails/BlogDetailsPage'
import ContactPage from '../pages/Contact/ContactPage'
import NotFoundPage from '../pages/NotFound/NotFoundPage'
import styles from "./AppRouter.module.css"
import EditBlogPage from '../pages/EditBlog/EditBlogPage'

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<Header/>
				<Routes>
					<Route path="/" element={<HomePage/>} />
					<Route path="/blogs" element={<BlogListPage/>} />
					<Route path="/blogs/:id" element={<BlogDetailsPage/>} />
					<Route path="/create" element={<AddBlogPage/>} />
					<Route path="/edit/:id" element={<EditBlogPage/>} />
					<Route path="/contact" element={<ContactPage/>} />
					<Route path="*"	element={<NotFoundPage/>} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default AppRouter