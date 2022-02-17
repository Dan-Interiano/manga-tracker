import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

export default function NavBar() {
    return (
        <nav className='nav-bar'>
        <h1>Riano's Manga Tracker</h1>
            <div className="nav-links">
                <ul>
                    <li>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    )
}
