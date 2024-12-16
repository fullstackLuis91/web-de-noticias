import React from "react"
import { Link } from "react-router-dom"
import "./Header.scss"

const Header = () => {
  return (
    <div className= "Header">
        <Link to = "/">Home</Link> /
        <Link to = "/list-news">list-news</Link> /
        <Link to = "/form">/form</Link>
    </div>
  )
}

export default Header