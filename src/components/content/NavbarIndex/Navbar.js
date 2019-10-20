import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import logo from './img/logo-login.png'

//componente del Navbar
const Navbar = () => {
    
        return (
            <div>
                <header>
                    <nav>
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <ul>
                            <li>
                                <Link to="/register">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
}

export default Navbar
