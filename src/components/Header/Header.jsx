import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () => {
  return (
	<header className={styles.header}>
    <h1>Blog App</h1>
    <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""} to="/">Home</NavLink>
    <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""} to="/blogs">Blogs</NavLink>
    <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""} to="/create">Create</NavLink>
    <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.active : ""} to="/contact">Contact</NavLink>
  </header>
  )
}

export default Header 