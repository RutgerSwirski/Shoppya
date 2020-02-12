import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {

    toggleNavbar() {
        const mainNav = document.getElementById('navbarMenuList')
        mainNav.classList.toggle('active')
    }

    handleLogOut() {
        localStorage.removeItem('token')
        window.location = '/'
    }

    render() {
        return(
            <div className="navbar">
                <span className="navbar-toggle" id="navbarToggle">
                    <FontAwesomeIcon icon={faBars} onClick={ this.toggleNavbar } />
                </span>
                <ul className="navbar-section-container" id="navbarMenuList">
                    <div className="navbar-left">
                        <ul className="navbar-items-container">
                            <Link className="navbar-title" to="/">Shoppaya</Link>
                            <Link className="navbar-item" to="/products">products</Link>
                            <li className="navbar-item">about</li>
                            <li className="navbar-item">contact</li>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        { localStorage.getItem('token') ? 
                        <ul className="navbar-items-container">
                            <Link to="/cart" className="navbar-item">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </Link>
                            <li onClick={this.handleLogOut} className="navbar-item">sign out</li>
                        </ul>
                        :
                        <ul className="navbar-items-container">
                            <Link className="navbar-item" to="/login">login</Link>
                            <Link className="navbar-item" to="/signup">signup</Link>
                        </ul>
                        }
                    </div>
                </ul>
            </div>
        )
    }
}

export default Navbar