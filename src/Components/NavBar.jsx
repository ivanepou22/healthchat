import React from 'react'
import { RiShieldCrossLine } from 'react-icons/ri'
import { RiStethoscopeFill } from 'react-icons/ri'
import { VscThreeBars } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'
import '../assets/styles/NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="container-fluid border-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="navbar-container-main">
                            <div className="header-logo">
                                <Link to="/">
                                    <RiShieldCrossLine />
                                </Link>
                                <div onClick={handleClick} className={`menu-bars ${isOpen ? 'close-menu' : ''}`}>
                                    <VscThreeBars />
                                </div>
                                <div onClick={handleClick} className={`menu-close ${isOpen ? '' : 'close-menu'}`}>
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className={`header-menu ${isOpen ? '' : 'close-menu-bar'}`}>
                                <div className="main-menu">
                                    <div className="main-ul">
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li>
                                                <Link to="/services">Services</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact</Link>
                                            </li>
                                            <li>
                                                <Link to="/consultations">Consultations</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="login-find-doctor">
                                    <Link to="#/" className='link-login'>
                                        Login/Signup
                                    </Link>
                                    <Link to="#/" className='find-doctors'>
                                        <RiStethoscopeFill className='stethoscope' />
                                        Find Doctors
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar