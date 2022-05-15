import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { TiLocationOutline } from 'react-icons/ti'
import { CgClose } from 'react-icons/cg'
import '../assets/styles/Hero.css'
import Sliders from './Sliders'

const Hero = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-container">
                            <div className="hero-content">
                                <Sliders />
                            </div>
                            <div className="search-area">
                                <div className="search-container">
                                    <form className='search-form'>
                                        <span className="search-doctors">
                                            <BsSearch className='hc-search-doctor-icon' />
                                            <input type="text" className="search-input" placeholder="Search Doctors, Conditions, Procedures" />
                                        </span>
                                        <span className="search-location">
                                            <TiLocationOutline className='hc-set-location-icon' />
                                            <input type="text" className="search-input" placeholder="Set your location" />

                                        </span>
                                        <span className="search-button">
                                            <button className="search-button-text">
                                                <BsSearch />
                                                <span>Search</span>
                                            </button>
                                        </span>
                                    </form>
                                </div>
                                <span className="search-suggestions">
                                    You may be looking for:
                                </span>
                                <div className="search-options">
                                    <span className="search-option">
                                        Covid 19
                                        <CgClose />
                                    </span>
                                    <span className="search-option">
                                        Dermatology
                                        <CgClose />
                                    </span>
                                    <span className="search-option">
                                        Dentistry
                                        <CgClose />
                                    </span>
                                    <span className="search-option">
                                        Urology
                                        <CgClose />
                                    </span>
                                    <span className="search-option">
                                        Neurology
                                        <CgClose />
                                    </span>
                                    <span className="search-option">
                                        Pediatrics
                                        <CgClose />
                                    </span>
                                    <span className="search-option-more-btn">
                                        More
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Hero