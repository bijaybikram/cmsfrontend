import React from 'react'
import "./Navbar.css"

const Navbar = (props) => {
  return (
    <div>
        <header>
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="logo"><a href="/">Bijay Bikram</a></h1>
            </div>
                <ul className="nav-links">
                    <li><a href="/">{props.home}</a></li>
                    <li><a href="/about">{props.about}</a></li>
                    <li><a href="/contact">{props.contact}</a></li>
                </ul>
            
        </nav>
    </header>
    </div>
  )
}

export default Navbar