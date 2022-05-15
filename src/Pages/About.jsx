import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

const About = () => {
    return (
        <>
            <NavBar />
            <Breadcrumb pageName="About" />
            <div className="container height-60vh">
                <h1>About</h1>
            </div>
            <Footer />
        </>
    )
}

export default About