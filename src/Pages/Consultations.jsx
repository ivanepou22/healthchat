import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

const Consultations = () => {
    return (
        <>
            <NavBar />
            <Breadcrumb pageName="Consultations" />
            <div className="container height-60vh">
                <h1>Consultations</h1>
            </div>
            <Footer />
        </>
    )
}

export default Consultations