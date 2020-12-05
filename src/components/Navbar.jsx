import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { NavbarData } from './NavbarData'
function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={() => setShowNavbar(!showNavbar)} />
                </Link>
            </div>
            <nav className={showNavbar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-item">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {NavbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
