import React from 'react'
import { RiShieldCrossLine } from 'react-icons/ri'
import { RiStethoscopeFill } from 'react-icons/ri'
import { VscThreeBars } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'
import '../assets/styles/NavBar.css'

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
                                <a href="#/">
                                    <RiShieldCrossLine />
                                </a>
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
                                                <a href="#/">Home</a>
                                            </li>
                                            <li>
                                                <a href="#/">About</a>
                                            </li>
                                            <li>
                                                <a href="#/">Services</a>
                                            </li>
                                            <li>
                                                <a href="#/">Contact</a>
                                            </li>
                                            <li>
                                                <a href="#/">Consultations</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="login-find-doctor">
                                    <a href="#/" className='link-login'>
                                        Login/Signup
                                    </a>
                                    <a href="#/" className='find-doctors'>
                                        <RiStethoscopeFill className='stethoscope' />
                                        Find Doctors
                                    </a>
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