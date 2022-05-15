import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

const Services = () => {
    return (
        <>
            <NavBar />
            <Breadcrumb pageName="Services" />
            <div className="container height-60vh">
                <h1>Services</h1>
            </div>
            <Footer />
        </>
    )
}

export default Services