import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

export default function NavBar() {
    return (
        <div className='nav-container'>
            <NavLink to="/" id="home-btn"><h2>Manga Tracker</h2></NavLink>
            <nav className='nav-bar'>
                <ul>
                    <li>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/Manga">Manga</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/review">Reviews</NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    )
}
